var isHidden = "hidden";

var btnNext = document.getElementById("next");

function welcome() {
  sayHello();
  document.getElementById("next").style.display = "block";
}

function sayHello() {
  alert("Welcome to the first JavaScript!");
  setInterval ( inputName(), 1000 );
}

function sayGoodbye() {
  alert("Thank you for providing information!");
}

function inputName() {
  var name = prompt("Please enter your name");
  document.getElementById("name").innerHTML = "Full Name: <b>" + name + "</b>";
  inputCity();
}

function inputCity() {
  var city = prompt("Please enter your city");
  document.getElementById("city").innerHTML = "City: <b>" + city + "</b>";
  inputPhone();
}

function inputPhone() {
  var phone = prompt("Please enter your phone number");
  document.getElementById("mobile").innerHTML = "Mobile: <b>" + phone + "</b>";
  sayGoodbye();
}
