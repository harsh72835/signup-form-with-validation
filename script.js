var form = document.querySelector("#form");
var firstName = document.querySelector("#firstName");
var lastName = document.querySelector("#lastName");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var btn = document.querySelector(".btn-green");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  validation();
});

var validation = () => {
  const fname = firstName.value.trim();
  const lname = lastName.value.trim();
  const emailVal = email.value.trim();
  const pValue = password.value.trim();
  //firstname required checking with js
  if (fname === "") {
    error(firstName, "First name can not be empty");
  } else if (fname.length <= 2) {
    error(firstName, "First name neeed more than 2 characters");
  } else {
    success(firstName);
  }
  //lastname
  if (lname === "") {
    error(lastName, "Last Name can not be empty");
  } else if (lname.length <= 2) {
    error(lastName, "Last name neeed more than 2 characters");
  } else {
    success(lastName);
  }
  //emial-address
  if (emailVal === "") {
    error(email, "Email can not be empty");
  } else if (emailVal.indexOf("@") <= 0) {
    error(email, "email is not valid");
  } else {
    success(email);
  }
  //password
  if (pValue === "") {
    error(password, "Password field can not be empty");
  } else if (pValue.length <= 4) {
    error(password, "Password must br more than 4 letters");
  } else if (pValue.length >= 15) {
    error(password, "Password length can not be more than 15");
  } else {
    success(password);
  }
};

function error(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerHTML = message;
  formControl.classList.add("show-error");
  formControl.classList.remove("success");
}
function success(input) {
  const formControl = input.parentElement;
  formControl.classList.add("success");
  formControl.classList.remove("show-error");
}
