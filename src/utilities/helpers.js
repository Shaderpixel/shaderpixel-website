// helper function for hasOwnProperty
const hasOwnProperty = Function.prototype.call.bind(
  Object.prototype.hasOwnProperty
);

export { hasOwnProperty };
