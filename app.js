// count
let value = 0;

// values and buttons
const counter = document.querySelector(".counter");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("increase")) {
      value++;
    } else if (styles.contains("decrease")) {
      value--;
    } else {
      value = 0;
    }

    counter.textContent = value;
    numberColor(value);
  });
});

function numberColor(number) {
  let colorCounter = counter.style.color;
  if (number > 0) {
    counter.style.color = "#008000";
  } else if (number < 0) {
    counter.style.color = "#FF0000";
  } else {
    counter.style.color = "#141233";
  }
}
