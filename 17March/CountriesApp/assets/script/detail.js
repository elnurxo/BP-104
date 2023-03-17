let countryName = new URLSearchParams(location.search).get("name");


let API_URL_DETAIL = `https://restcountries.com/v3.1/name/${countryName}`;

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

//detail page data
let detailWrapper = document.querySelector(".detail-wrapper");
fetch(API_URL_DETAIL)
.then(res => res.json())
.then(data => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        var detailData = `<div class="row justify-content-between mt-5">
        <div class="col-lg-5">
            <div class="img-wrapper">
                <img src="${data[i].flags.png}" alt="${data[i].flags.alt}">
            </div>
        </div>
        <div class="col-lg-7 d-flex justify-content-center">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="data-1">
                        <h1 class="mb-4">${data[i].name.common}</h1>
                        <p><b>Native Name:</b> <span>${data[i].name.nativeName.official}</span></p>
                        <p><b>Population:</b> <span>${data[i].population}</span></p>
                        <p><b>Region:</b> <span>${data[i].region}</span></p>
                        <p><b>Sub Region:</b> <span>${data[i].subregion}</span></p>
                        <p><b>Capital:</b> <span>${data[i].capital}</span></p>
                    </div>
                </div>
                <div class="col-lg-6">
                  <div class="data-2">
                    <p><b>Top Level Domain:</b> <span>Belgie</span></p>
                    <p><b>Currencies:</b> <span>${data[i].currencies.name}</span></p>
                    <p><b>Languages:</b> <span>${data[i].languages}</span></p>
                  </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 d-flex align-items-center">
                        <h5 class="borders-title">Border Countries: </h5>
                        <ul class="d-flex list-unstyled borders-list">
                            <li><span>France</span></li>
                            <li><span>Germany</span></li>
                            <li><span>Netherlands</span></li>
                        </ul>
                    </div>
                </div>
            </div>
          
        </div>
    </div>`
    }

    detailWrapper.append(detailData);
    detailWrapper.innerHTML = detailData;
})

