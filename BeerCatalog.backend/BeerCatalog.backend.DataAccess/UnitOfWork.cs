using BeerCatalog.backend.DataAccess.Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BeerCatalog.backend.DataAccess
{
    public class UnitOfWork : IUnitOfWork
    {
        private DbContext _dbContext;
        private IUserRepository _userRepository;
        private IFavoriteBeerRepository _favoriteBeerRepository;

        public IUserRepository UserRepository { get => _userRepository; set => _userRepository = value; }
        public IFavoriteBeerRepository FavoriteBeerRepository { get => _favoriteBeerRepository; set => _favoriteBeerRepository = value; }

        public UnitOfWork(DbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task SaveAsync()
        {
            await _dbContext.SaveChangesAsync();
        }
    }
}
