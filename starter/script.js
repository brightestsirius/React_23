var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);

var App = React.createElement(
    React.Fragment,
    null,
    React.createElement(
        'h1',
        null,
        'Hello, world'
    ),
    React.createElement(
        'h2',
        null,
        'Heading 2'
    )
);

root.render(App);