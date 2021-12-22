const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  // get string then return an int/number
  return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier, 
  prevResult, 
  operationNumber, 
  newResult
) {
  // creating an object 
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: currentResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;

  if (calculationType !== 'ADD' && 
    calculationType !== 'SUB' && 
    calculationType !== 'DIV' && 
    calculationType !== 'MULT' ||
    !enteredNumber) // truthy
  {
    return; //if this returns
  }
  //this code will not run
  if (calculationType === 'ADD'){
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if(calculationType === 'SUB'){
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if(calculationType === 'MULT'){
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else if(calculationType === 'DIV'){
    currentResult /= enteredNumber;
    mathOperator = '/';
  } 

  
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult('ADD');
}

function subtract() {
  calculateResult('SUB');
}

function multiply() {
  calculateResult('MULT');
}

function divide() {
  calculateResult('DIV');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
