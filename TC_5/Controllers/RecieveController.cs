using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TC_5.src;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace TC_5.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecieveController : ControllerBase
    {


        [HttpPost("calculate")]
        public ActionResult Do_Math(Data dat)
        {
            MathOperations mat = new();
            Data data = new();

            double x;

            if (dat != null)
            {
                if (dat.Operation >= 0 && dat.Operation < 10)
                {
                    x = mat.Perform_Math(dat.Num1, dat.Num2, (MathOperations.Operation)dat.Operation);

                    data.Num1 = x;
                    data.Operation = dat.Operation;

                    return Ok(data);
                }


                return BadRequest();
            }

            else { return BadRequest(); }
                
        }

    }
}
