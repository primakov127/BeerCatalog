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
    public class FavoriteBeerRepository : BaseRepository<FavoriteBeer>, IFavoriteBeerRepository
    {
        public FavoriteBeerRepository(DbContext dbContext) : base(dbContext)
        {
        }

        public async Task<IEnumerable<FavoriteBeer>> GetUserFavoriteBeersAsync(Guid userId)
        {
            return await this.FindByCondition(b => b.UserId.Equals(userId)).ToListAsync();
        }
    }
}
