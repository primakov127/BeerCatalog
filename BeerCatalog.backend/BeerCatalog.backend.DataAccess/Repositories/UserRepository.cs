using BeerCatalog.backend.DataAccess.Infrastructure.Repositories;
using BeerCatalog.backend.DataAccess.Models;
using BeerCatalog.backend.DataAccess.SeedWork;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BeerCatalog.backend.DataAccess.Repositories
{
    public class UserRepository : BaseRepository<User>, IUserRepository
    {
        public UserRepository(DbContext dbContext) : base(dbContext)
        {
        }

        public async Task<IEnumerable<User>> GetAllUsersAsync()
        {
            return await this.GetAll().ToListAsync();
        }

        public async Task<User> GetUserByEmail(string email)
        {
            return await this.FindByCondition(u => u.Email.Equals(email)).FirstOrDefaultAsync();
        }

        public async Task<User> GetUserByIdAsync(Guid userId)
        {
            return await this.FindByCondition(u => u.Id.Equals(userId)).FirstOrDefaultAsync();
        }

        public async Task<User> GetUserByUsername(string username)
        {
            return await this.FindByCondition(u => u.Username.Equals(username)).FirstOrDefaultAsync();
        }

        public async Task<User> GetUserWithDetailsAsync(Guid userId)
        {
            return await this.FindByCondition(u => u.Id.Equals(userId)).Include(u => u.FavoriteBeers).FirstOrDefaultAsync();
        }
    }
}
