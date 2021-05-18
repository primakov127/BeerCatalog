using BeerCatalog.backend.DataAccess.Infrastructure.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BeerCatalog.backend.DataAccess
{
    public interface IUnitOfWork
    {
        IUserRepository UserRepository { get; set; }
        IFavoriteBeerRepository FavoriteBeerRepository { get; set; }
        Task SaveAsync();
    }
}
