using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    public class ProductController : Controller
    {
        // GET: Product
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Product()
        {
            return View("Product");
        }

        public ActionResult Product_Detail()
        {
            return View("Product_Detail");
        }
    }
}