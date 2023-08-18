var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(
  React.Fragment,
  null,
  React.createElement(
    'h1',
    null,
    'Hello, world!'
  ),
  React.createElement(
    'h2',
    null,
    'Heading2'
  )
));