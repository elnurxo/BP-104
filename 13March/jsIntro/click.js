console.log(document);

//get element by id
// let heading1 = document.getElementById("title");
// console.log(heading1);
// //get elements by className
// let paragraph = document.getElementsByClassName("paragraph");
// console.log(paragraph[0]);
// // get element by tagName
// let span = document.getElementsByTagName("span");
// console.log(span[0]);

//query selector
let heading1 = document.querySelector("#title"); //id
let paragraph = document.querySelector(".paragraph"); //class name
let span = document.querySelector("span");

let clear = document.querySelector("#clear");


let addBtn = document.querySelector("#add");
let list = document.querySelector("ul");
var count = 1;
addBtn.addEventListener("click",()=>{
    list.innerHTML += `<li>${count}</li>`;
    count++;
});

clear.addEventListener("click",function() {
    list.innerHTML = "";
})




// let allParagraphs = document.querySelectorAll(".paragraph");
// let allSpan = document.querySelectorAll("span");

// console.log(heading1);
// console.log(paragraph);
// console.log(span);
// console.log(allParagraphs[1]);
// console.log(allSpan[0]);