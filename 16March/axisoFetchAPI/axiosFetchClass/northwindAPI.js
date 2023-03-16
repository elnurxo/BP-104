API_URL = 'https://northwind.vercel.app/api/suppliers';
let tBody = document.querySelector("tbody");
//id, contactName, contactTitle, address.city, address.region

fetch(API_URL)
.then((response)=> response.json())
.then((data) =>{
    let check = false;
    data.forEach(element => {
        if (element.address.region == 'NULL')
            check = true;
        else
            check = false;

        tBody.innerHTML += `<tr style="background-color: ${check ? "red" : "white"}">
        <th>${element.id}</th>
        <td>${element.contactName}</td>
        <td>${element.contactTitle}</td>
        <td>${element.address.city}</td>
        <td>${element.address.region}</td>
      </tr>`;

    });
})