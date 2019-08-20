module.exports = {
  MyReact: (function () {
    let _val;
    return {
      render(Component) {
        const Comp = Component()
        Comp.render()
        return Comp
      },
      useState(initialValue) {
        _val = _val || initialValue;

        function setState(newState) {
          _val = newState;
        }
        return [_val, setState];
      }
    }
  })()
}
