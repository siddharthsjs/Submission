using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BankCustomerAPI.Migrations
{
    /// <inheritdoc />
    public partial class CreateTables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                schema: "training",
                table: "Users",
                keyColumn: "UserId",
                keyValue: 1,
                columns: new[] { "CreatedDate", "PasswordHash" },
                values: new object[] { new DateTime(2025, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "$2a$11$mf558hnExTM5aanDHQ5tRedxV11O7yLPy.AHNSQH7VIL8YGzcT.RC" });

            migrationBuilder.UpdateData(
                schema: "training",
                table: "Users",
                keyColumn: "UserId",
                keyValue: 2,
                columns: new[] { "CreatedDate", "PasswordHash" },
                values: new object[] { new DateTime(2025, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "$2a$11$/hghFa7KbFibfWkxsXHn/.VTdSLcPkrB8WLM8.cX5kW.Pfl1bW2wm" });

            migrationBuilder.UpdateData(
                schema: "training",
                table: "Users",
                keyColumn: "UserId",
                keyValue: 3,
                columns: new[] { "CreatedDate", "PasswordHash" },
                values: new object[] { new DateTime(2025, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "$2a$11$BZAbE0tpk5iMLrrCLtYy7.Bx.NQu437BdeqQU2rL0GAUFOXYFuXwm" });

            migrationBuilder.UpdateData(
                schema: "training",
                table: "Users",
                keyColumn: "UserId",
                keyValue: 4,
                columns: new[] { "CreatedDate", "PasswordHash" },
                values: new object[] { new DateTime(2025, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "$2a$11$PSz5T/mypJT32cfjaEyi6OO0B9gxaMBnN4fZqoIcmO7A/r1lRv8B6" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                schema: "training",
                table: "Users",
                keyColumn: "UserId",
                keyValue: 1,
                columns: new[] { "CreatedDate", "PasswordHash" },
                values: new object[] { new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "$2a$11$Hxzk0osjIDAb6.OyTiF/HOHe59QW60jSewqXzVZVocYHMf7yPpvkW" });

            migrationBuilder.UpdateData(
                schema: "training",
                table: "Users",
                keyColumn: "UserId",
                keyValue: 2,
                columns: new[] { "CreatedDate", "PasswordHash" },
                values: new object[] { new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "$2a$11$dtuG7PVqckL1dzyiHnqhzeurA845kpZX.Cef7gnbLIz817lq868CC" });

            migrationBuilder.UpdateData(
                schema: "training",
                table: "Users",
                keyColumn: "UserId",
                keyValue: 3,
                columns: new[] { "CreatedDate", "PasswordHash" },
                values: new object[] { new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "$2a$11$6HNzfGocSqOpE8O9wWejXOmWL0ZQVPFrOZnFAnCUDmyc367T7GNcu" });

            migrationBuilder.UpdateData(
                schema: "training",
                table: "Users",
                keyColumn: "UserId",
                keyValue: 4,
                columns: new[] { "CreatedDate", "PasswordHash" },
                values: new object[] { new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "$2a$11$r1miLpdJM35cg8TnygOPROngouD3OWM1Wjp23vFnuwcpPY0A.hcZm" });
        }
    }
}
