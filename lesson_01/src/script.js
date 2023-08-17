const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

const userName = `Taras Sheva`;
const animalsList = [`cat`, `dog`, `lion`];
const user = {
    name: `Vasyl`,
    surname: `Stus`,
    city: `Kharkiv`
}

const showText = true;

const h2Styles = {
    color: showText ? `green` : `red`,
    backgroundColor: `orange`,
    fontStyle: `italic`
}

const App = <React.Fragment>
    <h1>Hello, {userName}!</h1>

    <ul>{animalsList.map((item, index) => <li key={index}>{item}</li>)}</ul>

    <ol>{
        animalsList
            .filter(item => item !== `dog`)
            .map((item, index) => <li key={index}>{item}</li>)
    }</ol>

    <ul>
        {
            Object
                .keys(user)
                .map((item, index) => <li key={index}>{item}: {user[item]}</li>)
        }
    </ul>

    {showText ? <h3>Conditional text</h3> : null}
    {showText && <h3>Conditional text</h3>}

    <h3 className="text__styling">Hello, world!</h3>
    <h2 style={h2Styles}>Hello, world</h2>
</React.Fragment>;

const productsTitle = `Products table`;
const productsData = [
    {
        name: `Audi RX`,
        info: {
            id: 1,
            type: `Audi RX`,
            hp: 300
        }
    },
    {
        name: `Flower Rose`,
        info: {
            color: `Red`,
            price: 100
        }
    },
    {
        name: `Laptop Mac`,
        info: {
            inch: 13,
            price: 800
        }
    }
]

const Products = <React.Fragment>
    <h1>{productsTitle}</h1>

    <table>
        <thead>
            <tr>
                <th>Product name</th>
                <th>Product info</th>
            </tr>
        </thead>
        <tbody>
            {productsData.map((item, index) => <tr key={index}>
                <td>{item.name}</td>
                <td>
                    <ul>{Object.keys(item.info).map((k, i) => <li key={i}>{k}: {item.info[k]}</li>)}</ul>
                </td>
            </tr>)}
        </tbody>
    </table>
</React.Fragment>

root.render(Products);