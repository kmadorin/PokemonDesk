// Работа с простыми типами
// Напиши тип функции, конкатенирующей две строки

type TypeFnConcat = (str1: string, str2: string) => string;

const concat: TypeFnConcat = (str1: string, str2: string) => str1 + str2;

concat('Hello ', 'World');

//Работа с интерфейсами
// Напиши интерфейс для описания следующих данных

type TypeSime = string | number;

type TypeWithData = {
    howIDoIt: string,
    simeArray: TypeSime[],
}

interface MyHomeTaskInterface {
    howIDoIt: string;
    simeArray: TypeSime[];
    withData: TypeWithData[]
};

const MyHometask: MyHomeTaskInterface = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
};

//Типизация функций, используя Generic
// В уроке про Generics мы написали интерфейс массива MyArray...
// Добавь типизацию для метода reduce

interface MyArray<T> {
    [n: number] : T;

    map<U>(fn: (el: T) => U) : U[];
    reduce<U>(fn: (acc: U, curValue: T, index: number, arr: MyArray<T>) => U): U;
};

