using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BeerCatalog.backend.DataAccess.Models
{
    public class FavoriteBeer
    {
        public Guid Id { get; set; }
        public int BeerId { get; set; }
        public Guid UserId { get; set; }
    }
}
