var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);

var animalsList = ["cat", "dog", "lion"];
var numbersList = [10, 20, 30];
var friendsList = ["Stus", "Sheva", "Lesya", "cat", "dog", "lion"];

// const List = ({list=[], color, tag=`ul`}) => {
//     const CustomTag = `${tag}`;

//     setTimeout(() => {
//         list.push(`tiger`);
//         console.log(list);
//     }, 1000);

//     return list.length 
//         ? <CustomTag style={{color}}>
//             {list.map((item, index) => <ListItem key={index} item={item} />)}
//         </CustomTag>
//         : null;
// }

// const ListItem = ({item=``}) => <li>{item} <Button text="Delete" /></li>;

// const Button = ({text=``}) => <button>{text}</button>

var List = function (_React$Component) {
    _inherits(List, _React$Component);

    function List(props) {
        _classCallCheck(this, List);

        var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));

        _this.state = Object.assign({
            bg: "#e7e7ff"
        }, _this.props);


        setTimeout(function () {
            _this.setState({
                list: [].concat(_toConsumableArray(_this.state.list), ["tiger"]),
                color: "crimson"
            });

            console.log(_this.state);
        }, 1000);

        return _this;
    }

    _createClass(List, [{
        key: "removeItem",
        value: function removeItem(index) {
            // let copiedList = JSON.parse(JSON.stringify(this.state.list));
            // copiedList.splice(index,1);

            // this.setState({
            //     list: copiedList
            // });

            this.setState({
                list: this.state.list.filter(function (el, i) {
                    return i !== index;
                })
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                _state$list = _state.list,
                list = _state$list === undefined ? [] : _state$list,
                _state$color = _state.color,
                color = _state$color === undefined ? "" : _state$color,
                bg = _state.bg;


            return list.length ? React.createElement(
                "ul",
                { style: { color: color, backgroundColor: bg } },
                list.map(function (item, index) {
                    return React.createElement(ListItem, { key: index, item: item, handleFunc: function handleFunc() {
                            return _this2.removeItem(index);
                        } });
                })
            ) : null;
        }
    }]);

    return List;
}(React.Component);

var ListItem = function (_React$Component2) {
    _inherits(ListItem, _React$Component2);

    function ListItem() {
        _classCallCheck(this, ListItem);

        return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
    }

    _createClass(ListItem, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                item = _props.item,
                handleFunc = _props.handleFunc;


            return React.createElement(
                "li",
                null,
                item,
                " ",
                React.createElement(Button, { text: "Delete", handleFunc: handleFunc })
            );
        }
    }]);

    return ListItem;
}(React.Component);

var Button = function (_React$Component3) {
    _inherits(Button, _React$Component3);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: "render",
        value: function render() {
            var _props2 = this.props,
                text = _props2.text,
                handleFunc = _props2.handleFunc;


            return React.createElement(
                "button",
                { onClick: handleFunc },
                text
            );
        }
    }]);

    return Button;
}(React.Component);

var Friends = function (_React$Component4) {
    _inherits(Friends, _React$Component4);

    function Friends(props) {
        _classCallCheck(this, Friends);

        // this.setState({}, ()={});

        var _this5 = _possibleConstructorReturn(this, (Friends.__proto__ || Object.getPrototypeOf(Friends)).call(this, props));

        _this5.state = Object.assign({
            bg: "transparent",
            borderColor: "transparent"
        }, _this5.props);
        var removeItem = setInterval(function () {
            _this5.setState({
                list: _this5.state.list.slice(0, -1)
            }, function () {
                //console.log(this.state.list);
                if (_this5.state.list.length === Math.round(_this5.props.list.length / 2)) {
                    _this5.setState({
                        bg: "crimson",
                        borderColor: "green"
                    });
                }

                !_this5.state.list.length && clearInterval(removeItem);
            });
        }, 1000);
        return _this5;
    }

    _createClass(Friends, [{
        key: "render",
        value: function render() {
            var _state2 = this.state,
                _state2$list = _state2.list,
                list = _state2$list === undefined ? [] : _state2$list,
                bg = _state2.bg,
                borderColor = _state2.borderColor;


            return list.length ? React.createElement(
                "ul",
                { className: "list__firends", style: { backgroundColor: bg, borderColor: borderColor } },
                list.map(function (item, index) {
                    return React.createElement(
                        "li",
                        { key: index },
                        item
                    );
                })
            ) : null;
        }
    }]);

    return Friends;
}(React.Component);

var App = React.createElement(
    React.Fragment,
    null,
    React.createElement(Friends, { list: friendsList })
);

root.render(App);