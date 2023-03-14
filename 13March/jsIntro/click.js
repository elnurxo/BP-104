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
let input = document.querySelector("input");
addBtn.addEventListener("click",()=>{
    // list.innerHTML += `<li>${count}</li>`;
    list.innerHTML += `<li>${input.value}</li>`;
    input.value = "";
});

clear.addEventListener("click",function() {
    list.innerHTML = "";
})

let changeStyle = document.querySelector("#heading");

changeStyle.addEventListener("click",function () {
    heading1.style.color = "red";
    heading1.style.fontSize = "60px";
    heading1.textContent = "CLICKED!";
});




// let allParagraphs = document.querySelectorAll(".paragraph");
// let allSpan = document.querySelectorAll("span");

// console.log(heading1);
// console.log(paragraph);
// console.log(span);
// console.log(allParagraphs[1]);
// console.log(allSpan[0]);

//---------------------------
let paragraphes = document.querySelectorAll("p");
let btn = document.querySelector("#btn-2");

btn.addEventListener("click",()=>{
    for (let index = 0; index < paragraphes.length; index++) {
        paragraphes[index].style.color = "red";
    }
});

let increase = document.querySelector("#increase");
let decrease = document.querySelector("#decrease");
let counter = document.querySelector("#counter");
let count1 = +counter.textContent+1;
increase.addEventListener("click",function(){
    counter.textContent = count1++;
    console.log(counter.textContent);
})
decrease.addEventListener("click",function(){
count1 = +counter.textContent-1;
    if (counter.textContent>0) {
        counter.textContent = count1--;
    }
    else if(+counter.textContent==0){
        decrease.style.backgroundColor = "red";
    }
})


