using System.Diagnostics.Metrics;
using System;

namespace Employee
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Başlanğıcda boş bir array-iniz olsun və layihəni run etdikdə sizdə enter new employee istəsin.
            //Hər dəfə add etdikdən sonra do you want to continue soruşsun və əgər yes daxil etsəniz yeni 
            //employee-ni əlavə edin və nə vaxt ki, no daxil etsəniz o zaman layihəni dayandırıb 
            //employee - ləri console - a versin. (C# dilində) hint: (Array.Resize & loops)

            string[] employees = new string[0];
            bool flag = true;
            do {
                Console.Write("Enter new employee: ");
                string employee = Console.ReadLine();
                Array.Resize(ref employees, employees.Length + 1);
                employees[employees.Length - 1] = employee;
                Console.Write("Do you want to continue?");
                string answer = Console.ReadLine();
                if(answer.ToUpper() == "YES")
                {
                    continue;
                }
                else
                {
                    flag = false;
                }
            }while (flag);
            Console.WriteLine("-----------------");
            foreach (string employee in employees)
            {
                Console.WriteLine(employee);
            }
        }
    }
}