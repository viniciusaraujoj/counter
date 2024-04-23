const counter = document.querySelector(".counter");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");

decrease.addEventListener("click", function () {
  let number = Number(counter.textContent);
  number--;
  counter.textContent = number;
  numberColor(number);
});

increase.addEventListener("click", function () {
  let number = Number(counter.textContent);
  number++;
  counter.textContent = number;

  numberColor(number);
});

reset.addEventListener("click", function () {
  let number = Number(counter.textContent);
  counter.textContent = 0;
  numberColor();
});

function numberColor(number) {
  if (number > 0) {
    counter.style.color = "#008000";
  } else if (number < 0) {
    counter.style.color = "#FF0000";
  } else {
    counter.style.color = "#141233";
  }
}
