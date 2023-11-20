using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Server.Migrations
{
    /// <inheritdoc />
    public partial class DeckSelfDB : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DeckMounts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DeckMountCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OutsideFrameWidth = table.Column<float>(type: "real", nullable: false),
                    OutsideFrameHeight = table.Column<float>(type: "real", nullable: false),
                    RoughOpeningWidth = table.Column<float>(type: "real", nullable: false),
                    RoughOpeningHeight = table.Column<float>(type: "real", nullable: false),
                    SizeCode = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DeckMounts", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SelfFlashes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SelfFlashCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OutsideFrameWidth = table.Column<float>(type: "real", nullable: false),
                    OutsideFrameHeight = table.Column<float>(type: "real", nullable: false),
                    RoughOpeningWidth = table.Column<float>(type: "real", nullable: false),
                    RoughOpeningHeight = table.Column<float>(type: "real", nullable: false),
                    SizeCode = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SelfFlashes", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DeckMounts");

            migrationBuilder.DropTable(
                name: "SelfFlashes");
        }
    }
}
