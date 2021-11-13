//Script.js

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

let size = 20;
let isPressed = false;
let color = "black";
let x;
let y;

const sizeEl = document.querySelector("#size");
const decreaseEl = document.querySelector("#decrease");
const increaseEl = document.querySelector("#increase");
const colorEl = document.querySelector("#color");
const clearEl = document.querySelector("#clear");

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;

  console.log(isPressed, x, y);
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;

  console.log(isPressed, x, y);
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
    console.log(isPressed, x2, y2);
  }
});

clearEl.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

colorEl.addEventListener("change", () => {
  color = colorEl.value;

  console.log(colorEl.value);
});

decreaseEl.addEventListener("click", () => {
  size = size <= 5 ? (size = 5) : (size -= 5);

  updateSizeOnScreen();
});

increaseEl.addEventListener("click", () => {
  size = size >= 50 ? (size = 50) : (size += 5);
  updateSizeOnScreen();
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

function updateSizeOnScreen() {
  sizeEl.innerText = size;
}
