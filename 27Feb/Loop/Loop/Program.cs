// See https://aka.ms/new-console-template for more information
using System;

var num1 = 7;
var num2 = 3;


for (var i = 0; i < num1; i++)
{
    for (var j = 0; j < num2; j++)
    {
        if (i == j)
        {
            Console.WriteLine(i);
        }
    }
}
