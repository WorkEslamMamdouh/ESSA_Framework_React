
using Microsoft.AspNetCore.Mvc;
using ERP.Data;
using ERP.Models;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Linq;
using System;



namespace ERP.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController : ControllerBase
    {
        AppDb db;
        string key = "SUPER_SECRET_KEY_ERP";
        public AuthController(AppDb d) { db = d; }

        [HttpPost("login")]
        public IActionResult Login(User u)
        {
            var user = db.Users.FirstOrDefault(x => x.Username == u.Username && x.Password == u.Password);
            if (user == null) return Unauthorized();

            var token = new JwtSecurityToken(
            claims: new[] { new Claim("id", user.Id.ToString()) },
            expires: DateTime.Now.AddHours(5),
            signingCredentials: new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key)), SecurityAlgorithms.HmacSha256));

            return Ok(new { token = new JwtSecurityTokenHandler().WriteToken(token) });
        }

        [HttpPost("register")]
        public IActionResult Register(User u)
        {
            db.Users.Add(u);
            db.SaveChanges();
            return Ok();
        }
    }
}
