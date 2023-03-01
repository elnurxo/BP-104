let nums = [1,2,3,45,6,55,32,11,103,2];
// let sum = 0;
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i]>99) {
//         sum+=nums[i];
//     }
// }
// console.log(sum);
let max = nums[0];
let min = nums[0];
let sum = 0;
let result = 0;
for (let i = 0; i < nums.length; i++) {
    if (nums[i]>max) {
        max=nums[i];
    }
    if (nums[i]<min) {
        min = nums[i];
    }
    
}
sum = max + min;
result = sum/2;
console.log(result);

//----------------------
var names = ["Aydan","Emil","Aytac","Abdulla","Eldar","Solmaz"];  //6
var name;

for (let i = 0; i < names.length; i++) {
    if (names[i][0]=='A'){
        name = names[i];
        break;
    }
}
console.log("adi A ile baslayanlarin sayi: "+name);


//-------------------------------
var employee1 = {
    firstName: "Eldar",
    lastName: "Axundov",
    salary: 700
}
var employee2 = {
    firstName: "Yusif",
    lastName: "Eliyev",
    salary: 200
}
var employee3 = {
    firstName: "Elnur",
    lastName: "Qasimov",
    salary: 3000
}
let employees = [employee1,employee2,employee3];

for (let i = 0; i < employees.length; i++) {
    if (employees[i].salary>500) {
        console.log(employees[i].firstName+" "+employees[i].lastName);
    }
}

