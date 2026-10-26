/**
 * Plain stopwatch core — no framework.
 * elapsed is tracked in milliseconds.
 */
export function createStopwatch(now = () => Date.now()) {
  let running = false;
  let startedAt = 0;
  let accumulated = 0;

  function elapsed() {
    if (!running) return accumulated;
    return accumulated + (now() - startedAt);
  }

  return {
    start() {
      if (running) return;
      running = true;
      startedAt = now();
    },
    stop() {
      if (!running) return;
      accumulated = elapsed();
      running = false;
    },
    reset() {
      running = false;
      startedAt = 0;
      accumulated = 0;
    },
    isRunning() {
      return running;
    },
    getElapsedMs() {
      return elapsed();
    },
  };
}

/** Format ms as MM:SS.mm (centiseconds). */
export function formatTime(ms) {
  const totalCs = Math.floor(Math.max(0, ms) / 10);
  const centiseconds = totalCs % 100;
  const totalSeconds = Math.floor(totalCs / 100);
  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60);
  const pad = (n, w = 2) => String(n).padStart(w, "0");
  return `${pad(minutes)}:${pad(seconds)}.${pad(centiseconds)}`;
}
