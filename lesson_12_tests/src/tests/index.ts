import todos from '../services/todos'

const sum = (a: number, b?: number): number => {
    if (b) return a + b;
    return a * 10;
}

const getUserDate = () => {
    return { firstName: `Taras`, age: 30 };
}

const waitTimeout = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`after timeout`);
        }, 1000);
    })
}

const fetchTodos = async () => {
    const request = await todos.get();
    return request.slice(0,2);
}

export { sum, getUserDate, waitTimeout, fetchTodos };