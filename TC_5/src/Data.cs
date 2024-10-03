namespace TC_5.src
{
    public class Data
    {

        public double Num1 { get; set; }
        public double Num2 { get; set; }
        public int Operation { get; set; }

        public Data() { }


        public Data(int operation, double num1, double num2 = 0)
        {
            Num1 = num1;
            Num2 = num2;
            Operation = operation;
        }
    }
}
