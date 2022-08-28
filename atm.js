var balance = 1000;
function withdraw() {
  var amountEntered = Number(userInput.value);
  if (balance < amountEntered) {
    //alert("transaction declined! insuficient fund");
    displayBalance.innerHTML = "<p>transaction declined! insuficient fund</P>";
  } else if (amountEntered <= 0) {
    //alert("amount entered can not be less than 0");
    displayBalance.innerHTML = "<p>amount entered can not be less than 0</p>";
  } else if (amountEntered == "") {
    //alert("error! user input is empty, please input a value");
    displayBalance.innerHTML =
      "<p>error! user input is empty, please input a value</p>";
  } else {
    balance = balance - amountEntered;
    //alert("withdrawal succesful, your current ballaced is # " + balance);
    displayBalance.innerHTML =
      "<p>withdrawal succesful, your current ballaced is #" + balance + "</p>";
  }
}

function deposit() {
  var amountEntered = Number(userInput.value);
  var deposit = balance + amountEntered;
  if (amountEntered == "") {
    //alert("deposit amount can not be empty");
    displayBalance.innerHTML = "<p>deposit amount can not be empty</p>";
  } else if (amountEntered <= 0) {
    //alert("the deposit amount can not be less than 0");
    displayBalance.innerHTML =
      "<p>the deposit amount can not be less than 0</p>";
  } else {
    // deposit = balance + amountEntered;
    //alert("your current avalaible balance is #" + deposit);
    displayBalance.innerHTML =
      "<p>your current avalaible balance is #" + deposit + "</p>";
  }
}
function checkBalance() {
  //displayBalance.innerTEXT = "Your available balance is #" + balance;
  displayBalance.innerHTML = "<p>Your main balance is #" + balance + "</p>";
  //alert(" i dey work o");
}
