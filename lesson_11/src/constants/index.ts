let str: string = `hello`;
let value: number = 2;
let isTrue: boolean = true;
let valueUndefined: undefined = undefined;
let valueNull: null = null;

type maybeString = string | undefined | null;

let userName: maybeString = `Bogdan`;
let userMonth: any = 9;

let animals: string[] = [`cat`, `dog`, `lion`];
let values: number[] = [10, 20, 30];
let ids: string[] | number[] | any[] = [`hello`, 10];

type UserType = {
    firstName: string;
    age: number;
}

enum REST_API_METHODS {
    GET = `get`,
    DELETE = `delete`,
    POST = `post`,
}

type Child = {
    firstName: string;
    age: number;
}

interface User {
    firstName: string;
    age: number;
    isMarried: boolean;
    children?: Child[],
    rest: REST_API_METHODS
}

let user: User = {
    firstName: `Taras`,
    age: 60,
    isMarried: true,
    children: [
        {
            firstName: `Bogdan`,
            age: 2,
        },
        {
            firstName: `Andriy`,
            age: 5,
        }
    ],
    rest: REST_API_METHODS.GET
}

const renderData = (str: string): void => {
    console.log(`Hello, ${str}!`);
}

const sum = (a:number, b: number | undefined): number => {
    return b ? a+b : a;
}

sum(10,20);
sum(30);

const printValue = <x, y>(value_1:x, value_2:y): void => {
    console.log(value_1);
    console.log(value_2);
}

printValue(10, 20);
printValue(`hello`, `world`);