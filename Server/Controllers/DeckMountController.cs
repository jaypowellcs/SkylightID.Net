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
    public class DeckMountController : ControllerBase
    {
        private readonly SkylightContext _context;

        public DeckMountController(SkylightContext context)
        {
            _context = context;
        }

        //Get: All DeckMounted Skylights
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DeckMount>>> GetDeckMounts()
        {
            return await _context.DeckMounts.ToListAsync();
        }

        //Get Skylight ID
        [HttpGet("{id}")]
        public async Task<ActionResult<DeckMount>> GetDeckMount(int id)
        {
            var DeckMount = await _context.DeckMounts.FindAsync(id);

            if (DeckMount == null)
            {
                return NotFound();
            }
            return DeckMount;
        }
    }
}