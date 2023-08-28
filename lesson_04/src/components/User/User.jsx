import React, { useState, useEffect } from "react";

export default function User() {
  const [user, setUser] = useState({
    name: `Taras`,
    surname: `Sheva`,
    city: `Dnipro`,
    userCounter: 1
  });

  const [userCounterInterval, setUserCounterInterval] = useState();

  useEffect(
    () => {
        console.log(`in useEffect`);

        // setTimeout(() => {
        //     setUser(prevState => ({...prevState, name: `Vasyl`}))
        // }, 1000)

        const interval = setInterval(() => {
            console.log(`IN INTERVAL`);
            setUser(prevState => ({...prevState, userCounter: prevState.userCounter+1}));
        }, 1000);

        setUserCounterInterval(interval);

        return () => {
            console.log(`in useEffect UNMOUNT`, interval);
            clearInterval(interval);
        }
    }, []
  )

  useEffect(() => {
    console.log(`in useEffect for user.userCounter`, user.userCounter);
    user.userCounter===5 && clearInterval(userCounterInterval);

    return () => {
        console.log(`in useEffect for user.userCounter UNMOUNT`);
    }
  }, [user.userCounter]);

  return Object.values(user).length
  ? <ul>
    {Object.values(user).map((item, index) => <li key={index}>{item}</li>)}
  </ul>
  : null;
}
