var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);

var userName = "Taras Sheva";
var animalsList = ["cat", "dog", "lion"];
var user = {
    name: "Vasyl",
    surname: "Stus",
    city: "Kharkiv"
};

var showText = true;

var h2Styles = {
    color: showText ? "green" : "red",
    backgroundColor: "orange",
    fontStyle: "italic"
};

var App = React.createElement(
    React.Fragment,
    null,
    React.createElement(
        "h1",
        null,
        "Hello, ",
        userName,
        "!"
    ),
    React.createElement(
        "ul",
        null,
        animalsList.map(function (item, index) {
            return React.createElement(
                "li",
                { key: index },
                item
            );
        })
    ),
    React.createElement(
        "ol",
        null,
        animalsList.filter(function (item) {
            return item !== "dog";
        }).map(function (item, index) {
            return React.createElement(
                "li",
                { key: index },
                item
            );
        })
    ),
    React.createElement(
        "ul",
        null,
        Object.keys(user).map(function (item, index) {
            return React.createElement(
                "li",
                { key: index },
                item,
                ": ",
                user[item]
            );
        })
    ),
    showText ? React.createElement(
        "h3",
        null,
        "Conditional text"
    ) : null,
    showText && React.createElement(
        "h3",
        null,
        "Conditional text"
    ),
    React.createElement(
        "h3",
        { className: "text__styling" },
        "Hello, world!"
    ),
    React.createElement(
        "h2",
        { style: h2Styles },
        "Hello, world"
    )
);

var productsTitle = "Products table";
var productsData = [{
    name: "Audi RX",
    info: {
        id: 1,
        type: "Audi RX",
        hp: 300
    }
}, {
    name: "Flower Rose",
    info: {
        color: "Red",
        price: 100
    }
}, {
    name: "Laptop Mac",
    info: {
        inch: 13,
        price: 800
    }
}];

var Products = React.createElement(
    React.Fragment,
    null,
    React.createElement(
        "h1",
        null,
        productsTitle
    ),
    React.createElement(
        "table",
        null,
        React.createElement(
            "thead",
            null,
            React.createElement(
                "tr",
                null,
                React.createElement(
                    "th",
                    null,
                    "Product name"
                ),
                React.createElement(
                    "th",
                    null,
                    "Product info"
                )
            )
        ),
        React.createElement(
            "tbody",
            null,
            productsData.map(function (item, index) {
                return React.createElement(
                    "tr",
                    { key: index },
                    React.createElement(
                        "td",
                        null,
                        item.name
                    ),
                    React.createElement(
                        "td",
                        null,
                        React.createElement(
                            "ul",
                            null,
                            Object.keys(item.info).map(function (k, i) {
                                return React.createElement(
                                    "li",
                                    { key: i },
                                    k,
                                    ": ",
                                    item.info[k]
                                );
                            })
                        )
                    )
                );
            })
        )
    )
);

root.render(Products);