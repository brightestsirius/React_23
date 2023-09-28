// const convertItem = (value: number) => String(value);
import todos from '../services/todos'

type UserData = {
    firstName: string;
    age?: number;
    country?: string;
}

const sum = (a: number, b?: number): number => {
    if(b) return a + b;
    return a*100;
}

const getUserData = (user?:UserData) => {
    if(user) {
        user.country = `Ukraine`;
        return user;
    }
    return {firstName: `John`, age: 23};
}

const awaitSetTimeout = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`after 1s`);
        }, 1000)
    })
}

const fetchTodos = async () => {
    const response = await todos.get();
    return response.slice(0,2);
}

export { sum, getUserData, awaitSetTimeout, fetchTodos };