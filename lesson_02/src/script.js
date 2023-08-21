const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

const animalsList = [`cat`, `dog`, `lion`];
const numbersList = [10,20,30];
const friendsList = [`Stus`, `Sheva`, `Lesya`, `cat`, `dog`, `lion`];

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

class List extends React.Component {
    constructor(props){
        super(props);

        setTimeout(() => {
            this.setState({
                list: [...this.state.list, `tiger`],
                color: `crimson`
            })
    
            console.log(this.state);
        }, 1000);

    }

    state = Object.assign(
        {
            bg: `#e7e7ff`
        },
        this.props
    )

    removeItem(index){
        // let copiedList = JSON.parse(JSON.stringify(this.state.list));
        // copiedList.splice(index,1);
        
        // this.setState({
        //     list: copiedList
        // });

        this.setState({
            list: this.state.list.filter((el, i) => i !== index)
        })
    }

    render(){
        const {list=[], color=``, bg} = this.state;

        return list.length
        ? <ul style={{color, backgroundColor: bg}}>
            {list.map((item, index) => <ListItem key={index} item={item} handleFunc={() => this.removeItem(index)} />)}
        </ul>
        : null;
    }
}

class ListItem extends React.Component{
    render(){
        const {item, handleFunc} = this.props;

        return <li>{item} <Button text="Delete" handleFunc={handleFunc} /></li>
    }
}

class Button extends React.Component{
    render(){
        const {text, handleFunc} = this.props;

        return <button onClick={handleFunc}>{text}</button>
    }
}

class Friends extends React.Component{

    constructor(props){
        super(props);

        // this.setState({}, ()={});

        const removeItem = setInterval(() => {
            this.setState({
                list: this.state.list.slice(0, -1)
            }, () => {
                //console.log(this.state.list);
                if(this.state.list.length === Math.round(this.props.list.length/2)){
                    this.setState({
                        bg: `crimson`,
                        borderColor: `green`
                    })
                }

                !this.state.list.length && clearInterval(removeItem);
            });

            
        }, 1000);
    }

    state = Object.assign({
        bg: `transparent`,
        borderColor: `transparent`
    }, this.props);

    render(){
        const {list=[], bg, borderColor} = this.state;

        return list.length
            ? <ul className="list__firends" style={{backgroundColor: bg, borderColor}}>
                {list.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            : null;
    }
}


const App = <React.Fragment>
    {/* <List list={animalsList} color="#607d8b" /> */}
    <Friends list={friendsList} />
</React.Fragment>

root.render(App);