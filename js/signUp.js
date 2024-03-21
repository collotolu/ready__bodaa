const signUp = document.querySelectorAll(".signup__box");
console.log(signUp);
const inputSystem = document.querySelectorAll("input");
console.log(inputSystem);
const messages = document.querySelector(".message");
console.log(messages);
const pressButton = document.getElementById("button");
console.log(pressButton);

pressButton.addEventListener("click", () => {
  const user = {};
  let users = [];
  let allValidated = false;
  inputSystem.forEach((input) => {
    if (input.value === "" || input.value === null) {
      messages.textContent = "Fill all the empty field";
      input.style.border = "1px solid red";
    } else if (
      document.querySelector("input[name=password]").value !==
      document.querySelector("input[name=confirm]").value
    ) {
      document.querySelector("input[name=password]").style.border =
        "1px solid red";
      document.querySelector("input[name=confirm]").style.border =
      
        "1px solid red";

      messages.textContent = "Password does not match";
    } else if(localStorage.getItem("users") !== null){
        JSON.parse(localStorage.getItem("users")).forEach(el=>{
            if(el["email"] === input.value){
                messages.textContent = "Email already exists";
            }
        })
    } else {
      input.style.border = "1px solid black";
      messages.textContent = "";

      if (input.name !== "confirm") {
        user[`${input.name}`] = input.value;
      }
    }
  });

  if (messages.textContent === "") {
    allValidated = true;
    window.location.href = "http://127.0.0.1:5500/login.html";
  }

  //   Local Storage
  if (allValidated === true) {
    if (localStorage.getItem("users") === null) {
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
    } else {
      users = JSON.parse(localStorage.getItem("users"));
      users.push("user");

      localStorage.setItem("users", JSON.stringify(users));
    }
  }
  //   console.log(user);
});
