var str = "Pomidor";
var num = 234;
var ON = true;
var change = "123";
var StrArr = ['h', 'e', 'l', 'l', 'o'];
var NumArr = [1, 2, 3, 4, 5];
change = false;
function logInfo(name, age) {
    console.log("Info " + name + ", " + age);
}
logInfo("Maksim", 27);
function calc(a, b) {
    if (typeof b === "string")
        b = +b;
    return a + b;
}
console.log(calc(2, 3));
function DatePasport(seria, nomer) {
    if (typeof seria === 'string' || typeof nomer === 'string') {
        seria = +seria;
        nomer = +nomer;
    }
    console.log("Date Pasport " + seria + ", " + nomer);
}
// class
var Server = /** @class */ (function () {
    function Server(name, ip) {
        this.name = name;
        this.ip = ip;
        this.status = 'working';
    }
    Server.prototype.turnOn = function () {
        this.status = 'working';
    };
    Server.prototype.turnOff = function () {
        this.status = 'offline';
    };
    Server.prototype.getStatus = function () {
        return this.status;
    };
    Server.Version = '1.0.3';
    return Server;
}());
var server = new Server('localhost', 21342);
var AnimalsHouse = /** @class */ (function () {
    function AnimalsHouse(nameAnimals, age, addres) {
        this.nameAnimals = nameAnimals;
        this.age = age;
        this.addres = addres;
    }
    AnimalsHouse.prototype.returnAnimal = function () {
        return AnimalsHouse;
    };
    return AnimalsHouse;
}());
var animal = new AnimalsHouse('markiz', 23, "Wild Nature");
var USER = {
    name: 'Maksim',
    age: 27,
    result: function () {
        console.log(this.name + ", " + this.age);
    }
};
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.sayHello = function () {
        console.log("" + this.name);
    };
    return User;
}());
var Animal = /** @class */ (function () {
    function Animal(nameAnimal) {
        this.nameAnimal = nameAnimal;
    }
    Animal.prototype.result = function () {
    };
    return Animal;
}());
var aArrdfdsdf = [
    { id: 1, name: 'mila', adress: 1234 },
    { id: 1, name: 'mila', adress: 1234 }
];
