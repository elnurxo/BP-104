//1. Verilmiş ədədlər siyahısını artan sıra ilə düzülmüş ədədlər halına gətirən alqoritm.

let numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// output - 1,2,3,4,6,8,9,11

// let temp = 0;
// let counter = 0;
// for (let i = 0; i < numbers.length; i++) {
//   for (let j = 0; j < numbers.length; j++) {
//     counter++;
//     if (numbers[j] > numbers[j+1]) {
//      temp=numbers[i]
//       numbers[i] = numbers[j];
//       numbers[j] = temp;
//     }
//   }
// }
// console.log(counter);
// console.log('result');
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// let number = [5,1,2,3,4];
// let tempData;
// for (let i = 0; i < number.length; i++) {
//     if(number[i]>number[i+1]){
//         tempData = number[i];
//         number[i] = number[i+1];
//         number[i+1] = tempData;
//     }
// }

// number.forEach(element => {
//     console.log(element);
// });

//------------------------------------------------
//2. Verilmiş iki ədədlər siyahısından birincisinin ikincisinin içində
//olub olmadığını tapan alqoritm.Yəni birinci array-dəki ədədlərin hamısı
//2ci array-də də varsa true çıxır output-a , hər hansısa biri yoxdursa false

let nums1 = [1, 21, 11, 3];
let nums2 = [4, 6, 1, 7, 3, 8, 2, 9];
let count = 0;
let flag = false;

for (let i = 0; i < nums1.length; i++) {
  for (let j = 0; j < nums2.length; j++) {
    count = 0;
    if (nums1[i] == nums2[j]) {
      flag = true;
      count++;
      break;
    }
  }
  if (count == 0) {
    flag = false;
    break;
  }
}
console.log(flag);

//3. Verilmiş artan sıra ilə düzülmüş ədədlər siyahısındaki
//n ədədinin yerləşdiyi indexi tapan alqoritm (binary search)
var arr = [1, 2, 3, 4, 5];
var tValue = 44;
let mid;
var start = 0,
  end = arr.length - 1;
while (start <= end) {
  mid = Math.floor((start + end) / 2);
  if (arr[mid] == tValue) {
    console.log('searched value is: ',mid);
    break;
  } else if (arr[mid] < tValue)
    start = mid + 1;
  else
    end = mid - 1;
}
if (start > end)
  console.log(-1);
