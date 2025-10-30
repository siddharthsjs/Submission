using BankCustomerAPI.Data;
using BankCustomerAPI.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));


builder.Services.AddScoped<JwtService>();

// CORS (optional)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy => policy.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader());
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowAll");

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();


using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();

    // Ensure database is created / migrated
    context.Database.Migrate();

    // --- Update seeded users with BCrypt hashed passwords ---
    var admin = context.Users.FirstOrDefault(u => u.Email == "admin@test.com");
    if (admin != null)
        admin.PasswordHash = BCrypt.Net.BCrypt.HashPassword("Admin@123");

    var user = context.Users.FirstOrDefault(u => u.Email == "user@test.com");
    if (user != null)
        user.PasswordHash = BCrypt.Net.BCrypt.HashPassword("User@123");

    var adminUser = context.Users.FirstOrDefault(u => u.Email == "adminuser@test.com");
    if (adminUser != null)
        adminUser.PasswordHash = BCrypt.Net.BCrypt.HashPassword("AdminUser@123");

    var noUser = context.Users.FirstOrDefault(u => u.Email == "nouser@test.com");
    if (noUser != null)
        noUser.PasswordHash = BCrypt.Net.BCrypt.HashPassword("NoUser@123");

    context.SaveChanges();
}


app.Run();
