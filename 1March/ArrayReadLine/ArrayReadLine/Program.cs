namespace ArrayReadLine
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int size;
            string sizeStr;

            do
            {
                Console.Write("Enter size of array: ");
                sizeStr = Console.ReadLine();
            } while (!int.TryParse(sizeStr,out size));

            //size = Convert.ToInt32(sizeStr);

            //initializing empty array
            double[] points = new double[size];

            for (int i = 0; i < size; i++) //points.Length
            {
                Console.Write($"{i+1}. enter point: ");
                string pointStr = Console.ReadLine();
                double point = Convert.ToDouble(pointStr);
                points[i] = point;

                //points[i] = Int32.Parse(Console.ReadLine());
            }
            Console.WriteLine("-------------------------------");
            foreach (double point in points)
            {
                Console.WriteLine(point);
            }
        }
    }
}