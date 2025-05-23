function textLimiter(text) {
  const maxLength = 400;
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
}

export default textLimiter;
