console.log('hello world!');
let foo = 'bar';
const bar = 'foo';
var hello = 'world';

function greet() {
    let name = "Zumi";
    console.log("Hello " + name);

    if(true) {
        // this creates a block scope
        let x =3;
        console.log(x);
    }
}
//javascript object is a collection of key value pair
//keys have to be unique
// the values do not have to be unique
let object = {
    key : 'value',
    key2 : 2,
    key3: [1,2,3,4],
    a: {
        b: 'value'
    }
}