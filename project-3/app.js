let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector(".calc-display");

const allBtnContainer = document.querySelector(".calc-buttons");

allBtnContainer.addEventListener("click", (event) => {
  btnClick(event.target.innerText);
});

function btnClick(value) {
  if (isNaN(value)) {
    // This is not a number AKA symbol
    handleSymbol(value);
  } else {
    // This is a number
    handleNumber(value);
  }

  screen.innerText = buffer;
}

function handleNumber(value) {
  if (buffer === "0") {
    buffer = value;
  } else {
    buffer += value;
  }
}

function handleMath(value) {
  if (buffer === "0") return;

  let intBuffer = parseInt(buffer);

  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    runOperation(intBuffer);
  }

  previousOperator = value;
  buffer = "0";
}

function runOperation(intBuffer) {
  if (previousOperator === "+") {
    runningTotal += intBuffer;
  } else if (previousOperator === "-") {
    runningTotal -= intBuffer;
  } else if (previousOperator === "×") {
    runningTotal *= intBuffer;
  } else {
    runningTotal /= intBuffer;
  }
}

function handleSymbol(symbol) {
  switch (symbol) {
    case "C":
      buffer = "0";
      runningTotal = 0;
      break;

    case "=":
      if (previousOperator === null) {
        return;
      }

      runOperation(parseInt(buffer));

      previousOperator = null;
      buffer = runningTotal;
      runningTotal = 0;
      break;

    case "←":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;

    case "+":
    case "-":
    case "×":
    case "÷":
      handleMath(symbol);
      break;
  }
}
