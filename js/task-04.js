const couterValue = 0;
const valueSpan = document.getElementById("value");
const incrementButton = document.querySelector("[data-action='increment]");
const decrementButton = document.querySelector("[data-action='decrement]");

function updateValue() {
    valueSpan.textContent = couterValue;
}

function increment() {
    couterValue += 1;
    updateValue();
}
function decrement() {
    couterValue -= 1;
    updateValue();
}

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);
updateValue();