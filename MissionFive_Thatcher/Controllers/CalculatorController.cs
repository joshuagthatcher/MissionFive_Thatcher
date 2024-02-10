using Microsoft.AspNetCore.Mvc;

namespace MissionFive_Thatcher.Controllers
{
    public class CalculatorController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
