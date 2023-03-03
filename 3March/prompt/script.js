let num1Str = window.prompt("enter number 1");
let num2Str = window.prompt("enter number 2");
let symbol = prompt("enter symbol");
let num1 = parseInt(num1Str);
let num2 = parseInt(num2Str);
let result = undefined;
switch (symbol) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num1 / num2;
    break;
  default:
    window.alert("symbol is not correct!");
    break;
}

console.log(result);
if (result!==undefined) {
    window.alert("result is "+result);
}
