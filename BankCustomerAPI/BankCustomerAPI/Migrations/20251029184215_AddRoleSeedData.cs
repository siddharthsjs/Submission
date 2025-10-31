using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BankCustomerAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddRoleSeedData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                schema: "training",
                table: "UserRoles",
                keyColumns: new[] { "RoleId", "UserId" },
                keyValues: new object[] { 3, 3 });

            migrationBuilder.DeleteData(
                schema: "training",
                table: "UserRoles",
                keyColumns: new[] { "RoleId", "UserId" },
                keyValues: new object[] { 4, 4 });

            migrationBuilder.InsertData(
                schema: "training",
                table: "Roles",
                columns: new[] { "RoleId", "RoleName" },
                values: new object[,]
                {
                    { 1, "Admin" },
                    { 2, "User" },
                    { 3, "BranchManager" }
                });

            migrationBuilder.UpdateData(
                schema: "training",
                table: "Users",
                keyColumn: "UserId",
                keyValue: 1,
                column: "PasswordHash",
                value: "$2a$11$Hxzk0osjIDAb6.OyTiF/HOHe59QW60jSewqXzVZVocYHMf7yPpvkW");

            migrationBuilder.UpdateData(
                schema: "training",
                table: "Users",
                keyColumn: "UserId",
                keyValue: 2,
                column: "PasswordHash",
                value: "$2a$11$dtuG7PVqckL1dzyiHnqhzeurA845kpZX.Cef7gnbLIz817lq868CC");

            migrationBuilder.UpdateData(
                schema: "training",
                table: "Users",
                keyColumn: "UserId",
                keyValue: 3,
                column: "PasswordHash",
                value: "$2a$11$6HNzfGocSqOpE8O9wWejXOmWL0ZQVPFrOZnFAnCUDmyc367T7GNcu");

            migrationBuilder.UpdateData(
                schema: "training",
                table: "Users",
                keyColumn: "UserId",
                keyValue: 4,
                column: "PasswordHash",
                value: "$2a$11$r1miLpdJM35cg8TnygOPROngouD3OWM1Wjp23vFnuwcpPY0A.hcZm");

            migrationBuilder.InsertData(
                schema: "training",
                table: "UserRoles",
                columns: new[] { "RoleId", "UserId" },
                values: new object[,]
                {
                    { 1, 3 },
                    { 2, 3 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                schema: "training",
                table: "Roles",
                keyColumn: "RoleId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                schema: "training",
                table: "UserRoles",
                keyColumns: new[] { "RoleId", "UserId" },
                keyValues: new object[] { 1, 3 });

            migrationBuilder.DeleteData(
                schema: "training",
                table: "UserRoles",
                keyColumns: new[] { "RoleId", "UserId" },
                keyValues: new object[] { 2, 3 });

            migrationBuilder.DeleteData(
                schema: "training",
                table: "Roles",
                keyColumn: "RoleId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                schema: "training",
                table: "Roles",
                keyColumn: "RoleId",
                keyValue: 2);

            migrationBuilder.InsertData(
                schema: "training",
                table: "UserRoles",
                columns: new[] { "RoleId", "UserId" },
                values: new object[,]
                {
                    { 3, 3 },
                    { 4, 4 }
                });

            migrationBuilder.UpdateData(
                schema: "training",
                table: "Users",
                keyColumn: "UserId",
                keyValue: 1,
                column: "PasswordHash",
                value: "f46aee33da46f0c7ce96527f1b6db4a81d97a1f61dd9b5ec7b1820e0d020b6f3");

            migrationBuilder.UpdateData(
                schema: "training",
                table: "Users",
                keyColumn: "UserId",
                keyValue: 2,
                column: "PasswordHash",
                value: "83eecdd36bdb7d11e9eb1651c1c7bfa1a9d45fef5a6f1b3bda2c8c6f9dba7613");

            migrationBuilder.UpdateData(
                schema: "training",
                table: "Users",
                keyColumn: "UserId",
                keyValue: 3,
                column: "PasswordHash",
                value: "f46aee33da46f0c7ce96527f1b6db4a81d97a1f61dd9b5ec7b1820e0d020b6f3");

            migrationBuilder.UpdateData(
                schema: "training",
                table: "Users",
                keyColumn: "UserId",
                keyValue: 4,
                column: "PasswordHash",
                value: "83eecdd36bdb7d11e9eb1651c1c7bfa1a9d45fef5a6f1b3bda2c8c6f9dba7613");
        }
    }
}
