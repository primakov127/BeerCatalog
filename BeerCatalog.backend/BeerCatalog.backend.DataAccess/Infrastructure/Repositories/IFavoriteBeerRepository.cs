using BeerCatalog.backend.DataAccess.Models;
using BeerCatalog.backend.DataAccess.SeedWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BeerCatalog.backend.DataAccess.Infrastructure.Repositories
{
    public interface IFavoriteBeerRepository : IRepository<FavoriteBeer>
    {
        Task<IEnumerable<FavoriteBeer>> GetUserFavoriteBeersAsync(Guid userId);
    }
}
