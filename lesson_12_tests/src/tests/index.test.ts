import { sum, getUserDate, waitTimeout, fetchTodos } from './index.ts';
import { test, expect, beforeEach, describe, it } from 'vitest';

test(`fn should return sum of numbers`, () => {
    const result = sum(2, 3);
    expect(result).toBe(5);
})

test(`fn should return 10 multiply a`, () => {
    const result = sum(2);
    expect(result).not.toBe(5);
    expect(result).toBe(20);
})

describe(`COUNTING`, () => {
    let count = 0;

    beforeEach(() => {
        count++;
    })

    it(`fn should return userData`, () => {
        const result = getUserDate();
        expect(result).toEqual({ firstName: `Taras`, age: 30 })
    })

    it(`counting`, () => {
        expect(count).toBe(2);
    })
})

test(`fn after 1s`, async () => {
    const result = await waitTimeout();
    expect(result).toBe(`after timeout`);
})

test(`fn should retun array of todos`, async () => {
    const result = await fetchTodos();
    expect(result).toEqual([
        { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
        {
            userId: 1,
            id: 2,
            title: 'quis ut nam facilis et officia qui',
            completed: false
        }
    ])
})