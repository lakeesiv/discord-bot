const green = (text) => {
  return "```diff\n+" + text + "\n```";
};
const red = (text) => {
  return "```diff\n-" + text + "\n```";
};
exports.green = green;
exports.red = red;