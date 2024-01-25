const fName = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const signup = document.querySelector("#signup");
const errorMassage = document.querySelector(".errorMassage");
const showMassage = document.querySelector(".showMassage");

let mkarray = new Array();
if (!localStorage.getItem("userInfo")) {
  localStorage.setItem("userInfo", JSON.stringify(mkarray));
}

signup.addEventListener("click", () => {
  let fullName = fName.value;
  let eValue = email.value;
  let passValue = password.value;

  let userInfoRecord = JSON.parse(localStorage.getItem("userInfo"));
  if (fName.value == "" || email.value == "" || password.value == "") {
    errorMassage.innerHTML = "User Value required";
  } else if (
    userInfoRecord.some((value) => {
      return value.email === eValue;
    })
  ) {
    showMassage.innerHTML = "You Have Allready Register";
  } else {
    userInfoRecord.push({
      name: fullName,
      email: eValue,
      password: passValue,
    });
    localStorage.setItem("userInfo", JSON.stringify(userInfoRecord));
    showMassage.innerHTML = "";
    errorMassage.innerHTML = "";
  }
  fName.value = "";
  email.value = "";
  password.value = "";
});

// login  page
