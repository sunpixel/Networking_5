using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TC_5.Controllers
{
    [Route("")]
    [ApiController]
    public class HomeController : ControllerBase
    {

        private const string Route = "wwwroot/main.html";

        [HttpGet]
        public ActionResult main_page()
        {
            using var streamReader = new StreamReader(Route);
            var html_file = streamReader.ReadToEndAsync().Result;
            return Content(html_file, "text/html");
        }
    }
}
