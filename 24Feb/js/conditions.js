var num1 = 10;
var num2 = 20;
var num3 = 30;
var avg = 0;
var max,min;

if((num1 > num2 && num1 > num3) && (num2 < num1 && num2 < num3)){
    max = num1;
    min = num2;
    avg = (num1 + num2) / 2;
    console.log("Answer: ", avg);
}
else if((num1 > num2 && num1 > num3) && (num3 < num1 && num3 < num2)){
    console.log("Answer: ", (num1 + num3) / 2);
}
else if((num2 > num1 && num2 > num3) && (num1 < num2 && num1 < num3)){
    console.log("Answer: ", (num2 + num1) / 2);
}
else if((num2 > num1 && num2 > num3) && (num3 < num1 && num3 < num2)){
    console.log("Answer: ", (num2 + num3) / 2);
}
else if((num3 > num1 && num3 > num2) && (num1 < num2 && num1 < num3)){
    console.log("Answer: ", (num3 + num1) / 2);
}
else if((num3 > num1 && num3 > num2) && (num2 < num1 && num2 < num3)){
    console.log("Answer: ", (num3 + num2) / 2);
}
else
{
    console.log("Numbers are the same: ", num1=num2=num3);
}