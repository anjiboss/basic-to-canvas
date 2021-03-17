const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//Resizing

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let painting = false;
ctx.lineWidth = 10;
ctx.lineCap = "round";

const draw = (e) => {
  if (!painting) return;
  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
};

canvas.addEventListener("mousedown", (e) => {
  painting = true;
  draw(e);
});
canvas.addEventListener("mouseup", (e) => {
  painting = false;
  ctx.beginPath();
});
canvas.addEventListener("mousemove", (e) => {
  draw(e);
});
