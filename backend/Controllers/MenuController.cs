
using Microsoft.AspNetCore.Mvc;
using ERP.Data;
using System.Linq;

namespace ERP.Controllers{
[ApiController]
[Route("api/menu")]
public class MenuController:ControllerBase{
AppDb db;
public MenuController(AppDb d){db=d;}
[HttpGet]
public IActionResult Get()=>Ok(db.Menus.ToList());
}
}
