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
