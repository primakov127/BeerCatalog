using BeerCatalog.backend.DataAccess.Contexts;
using BeerCatalog.backend.DataAccess.SeedWork;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace BeerCatalog.backend.DataAccess.SeedWork
{
    public abstract class BaseRepository<T> : IRepository<T> where T : class
    {
        protected DbContext DbContext { get; set; }

        public BaseRepository(DbContext dbContext)
        {
            DbContext = dbContext;
        }

        public IQueryable<T> FindByCondition(Expression<Func<T, bool>> expression)
        {
            return this.DbContext.Set<T>().Where(expression).AsNoTracking();
        }

        public IQueryable<T> GetAll()
        {
            return this.DbContext.Set<T>().AsNoTracking();
        }

        public T Create(T entity)
        {
            return this.DbContext.Set<T>().Add(entity).Entity;
        }

        public T Delete(T entity)
        {
            return this.DbContext.Set<T>().Remove(entity).Entity;
        }

        public T Update(T entity)
        {
            return this.DbContext.Set<T>().Update(entity).Entity;
        }
    }
}
