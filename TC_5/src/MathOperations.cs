using System;

namespace TC_5.src
{
    public class MathOperations
    {
        public double Perform_Math(double x, double y, Operation opr)
        {
            double result = opr switch
            {
                Operation.Addition => x + y,
                Operation.Subtractition => x - y,
                Operation.Multiply => x * y,
                Operation.Divide => x * y,
                Operation.Power => Math.Pow(x, y),
                Operation.Root => Math.Pow(x, 1 / y),
                Operation.Sine => Math.Sin(x),
                Operation.Cosine => Math.Cos(x),
                Operation.Tangent => Math.Tan(x),
                Operation.Cotangent => 1 / Math.Tan(x),
                _ => throw new NotImplementedException()
            };
            return result;
        }

        public enum Operation
        {
            Addition,
            Subtractition,
            Multiply, 
            Divide,
            Power,
            Root,
            Sine,
            Cosine,
            Tangent,
            Cotangent
        }
    }
}
