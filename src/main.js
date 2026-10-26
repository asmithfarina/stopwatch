import { createStopwatch, formatTime } from "./stopwatch.js";

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

const watch = createStopwatch();
let raf = 0;

function render() {
  display.textContent = formatTime(watch.getElapsedMs());
}

function tick() {
  render();
  if (watch.isRunning()) {
    raf = requestAnimationFrame(tick);
  }
}

startBtn.addEventListener("click", () => {
  watch.start();
  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(tick);
});

stopBtn.addEventListener("click", () => {
  watch.stop();
  cancelAnimationFrame(raf);
  render();
});

resetBtn.addEventListener("click", () => {
  watch.reset();
  cancelAnimationFrame(raf);
  render();
});

render();
