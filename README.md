# Stopwatch

Tiny single-page stopwatch for practicing Cursor’s [Putting it all together](https://cursor.com/learn/putting-it-together) workflow (explore → plan → build → test → review).

## Run the app
Open `index.html` in a browser (double-click or drag into Chrome/Safari). No install, no build.

## Run tests
```bash
node tests/stopwatch.test.js
```

## Suggested agent prompts
1. **Explore:** Walk me through how this stopwatch works — display, buttons, timing core, and data flow from click to UI update.
2. **Plan:** Plan a lap / split-times feature. Keep the first iteration small.
3. **Build:** Implement the plan; don’t change existing tests unless asked.
4. **Test / debug:** Add a failing edge case (e.g. rapid start/stop) and fix the root cause.
5. **Review:** Review the branch for bugs and consistency before merge.
