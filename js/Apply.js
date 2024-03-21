document.getElementById("loanForm").addEventListener("click", (event) => {
  event.preventDefault();

  var price = parseFloat(document.getElementById("price").value);
  var downPayment = parseFloat(document.getElementById("downPayment").value);
  var loanTerm = parseFloat(document.getElementById("loanTerm").value);

  var loanAmount = price - downPayment;
  var monthlyInterestRate = 0.05 / 12;
  var months = loanTerm * 12;
  var monthlyPayment =
    (loanAmount * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -months));

  var resultElement = document.getElementById("result");
  resultElement.innerHTML =
    "<p>Boda Value: " + loanAmount.toFixed(2) + " ksh</p>";
  resultElement.innerHTML +=
    "<p>Monthly payment: " + monthlyPayment.toFixed(2) + " ksh</p>";
});

document
  .getElementById("inputAppllication")
  .addEventListener("click", (event) => {
    event.preventDefault();

    // var firstName = document.getElementById("input").value;
    // var lastName = document.getElementById("input").value;
    // var nationalId = document.getElementById("input").value;
    // var phoneNumber = document.getElementById("input").value;

 
    const user = {};
    let users = [];
    let allValidated = false;
    inputItems.forEach((input) => {
      if (input.value === "" || input.value === null) {
        messages.textContent = "Fill all the empty Fields";
        input.style.border = "1px solid red";
      }else if(localStorage.getItem("users") !== null){
        JSON.parse(localStorage.getItem("users")).forEach(el=>{
            if(el["national id"] === input.value){
                messages.textContent = "Identifacation Number Already Exists";
            }
        })
    } else if(localStorage.getItem("users") !== null){
      JSON.parse(localStorage.getItem("users")).forEach(el=>{
          if(el["number"] === input.value){
              messages.textContent = "Phone Number Already Exists";
          }
      })
  } 
      
      else {
        input.style.border = "1px solid black";
        messages.textContent = "";
      }
    });


  if (messages.textContent === "") {
    allValidated = true;
    window.location.href = "http://127.0.0.1:5500/index.html";
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
  });
  const messages = document.querySelector(".message");
  console.log(messages);

  const inputItems = document.querySelectorAll("input");
  console.log(inputItems);