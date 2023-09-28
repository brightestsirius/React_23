import { sum, getUser, awaitTimeout, fetchData } from './index'
import { todos } from './mocked'
import { test, expect, beforeEach, afterEach, describe, it } from 'vitest';

test(`fn should return sum of numbers`, () => {
    const result = sum(2, 3);
    expect(result).toBe(5);
})

test(`fn should return 10*a`, () => {
    const result = sum(2);
    expect(result).not.toBe(5);
    expect(result).toBe(20);
})

test(`fn to get default user`, () => {
    const result = getUser();
    expect(result).toEqual({ firstName: `Anton`, age: 20 });
})

test(`fn to get user`, () => {
    const result = getUser({ firstName: `Alina`, age: 20 });
    expect(result).toEqual({ firstName: `Alina`, age: 20, isMarried: true });
})

test(`fn should return string after 1s`, async () => {
    const result = await awaitTimeout();
    expect(result).toBe(`After 1000ms`);
})

test(`fn should return array of two objects`, async () => {
    const result = await fetchData();
    expect(result).toEqual(todos);
})

describe(`COUNTING`, () => {
    let countFirst = 0,
        countSecond = 0;

    beforeEach(() => {
        countFirst++;
    })

    afterEach(() => {
        countSecond++;
    })

    test(`counting`, () => {
        expect(countFirst).toBe(1);
        expect(countSecond).toBe(0);
    })
})