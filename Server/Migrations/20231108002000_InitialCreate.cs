using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Server.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CurbMounts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CurbMountCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SizeCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Outsidecurbwidth = table.Column<float>(type: "real", nullable: false),
                    OutsideCurbHeight = table.Column<float>(type: "real", nullable: false),
                    MaxSkyClearWidth = table.Column<float>(type: "real", nullable: false),
                    MaxSkyClearHeight = table.Column<float>(type: "real", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CurbMounts", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CurbMounts");
        }
    }
}
