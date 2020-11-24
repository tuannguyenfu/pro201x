var isHidden = "hidden";

var btnNext = document.getElementById("next");

function welcome() {
  document.getElementById("next").style.display = "none";
  sayHello();
}

function sayHello() {
  alert("Welcome to the first JavaScript!");
}

function sayGoodbye() {
  alert("Thank you for providing information!");
}

function inputName() {
  var name = prompt("Please enter your name");
  document.getElementById("name").innerHTML = "Full Name: <b>" + name + "</b>";
}

function inputCity() {
  var city = prompt("Please enter your city");
  document.getElementById("city").innerHTML = "City: <b>" + city + "</b>";
}

function inputPhone() {
  var phone = prompt("Please enter your phone number");
  document.getElementById("mobile").innerHTML = "Mobile: <b>" + phone + "</b>";
}
