let input = document.querySelector("input");
input.setAttribute("placeholder","search by name");
let list = document.querySelector("ul");
let API_URL = "https://northwind.vercel.app/api/categories";

//get all categories
fetch(API_URL)
.then((resp) => resp.json())
.then(data =>{
    for (let i = 0; i < data.length; i++) {
        list.innerHTML += `<a href="detail.html?id=${data[i].id}" target="_blank"><li>${data[i].name}</li></a>`;
    }
})

//input search
input.addEventListener("keyup",function(){
    fetch(API_URL)
    .then((response)=>response.json())
    .then(data => {
        list.innerHTML = "";
        for (let i = 0; i < data.length; i++) {
           if (data[i].name.toLowerCase().includes(input.value.toLowerCase())) {
            list.innerHTML += `<a href="detail.html?id=${data[i].id}" target="_blank"><li>${data[i].name}</li></a>`;
           }
        }
    })
});