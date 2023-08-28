import React, {useState, useEffect} from 'react'
// import Counter from './components/Counter/Counter'
// import User from './components/User/User'
// import Todo from './components/Todo/Todo';
import ListColor from './components/ListColor/ListColor'

export default function App() {
  // const [showUser, setShowUser] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowUser(false);
  //   }, 1500);
  // }, []);

  return (
    <>
      {/* <Counter counterDefault={0} /> */}
      {/* {showUser && <User />} */}
      {/* <Todo /> */}
      <ListColor />
    </>
  )
}