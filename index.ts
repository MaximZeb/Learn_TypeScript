let str: string = "Pomidor";
let num: number = 234;
let ON: boolean = true;
let change: any = "123";

let StrArr: string[] = ['h','e','l','l','o'];
let NumArr: Array<number> = [1,2,3,4,5];


change = false;

function logInfo(name: string, age: number): void {
   console.log(`Info ${name}, ${age}`)
}
logInfo("Maksim", 27);

function calc(a:number, b: number | string): number {
    if(typeof b === "string") b = +b;
    return a+b;
}
console.log(calc(2,3));

function DatePasport (seria: number | string, nomer: number | string) {
    if(typeof seria === 'string' || typeof nomer === 'string') {
        seria = +seria;
        nomer = +nomer;
    }
    console.log(`Date Pasport ${seria}, ${nomer}`);
}

// class
class Server {
    static Version = '1.0.3';

    private status: string = 'working';

    constructor(public name: string, protected ip: number) {}

    public turnOn() {
        this.status = 'working'
    }
    turnOff() {
        this.status = 'offline'
    }
    getStatus(): string {
        return this.status
    }
}
const server: Server = new Server ('localhost', 21342);

class AnimalsHouse {
    constructor(public nameAnimals: string, public age: string | number, private addres: string) {
    }
    returnAnimal() {
        return AnimalsHouse;
    }
}
const animal: AnimalsHouse = new AnimalsHouse('markiz', 23, "Wild Nature");
interface UserInterface {
    name: string;
    age: string | number;
    result: () => void;
    id?: any;
}
const USER: UserInterface = {
    name: 'Maksim',
    age: 27,
    result() {
        console.log(`${this.name}, ${this.age}`)
    }
}

interface SayHello {
    sayHello: () => void;
}
class User implements SayHello {
    constructor(private name: string, private age: number) {}
    sayHello() {
        console.log(`${this.name}`)
    }
}
interface Name {
    result: () => void;
}
class Animal implements Name {
    constructor(private nameAnimal: string){}

    result(): void {
    }
}
interface Usere {
    id: number
    name: string
    adress?: any
}
const aArrdfdsdf: Array<Usere> = [
    {id: 1, name: 'mila', adress: 1234},
    {id: 1, name: 'mila', adress: 1234}
];