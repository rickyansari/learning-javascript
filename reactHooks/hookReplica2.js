function useState(initialValue) {
  var _val = initialValue;

  function setState(newState) {
    _val = newState;
  }
  return [_val, setState];
}
module.exports = {
  useState
};
