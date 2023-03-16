let input = document.querySelector(".todo-input");
let add = document.querySelector(".btn-warning");
let list = document.querySelector("ul");
let errorMsg = document.querySelector(".text-danger");
input.addEventListener("keyup",function(e){
   if (e.target.value.length<3 || e.target.value.trim()=="") {
        errorMsg.style.display = "inline";
        add.setAttribute("disabled","");
   }
   else{
    errorMsg.style.display = "none";
    add.removeAttribute("disabled","");
   }
});

add.addEventListener("click",function(e){
    e.preventDefault();
    let listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.classList.add("d-flex");
    listItem.classList.add("justify-content-between");
    listItem.classList.add("align-items-center");
    let span = document.createElement("span");
    span.classList.add("lead");
    span.textContent = input.value;
    let btn = document.createElement("button");
    btn.classList.add("btn");
    btn.classList.add("btn-danger");
    btn.textContent = "Delete";
    btn.style.marginRight = "5px";
    let markBtn = document.createElement("button");
    markBtn.textContent = "Done";
    markBtn.classList.add("btn");
    markBtn.classList.add("btn-info");
    let btnWrapper = document.createElement("div");
    btnWrapper.append(btn,markBtn);
    listItem.append(span,btnWrapper);
    list.append(listItem);
    input.value = "";

    //delete buttons
    let deleteButtons = document.querySelectorAll(".btn-danger");
    let markButtons = document.querySelectorAll(".btn-info");

    deleteButtons.forEach((deleteBtn)=>{
        deleteBtn.addEventListener("click",function(e){
            e.target.parentElement.parentElement.remove();
        });
    });

    markButtons.forEach((markBtn)=>{
        markBtn.addEventListener("click",function(e){
            let selectedToDo = e.target.parentElement.previousElementSibling;
            selectedToDo.style.textDecoration = "line-through";
        });
    });
});

let clearAll = document.querySelector("#clear");

clearAll.addEventListener("click",function(){
    list.innerHTML = "";
}); 
