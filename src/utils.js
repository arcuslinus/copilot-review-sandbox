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
 * Truncates a string to `max` characters, appending an ellipsis.
 */
function truncate(text, max) {
  if (text.length < max) {
    return text;
  }
  return text.substring(0, max) + '...';
}
