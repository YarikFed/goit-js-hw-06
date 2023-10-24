let counterValue = 0;
const valueSpan = document.getElementById("value");
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

function updateCounter() {
  valueSpan.textContent = counterValue;
}

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  updateCounter();
});

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  updateCounter();
});

updateCounter();