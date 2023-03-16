let axiosList = document.querySelector("#axios-list");
let API_URL_AXIOS = "https://jsonplaceholder.typicode.com/users";

axios.get(API_URL_AXIOS)
.then((response)=>{
    for (let i = 0; i < response.data.length; i++) {
        let listItem = document.createElement("li");
        listItem.innerHTML = `${response.data[i].address.city}, <a href="https://www.${response.data[i].website}" target="_blank">${response.data[i].website}</a>`;
        axiosList.append(listItem);
    
            if (response.data[i].id>5) {
                listItem.style.color = "red";
            }
       }
})