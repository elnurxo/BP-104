let list = document.querySelector("#fetch-list");
let API_URL = "https://jsonplaceholder.typicode.com/users";


// GET DATA USING FETCH
fetch(API_URL)
.then((resp)=> resp.json())
.then(data => {
   for (let i = 0; i < data.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${data[i].address.city}, <a href="https://www.${data[i].website}" target="_blank">${data[i].website}</a>`;
    list.append(listItem);

        if (data[i].id>5) {
            listItem.style.color = "red";
        }
   }
});