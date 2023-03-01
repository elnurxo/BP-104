namespace Array
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string[] cars = { "Volvo", "BMW", "Ford", "Mazda" };
            Console.WriteLine(cars);

            for (int i = 0; i < cars.Length; i++)
            {
                Console.WriteLine(cars[i]);
            }

            int[] numbers = { 1, 2, 38, 14, 5, 91, 100, 457, 21 };
            int max = numbers[0];
            for (int i = 1; i < numbers.Length; i++)
            {
                if (max < numbers[i])
                {
                    max = numbers[i];
                }
            }
            Console.WriteLine(max);


            string[] names = { "Irade", "Yusif", "Revan", "Azade", "Punhan" ,"Ali"};

            for (int i = 0; i < names.Length; i++)
            {
                if (names[i].Length>5)
                {
                    Console.WriteLine(names[i]);
                }
            }

            string name = "Abdulla";
            char simvol = '!';

            for (int i = 0; i < name.Length; i++)
            {
                Console.WriteLine(name[i]);
            }
            
        }
        
    }
}