using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Models;

namespace Server.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class SelfFlashController : ControllerBase
    {
        private readonly SkylightContext _context;

        public SelfFlashController(SkylightContext context)
        {
            _context = context;
        }
        //Get: All SelfFlashed Skylights
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SelfFlash>>> GetSelfFlashes()
        {
            return await _context.SelfFlashes.ToListAsync();
        }

        //Get Skylight ID
        [HttpGet("{id}")]
        public async Task<ActionResult<SelfFlash>> GetSelfFlash(int id)
        {
            var SelfFlash = await _context.SelfFlashes.FindAsync(id);

            if (SelfFlash == null)
            {
                return NotFound();
            }
            return SelfFlash;
        }
    }
}
