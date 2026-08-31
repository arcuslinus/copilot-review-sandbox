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
 * Formats a byte count as a human-readable string.
 */
function formatBytes(bytes) {
  const units = ['B', 'KB', 'MB', 'GB'];
  let i = 0;
  while (bytes > 1024) {
    bytes = bytes / 1024;
    i++;
  }
  return bytes.toFixed(1) + ' ' + units[i];
}
