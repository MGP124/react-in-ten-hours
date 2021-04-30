index.js is the entry point
// capitalize the function name so React knows it is a component

// These next two give the same result on screen
// function Greeting() {
//   return <h4>My name is Mark and this my first compenent</h4>
// }

// const Greetings = () => {
//   return React.createElement('h1', {}, 'hello world');
// }

// These next two give the import React from 'react';
import ReactDom from 'react-dom';


index.js is the entry point
capitalize the function name so React knows it is a component

These next two give the same result on screen
function Greeting() {
  return <h4>My name is Mark and this my first compenent</h4>
}

const Greetings = () => {
  return React.createElement('h1', {}, 'hello world');
}

These next two give the same result on screen
function Greeting() {
  return (
    <div>
      <h1>hello world</h1>
    </div>
  )
}

const Greeting = () => {
  return React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'hello world')
  );
};


ReactDom.render(<Greeting/>, document.getElementById('root'));ame result on screen
// function Greeting() {
//   return (
//     <div>
//       <h1>hello world</h1>
//     </div>
//   )
// }

// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'hello world')
//   );
// };

ReactDom.render(<Greeting/>, document.getElementById('root'));