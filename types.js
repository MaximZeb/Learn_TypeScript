function sayhello(name) {
    console.log(name);
}
sayhello("maks");

// never

function thorwError (messange: string): never {
    throw new Error(messange);
}

function infinty(){
    while (true) {

    }
}
// Type создыние своих типов данных
type Login = String;
const login: Login = 'admin'

type ID = string | number 
const id1: ID = 1234;
const id2: ID = "mask";
