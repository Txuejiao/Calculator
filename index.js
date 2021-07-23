let table = document.querySelector(".buttonSpace");
let operationSpace = document.querySelector(".operationSpace");
let inputSpace = document.querySelector(".inputSpace");
let inputOutcome = "";
let operationOutcome = "";
let numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
let operatorArray = ["+", "-", "*", "/"]
let currentOperator = ""
inputSpaceDisplay();
operationSpaceDisplay();
let hasADot = false;
let hasAEqual = false;

table.addEventListener("click", function (event) {
  let target = event.target;
  if  (target.innerHTML === "AC") {
    inputOutcome = "";
    operationOutcome = "";
    hasADot = false;
  } else if (isANumber(target.innerHTML)) {

    inputOutcome += target.innerHTML;
    operationOutcome += target.innerHTML;
  } else if (isOperator(target.innerHTML) === true && hasAEqual === false) {
    currentOperator = target.innerHTML;
    if (isOperator(operationOutcome.slice(-1))) {
      operationOutcome = operationOutcome.slice(0, -1) + currentOperator
      inputOutcome = currentOperator;
    } else {
      operationOutcome = operationOutcome + currentOperator ;
      inputOutcome = currentOperator;}
     hasADot = false;
  } else if (isOperator(target.innerHTML) === true && hasAEqual === true) {
    currentOperator = target.innerHTML;
    if (isOperator(operationOutcome.slice(-1))) {
      operationOutcome = operationOutcome.slice(0, -1) + currentOperator;
      inputOutcome = currentOperator;
      hasAEqual = false;
    } else {
      operationOutcome = inputOutcome  + currentOperator ;
      inputOutcome = currentOperator;
      hasAEqual = false;
    }
    hasADot = false;
  } else if (target.innerHTML === "." && hasADot === false){
    hasADot = true;
    inputOutcome += target.innerHTML;
    operationOutcome += target.innerHTML;
  } else if (target.innerHTML === "=" && hasAEqual === false){
    hasAEqual = true;
    inputOutcome = parseFloat(eval(operationOutcome).toFixed(5));
    operationOutcome = operationOutcome + " " + "=" + " " + inputOutcome;
  }
  inputSpaceDisplay();
  operationSpaceDisplay()
})


function inputSpaceDisplay() {
  inputSpace.innerHTML = inputOutcome;
}

function operationSpaceDisplay() {
  operationSpace.innerHTML = operationOutcome;
}

function isANumber(numberString) {
  let parsedNumber = parseInt(numberString)
  for (let i = 0; i < numberArray.length; i++) {
    if (parsedNumber === numberArray[i]) {
      return true
    }
  }
  return false
}

function isOperator(operatorString){
 for (let i =0; i < operatorArray.length; i++){
   if(operatorString === operatorArray[i]){
     return true
   }
  }
 return false
}



