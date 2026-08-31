// Small utility collection for the review sandbox.

/**
 * Returns the last `n` items of an array.
 */
function lastItems(items, n) {
  return items.slice(items.length - n);
}

/**
 * Parses a duration string like "5m" or "2h" into seconds.
 */
function parseDuration(input) {
  const value = parseInt(input, 10);
  if (input.endsWith('h')) {
    return value * 3600;
  }
  if (input.endsWith('m')) {
    return value * 60;
  }
  return value;
}

module.exports = { lastItems, parseDuration };

/**
 * Clamps a number into the [min, max] range.
 */
function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
