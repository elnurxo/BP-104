// See https://aka.ms/new-console-template for more information


using System;

var num = -4;
var result=0;
//eger eded musbetdirse ve cutdurse kvadratini tap
//eger eded menfi ve ya tekdirse kubunu tap.

var day = 8;

switch (day)
{
    case 1:
        Console.WriteLine("Monday");
        break;
    case 2:
        Console.WriteLine("Tuesday");
        break;
    case 3:
        Console.WriteLine("Wednesday");
        break;
    case 4:
        Console.WriteLine("Thursday");
        break;
    case 5:
        Console.WriteLine("Friday");
        break;
    case 6:
    case 7:
        Console.WriteLine("Weekend");
        break;
    default:
        Console.WriteLine("invalid input");
        break;
}
