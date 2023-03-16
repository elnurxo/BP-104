let id = new URLSearchParams(location.search).get("id");
let idHeading = document.querySelector("h4");
let nameHeading = document.querySelector("h1");
let desc = document.querySelector("p");

let API_URL_DETAIL = `https://northwind.vercel.app/api/categories/${id}`;

fetch(API_URL_DETAIL)
.then((resp)=>resp.json())
.then(data => {
    idHeading.innerHTML = `<b>ID: </b> ${data.id}`;
    nameHeading.innerHTML = `<b>Name:</b> ${data.name}`;
    desc.innerHTML = `<b>Description: </b> ${data.description}`;
})