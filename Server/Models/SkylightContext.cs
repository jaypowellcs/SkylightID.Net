using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Server.Models
{
    public class SkylightContext :DbContext
    {
        public DbSet<CurbMount> CurbMounts {get; set;}

        public DbSet<DeckMount> DeckMounts {get; set;}

        public DbSet<SelfFlash> SelfFlashes {get; set;}

        public SkylightContext(DbContextOptions options) : base(options)
        {
            
        }
    }
}