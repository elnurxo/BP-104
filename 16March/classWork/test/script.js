let container = document.querySelector(".container");
let btn = document.createElement("button");
btn.textContent = "ADD!";
btn.classList.add("btn");
btn.classList.add("btn-primary");
btn.classList.add("mx-3");

//color input
let colorInput = document.createElement("input");
colorInput.setAttribute("type","color");
let wrapper = document.createElement("div");
wrapper.append(btn,colorInput);
container.prepend(wrapper);

//get row
let row = document.querySelector(".row");

btn.addEventListener("click",function(){
    // if (!box.classList.contains("active")) {
    //     box.classList.add("active");
    // }
    // else{
    //     box.classList.remove("active");
    // }
    // box.classList.toggle("active");

    // let color = colorInput.value;
    // box.style.backgroundColor = `${color}`;

    let box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = colorInput.value;
    let column = document.createElement("div");
    column.classList.add("col-1");
    column.classList.add("my-3");
    column.append(box);
    row.append(column);
}); 

