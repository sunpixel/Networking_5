using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Text.Json;
using TC_5.src;


namespace TC_5.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecieveController : ControllerBase
    {

        private readonly ILogger<RecieveController> _logger;

        public RecieveController(ILogger<RecieveController> logger)
        {
            _logger = logger;
        }


        [HttpPost("calculate")]
        public ActionResult Do_Math([FromBody] Data dat)
        {
            _logger.LogInformation("Received calculation data: {dat}", dat);

            MathOperations mat = new();
            Data data = new();

            double x;

            if (dat != null)
            {
                _logger.LogInformation(dat.ToString());
                if (dat.Operation >= 0 && dat.Operation < 10)
                {
                    x = mat.Perform_Math(dat.Num1, dat.Num2, (MathOperations.Operation)dat.Operation);

                    _logger.LogInformation(x.ToString());


                    data.Num1 = x;


/*                    data.Num1 = x;
                    data.Operation = dat.Operation;*/

                    return Ok(data);
                }


                return BadRequest();
            }

            else { return BadRequest(); }
                
        }

    }
}
