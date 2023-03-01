
// var car = "Lada";
//js
var cars = ["BMW","Audi","Kia","Hyundai","Aston Martin",car,21,true]; //array length is equal to 4
//c#

// console.log(cars[cars.length-1]); //last element
// console.log(cars[2]); // first element

// var letters = ['a','b','c'];

// console.log(letters[3]);

const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";


cars[5] = "Mercedes";
console.log(cars.length);  //6
console.log(cars[3]);   //undefined
console.log(cars[4]);   //undefined
console.log(cars[5]);   //Mercedes


const fruits = ["Banana","Apple","Kiwi"];
fruits[0]="Pear";
console.log(fruits[0]);
// fruits = ["Pear"];  //wrong
// const fruit = "Pear";

// fruit = "Apple";


const student1 = {firstName:"Yusif", lastName:"Eliyev", age:20};
const student2 = {firstName:"Irade", lastName:"Guleliyeva", age:20};
const student3 = {firstName:"Revan", lastName:"Iskenderli", age:20};

let students = [student1,student2,student3];

console.log(typeof students);

let numbers = [ [1,2] , [3,4] , [5,6,7] ];

console.log(numbers[2][1]);
