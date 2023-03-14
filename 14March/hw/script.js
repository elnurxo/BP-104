let name = document.querySelector("#student-name");
let surname = document.querySelector("#student-surname");
let age = document.querySelector("#student-age");
let email = document.querySelector("#student-email");
let gender = document.querySelectorAll(".gender");
let btn = document.querySelector("button");
let tbody = document.querySelector("tbody");
let errorMsg = document.querySelector(".errorMsg");
console.log(errorMsg);
//click event
btn.addEventListener("click", function (e) {
  e.preventDefault(); //to disable form from refreshing
  //#region different ways to get genders
  // for (let index = 0; index < gender.length; index++) {
  //     console.log(gender[index].checked);
  // }
  //for (const item of gender) {
  //   console.log(item);
  //}
  //#endregion

  //check if gender is selected
  let checkGender = undefined;
  gender.forEach((element)=>{
    if (element.checked){
        checkGender = element.value;
        element.checked = false;
    }
  });

  if (name.value.trim()!=="" && surname.value.trim()!=="" && age.value.trim()!=="" && email.value.trim()!=="" && checkGender!==undefined) {
    tbody.innerHTML += `<tr>
    <td>${name.value}</td>
    <td>${surname.value}</td>
    <td>${age.value}</td>
    <td>${checkGender}</td>
    <td>${email.value}</td>
  </tr>`

  //reset form datas
  name.value = "";
  surname.value = "";
  age.value = "";
  email.value = "";
  checkGender = undefined;
  
  //remove error message
  errorMsg.style.display = "none";
  }
  else{
    errorMsg.style.display = "block";
  }
});