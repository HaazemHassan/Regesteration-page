let darkmode = document.querySelector(".dark-mode");
let darkmodebtn = document.querySelector(".dark-mode .container .buttun");
let darkmodecont = document.querySelector(".dark-mode .container");
let wrapper = document.querySelector(".wrapper");

//check if  thir is dark-mode in localstorge
if (window.localStorage.getItem("dark-mode") !== null) {
  //if sun
  if (window.localStorage.getItem("dark-mode") === "sun") {
    document
      .querySelector(".dark-mode .container .left-sun i")
      .classList.add("fa-spin");
    document.documentElement.style.setProperty("--main-darkmode", "white");
    darkmodecont.style.setProperty("background-color", "#73C0FC");
    darkmodebtn.classList.remove("active");
    document.documentElement.style.setProperty("--main-color", "black");
    document.documentElement.style.setProperty(
      "--main-backgroundform",
      "#e8e8e8"
    );
    document.documentElement.style.setProperty("--main-btncolor", "white");
    document.documentElement.style.setProperty(
      "--main-shadow",
      "12px 12px 18px #bababa, -12px -12px 18px #ffffff"
    );
    wrapper.classList.remove("gredient-active");
    //if
  } else {
    //moon
    document
      .querySelector(".dark-mode .container .left-sun i")
      .classList.remove("fa-spin");
    document.documentElement.style.setProperty("--main-darkmode", "black");
    darkmodecont.style.setProperty("background-color", "#183153");
    darkmodebtn.classList.add("active");
    document.documentElement.style.setProperty("--main-color", "white");
    document.documentElement.style.setProperty(
      "--main-backgroundform",
      "#313131"
    );
    document.documentElement.style.setProperty("--main-btncolor", "#282626");
    document.documentElement.style.setProperty("--main-shadow", "none");
    wrapper.classList.add("gredient-active");
  }
}

darkmode.onclick = function () {
  //add class active to buttun that make the buttun turn to the right way towords the dark mode
  darkmodebtn.classList.toggle("active");
  //sun
  //if the buttun  not contains class active that mean the buttun in the left and the case is sun mode
  if (!darkmodebtn.classList.contains("active")) {
    //set --main-darkmode = white
    document.documentElement.style.setProperty("--main-darkmode", "white");
    //save in the localstorge = sun
    window.localStorage.setItem("dark-mode", "sun");
    //make the sun rotate in sun mod
    document
      .querySelector(".dark-mode .container .left-sun i")
      .classList.add("fa-spin");

    //edit the form into sun mode
    darkmodecont.style.setProperty("background-color", "#73C0FC");
    document.documentElement.style.setProperty("--main-color", "black");
    document.documentElement.style.setProperty(
      "--main-backgroundform",
      "#e8e8e8"
    );
    document.documentElement.style.setProperty("--main-btncolor", "white");
    document.documentElement.style.setProperty(
      "--main-shadow",
      "12px 12px 18px #bababa, -12px -12px 18px #ffffff"
    );
    wrapper.classList.remove("gredient-active");
  }

  //dark
  //if the buttun  contains class active that mean the buttun in the right and the case is dark mode
  if (darkmodebtn.classList.contains("active")) {
    //set --main-darkmode = black
    document.documentElement.style.setProperty("--main-darkmode", "black");
    //save in the localstorge = moon
    window.localStorage.setItem("dark-mode", "moon");
    //make the sun rotate in sun mod
    document
      .querySelector(".dark-mode .container .left-sun i")
      .classList.remove("fa-spin");

    //edit the form into dark mode
    darkmodecont.style.setProperty("background-color", "#183153");
    document.documentElement.style.setProperty("--main-color", "white");
    document.documentElement.style.setProperty(
      "--main-backgroundform",
      "#313131"
    );
    document.documentElement.style.setProperty("--main-btncolor", "#282626");
    document.documentElement.style.setProperty("--main-shadow", "none");
    wrapper.classList.add("gredient-active");
  }
};

//hide and show passowrd
let openeye = document.getElementById("open-eye");
let closeeye = document.getElementById("close-eye");
let eye = document.querySelector(".show-hide");
let pass = document.getElementById("pass");

eye.onclick = function () {
  if (pass.type == "password") {
    pass.type = "text";
    openeye.style.setProperty("display", "none");
    closeeye.style.setProperty("display", "inline-block");
  } else {
    pass.type = "password";
    openeye.style.setProperty("display", "inline-block");
    closeeye.style.setProperty("display", "none");
  }
};

let openeyecon = document.getElementById("open-eyecon");
let closeeyecon = document.getElementById("close-eyecon");
let eyecon = document.querySelector(".show-hidecon");
let passcon = document.getElementById("passcon");

eyecon.onclick = function () {
  if (passcon.type == "password") {
    passcon.type = "text";
    openeyecon.style.setProperty("display", "none");
    closeeyecon.style.setProperty("display", "inline-block");
  } else {
    passcon.type = "password";
    openeyecon.style.setProperty("display", "inline-block");
    closeeyecon.style.setProperty("display", "none");
  }
};

//validate form//////////////////////////

let errorname = document.querySelector(".errorfristname");
let erroruser = document.querySelector(".erroruser");
let errorpass = document.querySelector(".errorpass");
let errorpasscon = document.querySelector(".errorpasscon");

let emailInput = document.getElementById("email");
let nameInput = document.getElementById("name");

document.forms[0].onsubmit = function (e) {
  let name = false;
  let user = false;
  let passowrd = false;
  let passowrdcon = false;

  if (
    nameInput.value !== "" &&
    nameInput.value.length >= 3 &&
    nameInput.value.length <= 10
  ) {
    let pattarnnameforuserregex = /^[a-zA-Z0-9]+$/;
    if (pattarnnameforuserregex.test(nameInput.value)) {
      errorname.style.setProperty("display", "none");
      name = true;
      nameInput.style.setProperty("border", "none");
    } else {
      errorname.innerHTML =
        "your frist name must contain letter and number . (not special characters) .";
      nameInput.style.setProperty("border", "1px solid red");
      errorname.style.setProperty("display", "block");
      name = false;
    }
  } else {
    errorname.innerHTML =
      "enter your frist name , (your frist name must be between 3 and 10 letter) .";
    nameInput.style.setProperty("border", "1px solid red");
    errorname.style.setProperty("display", "block");
    name = false;
  }

  if (emailInput.value !== "" && emailInput.value.length <= 30) {
    let pattarnphoneforuserregex = /(012|010|011|015)\d{8}$/;
    let pattarnemailforuserregex =
      /^[a-zA-Z0-9]{4,}@[a-zA-Z]{3,6}.(com|net|org)$/gi;
    if (
      pattarnphoneforuserregex.test(emailInput.value) ||
      pattarnemailforuserregex.test(emailInput.value)
    ) {
      emailInput.style.setProperty("border", "none");
      erroruser.style.setProperty("display", "none");
      user = true;
    } else {
      erroruser.innerHTML =
        "your email or phone might be uncorrect please entar correctly again .";
      emailInput.style.setProperty("border", "1px solid red");
      erroruser.style.setProperty("display", "block");
      user = false;
    }
  } else {
    erroruser.innerHTML = "enter your email or phone .";
    emailInput.style.setProperty("border", "1px solid red");
    erroruser.style.setProperty("display", "block");
    user = false;
  }

  if (pass.value !== "" && pass.value.length >= 4 && pass.value.length <= 16) {
    let pattarnpasswordforuserregex = /^[a-zA-Z0-9]+$/;
    if (pattarnpasswordforuserregex.test(pass.value)) {
      errorpass.style.setProperty("display", "none");
      passowrd = true;
      pass.style.setProperty("border", "none");
    } else {
      errorpass.innerHTML =
        "your password must contain letter and number . (not special characters) .";
      pass.style.setProperty("border", "1px solid red");
      errorpass.style.setProperty("display", "block");
      passowrd = false;
    }
  } else {
    errorpass.innerHTML =
      "enter your password , (your password must be between 4 and 16 letter) .";
    pass.style.setProperty("border", "1px solid red");
    errorpass.style.setProperty("display", "block");
    passowrd = false;
  }

  if (passcon.value !== "") {
    if (passcon.value === pass.value) {
      passowrdcon = true;
      passcon.style.setProperty("border", "none");
      errorpasscon.style.setProperty("display", "none");
    } else {
      errorpasscon.innerHTML = "the Confirm Password dosent like Password .";
      passcon.style.setProperty("border", "1px solid red");
      errorpasscon.style.setProperty("display", "block");
      passowrdcon = false;
    }
  } else {
    errorpasscon.innerHTML = "fill the input as password .";
    passcon.style.setProperty("border", "1px solid red");
    errorpasscon.style.setProperty("display", "block");
    passowrdcon = false;
  }

  if (
    user === false ||
    passowrd === false ||
    passowrdcon === false ||
    name === false
  ) {
    e.preventDefault();
  }
};
