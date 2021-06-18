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