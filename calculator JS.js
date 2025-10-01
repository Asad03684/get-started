const display = document.getElementById("display");
let currentInput = "0";

function updateDisplay() {
  display.textContent = currentInput;
}
document.querySelectorAll("#calculator button").forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "AC") {
      currentInput = "0";
    } else if (value === "=") {
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = "Error";
      }
    } else {
      if (currentInput === "0") {
        currentInput = value;
      } else {
        currentInput += value;
      }
    }

    updateDisplay();
  });
});

updateDisplay();