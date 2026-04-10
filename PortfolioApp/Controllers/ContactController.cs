using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PortfolioApp.Data;
using PortfolioApp.Models;

namespace PortfolioApp.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class ContactController : ControllerBase
  {
    private readonly ApplicationDbContext _context;
    private readonly ILogger<ContactController> _logger;

    public ContactController(ApplicationDbContext context, ILogger<ContactController> logger)
    {
      _context = context;
      _logger = logger;
    }

    [HttpPost]
    public async Task<IActionResult> SubmitContact([FromBody] Contact contact)
    {
      try
      {
        if (!ModelState.IsValid)
        {
          return BadRequest(ModelState);
        }

        contact.CreatedAt = DateTime.UtcNow;
        _context.Contacts.Add(contact);
        await _context.SaveChangesAsync();

        _logger.LogInformation("Contact form submitted successfully by {Name} ({Email})", contact.Name, contact.Email);

        return Ok(new { success = true, message = "Contact form submitted successfully!" });
      }
      catch (Exception ex)
      {
        _logger.LogError(ex, "Error submitting contact form");
        return StatusCode(500, new { success = false, message = "An error occurred while submitting the form." });
      }
    }

    [HttpGet]
    public async Task<IActionResult> GetContacts()
    {
      try
      {
        var contacts = await _context.Contacts
            .OrderByDescending(c => c.CreatedAt)
            .ToListAsync();

        return Ok(contacts);
      }
      catch (Exception ex)
      {
        _logger.LogError(ex, "Error retrieving contacts");
        return StatusCode(500, new { success = false, message = "An error occurred while retrieving contacts." });
      }
    }
  }
}