using BeerCatalog.backend.DataAccess.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BeerCatalog.backend.DataAccess.Contexts
{
    public class BeerCatalogDbContext : DbContext
    {
        public BeerCatalogDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<FavoriteBeer> FavoriteBeers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().Property(u => u.Username).HasMaxLength(64).IsRequired();
            modelBuilder.Entity<User>().HasIndex(u => u.Username).IsUnique();
            modelBuilder.Entity<User>().Property(u => u.Email).HasMaxLength(64).IsRequired();
            modelBuilder.Entity<User>().HasIndex(u => u.Email).IsUnique();
            modelBuilder.Entity<User>().Property(u => u.PasswordHash).HasMaxLength(256).IsRequired();
            modelBuilder.Entity<User>().Property(u => u.FirstName).HasMaxLength(64).IsRequired();
            modelBuilder.Entity<User>().Property(u => u.LastName).HasMaxLength(64).IsRequired();
            modelBuilder.Entity<User>().Property(u => u.BirthDate).IsRequired();
        }
    }
}
