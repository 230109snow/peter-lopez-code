let foo : string = 'bar'

foo = 'hello world'

let bar : number = 3

let array : number[] = [1,2,3]

// array = [1, '2', ()]; ts will try to stop you from doing this

function greet() : void {
    console.log('hello world')
}

function add(a: number, b: number) : number {
    return a + b;
}
//first HTMLTableElement sets the object type, 2nd typecasts the return value of the function
const someTable : HTMLTableElement | null = document.getElementById
('some-table-id') as HTMLTableElement;

someTable.createTBody();

//any is when youre fed up with ts and just want to write some weird javascript
let backToJs : any = '2';
backToJs = 3
backToJs = [];

//unknown is type safe any
let tbd : unknown;
tbd = 3;


//interface enforces rules for an object ie (exampleInterface must have 'a'be a string and 'b' be a number)
interface exampleInterface {
    a : string,
    b : number, 

}

const usingInterface : exampleInterface = {
    a : 'foo',
    b : 3
}

function domOps(elem : HTMLElement) {
    elem.id = 'some id';
    elem.innerHTML = '<div>some class</div>'
}

//domOps('string')
function usingCustomInterface(param : exampleInterface) : void {
    console.log(param);
}

usingCustomInterface(usingInterface);

const notExampleInterface : any = {
    a : 'hello',
    b : 3,
    c : [],
    d : {hello: 'world'}
}

//Even though the variable notExampleInterface is not of interface
//"ExampleInterface", I was able to pass it to usingCustomInterface fn
//because the shape of the object satisfied the required 
usingCustomInterface(notExampleInterface);

//any versus unknown
function fn1(bar : any){
    bar();
}

function fn2(foo:unknown){
    //foo();
}