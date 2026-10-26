/**
 * Tiny Node-runnable tests (no test runner required).
 * Run: node tests/stopwatch.test.js
 */
import { createStopwatch, formatTime } from "../src/stopwatch.js";
import assert from "node:assert/strict";

function test(name, fn) {
  try {
    fn();
    console.log("ok -", name);
  } catch (err) {
    console.error("FAIL -", name);
    console.error(err);
    process.exitCode = 1;
  }
}

test("formatTime pads minutes and seconds", () => {
  assert.equal(formatTime(0), "00:00.00");
  assert.equal(formatTime(1250), "00:01.25");
  assert.equal(formatTime(61_000), "01:01.00");
});

test("start/stop accumulates elapsed time", () => {
  let t = 1000;
  const watch = createStopwatch(() => t);
  watch.start();
  t = 1500;
  watch.stop();
  assert.equal(watch.getElapsedMs(), 500);
  watch.start();
  t = 1800;
  watch.stop();
  assert.equal(watch.getElapsedMs(), 800);
});

test("reset clears elapsed and running state", () => {
  let t = 0;
  const watch = createStopwatch(() => t);
  watch.start();
  t = 400;
  watch.reset();
  assert.equal(watch.isRunning(), false);
  assert.equal(watch.getElapsedMs(), 0);
});

test("double start does not restart the clock", () => {
  let t = 0;
  const watch = createStopwatch(() => t);
  watch.start();
  t = 200;
  watch.start(); // no-op
  t = 500;
  watch.stop();
  assert.equal(watch.getElapsedMs(), 500);
});

console.log("done");
