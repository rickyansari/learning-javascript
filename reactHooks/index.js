const { useState: useState1 } = require('./hookReplica1');
const { useState: useState2 } = require('./hookReplica2');
const { MyReact } = require('./hookReplica3');

function Button(useState) {
  debugger;
  const [state, setState] = useState(15);
  console.log('\ninitial Value', state);
  setState(20);
  console.log('updated Value', state);
  console.log('execution Completed\n');
}


function Counter() {
  const [count, setCount] = MyReact.useState(0)
  return {
    click: () => setCount(count + 1),
    render: () => console.log('render:', { count })
  }
}

// function hooks() {
//   Button(useState1);
//   Button(useState2);

// }
let App
App = MyReact.render(Counter) // render: { count: 0 }
App.click()
App = MyReact.render(Counter) // render: { count: 1 }

// hooks();
