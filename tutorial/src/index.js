import React from 'react';
import ReactDom from 'react-dom';

// SEE README.TXT
// index.js is the entry point
// capitalize the function name so React knows it is a component

// JSX rules
// always return single element
// div/section/article/or fragment
// use camelCase for HTML attribute
// className instead of class
// close every element
// formatting

function Greeting() {
  return (
    <div>
      <h1>hello world</h1>
      <img></img>
    </div>
  )
}

ReactDom.render(<Greeting/>, document.getElementById('root'));
