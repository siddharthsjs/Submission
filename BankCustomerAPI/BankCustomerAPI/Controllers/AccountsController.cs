
using BankCustomerAPI.Data;
using BankCustomerAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BankCustomerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class AccountsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AccountsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/accounts - Requires ReadAccount permission
        [HttpGet]
      
        public async Task<IActionResult> GetAccounts()
        {
            var currentUserId = int.Parse(User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value);

            // Get user's permissions to determine what accounts they can see
            var userRoles = await _context.UserRoles
                .Where(ur => ur.UserId == currentUserId)
                .Select(ur => ur.RoleId)
                .ToListAsync();

            var hasAllPermissions = await _context.RolePermissions
                .AnyAsync(rp => userRoles.Contains(rp.RoleId) && rp.PermissionId == 1); // Admin check

            IQueryable<Account> query = _context.Accounts
                .Include(a => a.User)
                .Include(a => a.Branch)
                .Where(a => !a.IsClosed);

            if (!hasAllPermissions)
            {
                // Normal users see only their own accounts
                query = query.Where(a => a.UserId == currentUserId);
            }

            var accounts = await query
                .Select(a => new
                {
                    a.AccountId,
                    a.AccountNumber,
                    a.AccountType,
                    a.Balance,
                    a.CurrencyCode,
                    a.UserId,
                    UserName = a.User.FirstName + " " + a.User.LastName,
                    a.BranchId,
                    BranchName = a.Branch.BranchName
                })
                .ToListAsync();

            return Ok(accounts);
        }

        // POST: api/accounts - Requires CreateAccount permission
        [HttpPost]
     
        public async Task<IActionResult> CreateAccount([FromBody] CreateAccountRequest request)
        {
            var account = new Account
            {
                UserId = request.UserId,
                BranchId = request.BranchId,
                AccountNumber = GenerateAccountNumber(),
                AccountType = request.AccountType,
                CurrencyCode = request.CurrencyCode ?? "INR",
                Balance = request.InitialDeposit,
                CreatedDate = DateTime.UtcNow
            };

            _context.Accounts.Add(account);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAccounts", new { id = account.AccountId }, account);
        }

        // DELETE: api/accounts/{id} - Requires DeleteAccount permission
        [HttpDelete("{id}")]
    
        public async Task<IActionResult> CloseAccount(int id)
        {
            var account = await _context.Accounts.FindAsync(id);
            if (account == null)
                return NotFound(new { message = "Account not found" });

            account.IsClosed = true;
            await _context.SaveChangesAsync();

            return Ok(new { message = "Account closed successfully" });
        }

        private string GenerateAccountNumber()
        {
            return $"ACC{DateTime.UtcNow.Ticks}";
        }
    }

    public class CreateAccountRequest
    {
        public int UserId { get; set; }
        public int BranchId { get; set; }
        public string AccountType { get; set; }
        public string? CurrencyCode { get; set; }
        public decimal InitialDeposit { get; set; }
    }
}
