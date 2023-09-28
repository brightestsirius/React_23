import todos from './../services/todos'

const sum = (a: number, b?: number): number => {
    if (b) return a + b;
    return a * 10;
}

type UserData = {
    firstName: string;
    age: number;
    isMarried?: boolean;
}

const getUser = (user?: UserData) => {
    if (user) {
        user.isMarried = true;
        return user;
    }
    return { firstName: `Anton`, age: 20 };
}

const awaitTimeout = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`After 1000ms`);
        }, 1000)
    })
}

const fetchData = async () => {
    const request = await todos.get();
    return request.slice(0, 2);
}

export { sum, getUser, awaitTimeout, fetchData };