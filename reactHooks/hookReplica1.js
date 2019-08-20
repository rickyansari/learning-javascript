function useState(initialValue) {
  var _val = initialValue;
  function getCurrentState() {
    return _val;
  }
  function setState(newState) {
    _val = newState;
  }
  return [getCurrentState, setState];
}
module.exports = {
  useState
};
