import {sum, getUserData, awaitSetTimeout, fetchTodos} from './index'

import {test, expect, beforeEach, afterEach, describe} from 'vitest'

import { DEFAULT_USER, USER, TODOS } from './mockedData'

test(`fn should return sum of numbers`, () => {
    const result = sum(2,3);
    expect(result).toBe(5);
})

test(`fn should return a*100`, () => {
    const result = sum(2);
    expect(result).not.toBe(2);
    expect(result).toBe(200);
})

describe(`USERS_FNS`, () => {
    let counter = 0;

    beforeEach(() => {
        console.log(`before test`, counter);
        counter++
    })

    afterEach(() => {
        console.log(`after test`, counter);
    })

    test(`fn should return default user`, () => {
        const result = getUserData();
        expect(result).toEqual(DEFAULT_USER);
    })
    
    test(`fn should return user`, () => {
        const result = getUserData({firstName: `Anton`});
        expect(result).toEqual(USER);
    })
})

test(`after setTimeout`, async () => {
    const result = await awaitSetTimeout();
    expect(result).toBe(`after 1s`);
})

test(`fn should return array of 2 todos`, async ()=>{
    const result = await fetchTodos();
    expect(result).toEqual(TODOS);
})