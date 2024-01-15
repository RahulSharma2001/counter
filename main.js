const val = document.getElementsByTagName("h1");
const btns = document.getElementsByTagName("button");

let currentNumber = val[0].innerText;

function increase() {
  currentNumber++;
  val[0].innerText = currentNumber;
}

function decrease() {
  currentNumber--;
  val[0].innerText = currentNumber;
}

function reset() {
  val[0].innerText = 0;
}

btns[0].addEventListener("click", () => {
  increase();
});

btns[1].addEventListener("click", () => {
  decrease();
});

btns[2].addEventListener("click", () => {
  reset();
});
