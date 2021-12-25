using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    public class ShoppingController : Controller
    {
        // GET: Shopping
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Cart()
        {
            return View("Cart");
        }

        public ActionResult Checkout()
        {
            return View("Checkout");
        }
    }
}