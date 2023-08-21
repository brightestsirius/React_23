const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

const App = <React.Fragment>
    <h1>Hello, world</h1>
    <h2>Heading 2</h2>
</React.Fragment>

root.render(App);