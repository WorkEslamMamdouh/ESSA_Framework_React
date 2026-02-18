
using Microsoft.EntityFrameworkCore;
using ERP.Models;

namespace ERP.Data{
public class AppDb:DbContext{
public AppDb(DbContextOptions<AppDb> o):base(o){}
public DbSet<User> Users=>Set<User>();
public DbSet<Menu> Menus=>Set<Menu>();
}
}
