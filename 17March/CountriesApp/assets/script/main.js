let API_URL = "https://restcountries.com/v3.1/all";
let cardsWrapper = document.querySelector(".card-row");

//Get All Countries
fetch(API_URL)
.then((res) => res.json())
.then((data) => {
    data.forEach(country => {
        cardsWrapper.innerHTML += `<div class="col-lg-3 col-sm-12 card-wrapper">
        <div class="card">
            <img class="card-img-top"
                src="${country.flags.png}"
                alt="${country.flags.alt}" height="175">
            <div class="card-body">
                <h5 class="card-title"><a href="detail.html?name=${country.name.official}" target="_blank">${country.name.common}</a></h5>
                <div class="card-data">
                    <p class="population lead"><b>Population:</b> <span>${country.population}</span></p>
                    <p class="region lead"><b>Region:</b> <span>${country.region}</span></p>
                    <p class="capital lead"><b>Capital:</b> <span>${country.capital}</span></p>
                </div>
            </div>
        </div>
    </div>`
    });
})

//Mode
let modeWrapper = document.querySelector(".mode-wrapper");
let icon = document.querySelector(".fa-solid");
let header = document.querySelector("header");
let main = document.querySelector("main");
let input = document.querySelector("input");
let select = document.querySelector("select");

modeWrapper.addEventListener("click",()=>{

    if (icon.classList.contains("fa-moon")) {
        //dark mode
        icon.classList.replace("fa-moon","fa-sun");
        icon.parentElement.nextElementSibling.textContent = "Light Mode";
        header.classList.add("dark-nav");
        main.classList.add("dark-main");
        input.classList.add("dark-input");
        select.classList.add("dark-select");

        //card
        for (let i = 0; i < cardsWrapper.children.length; i++) {
            cardsWrapper.children[i].children[0].style.backgroundColor = "rgb(43,56,68)";
            cardsWrapper.children[i].children[0].style.color = "white";
        }
    }
    else{
        //light mode
        icon.classList.replace("fa-sun","fa-moon");
        icon.parentElement.nextElementSibling.textContent = "Dark Mode";
        header.classList.remove("dark-nav");
        main.classList.remove("dark-main"); 
        input.classList.remove("dark-input");
        select.classList.remove("dark-select");

         //card
         for (let i = 0; i < cardsWrapper.children.length; i++) {
            cardsWrapper.children[i].children[0].style.backgroundColor = "white";
            cardsWrapper.children[i].children[0].style.color = "black";
        }
    }
});

//Search for a Country
input.addEventListener("keyup",()=>{
    axios.get(API_URL)
    .then(res => {
        cardsWrapper.innerHTML = "";
        res.data.forEach(country => {
            if (country.name.common.trim().toLowerCase().includes(input.value.trim().toLowerCase())) {
                cardsWrapper.innerHTML += `<div class="col-lg-3 col-sm-12 card-wrapper">
                <div class="card">
                    <img class="card-img-top"
                        src="${country.flags.png}"
                        alt="${country.flags.alt}" height="175">
                    <div class="card-body">
                        <h5 class="card-title"><a href="detail.html?name=${country.name.official}" target="_blank">${country.name.common}</a></h5>
                        <div class="card-data">
                            <p class="population lead"><b>Population:</b> <span>${country.population}</span></p>
                            <p class="region lead"><b>Region:</b> <span>${country.region}</span></p>
                            <p class="capital lead"><b>Capital:</b> <span>${country.capital}</span></p>
                        </div>
                    </div>
                </div>
            </div>`
            }
        });
    })
});