using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Models;

namespace Server.Controllers;

[ApiController]
[Route("[controller]")]
public class CurbMountController : ControllerBase
{
    private readonly SkylightContext _context; 

    public CurbMountController(SkylightContext context)
    {
        _context = context; 
    }

    //Get: All Curb Mounted Skylights
    [HttpGet]
    public async Task<ActionResult<IEnumerable<CurbMount>>> GetCurbMounts()
    {
        return await _context.CurbMounts.ToListAsync();
    }

    //Get Skylight ID
    [HttpGet("{id}")]
    public async Task<ActionResult<CurbMount>> GetCurbMount(int id)
    {
        var CurbMount = await _context.CurbMounts.FindAsync(id);

        if(CurbMount == null)
        {
            return NotFound();
        }
        return CurbMount; 
    }
}
