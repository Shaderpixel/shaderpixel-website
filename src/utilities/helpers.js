// helper function for hasOwnProperty
const hasOwnProperty = Function.prototype.call.bind(
  Object.prototype.hasOwnProperty
);

function getViewportHeight(pixelHeight) {
  return ((pixelHeight / window.innerHeight) * 100).toFixed(2);
}
function getViewportWidth(pixelWidth) {
  return ((pixelWidth / window.innerWidth) * 100).toFixed(2);
}

export { hasOwnProperty, getViewportHeight, getViewportWidth };
