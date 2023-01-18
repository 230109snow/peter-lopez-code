/*
var num = 0;
function increment() {
    console.log(num++);
    const countElem = document.getElementById('count');
    countElem.innerText = num;
}

function decrement() {
    const countElem = document.getElementById('count');
    countElem.innerText = num;
}

function reset() {
    const countElem = document.getElementById('count');
    countElem.innerText = 0;
}

function modifyNum(number) {
    const countElem = document.getElementById('count');
    num += number;
    countElem.innerText = num;
}

function fizzbuzz(){

    //prevents the default behavior from happening (aka refresh)
   // event.preventDefault;
    //prevents event from bubbling up to its parents
   // event.stopPropagation;

    let input = document.getElementById('fizzbuzz-input').value;
    let count = 1;
    let output = '';
    const countElem = document.getElementById('fizzbuzz-output');
    while (count <= input) {
        if (count % 15 === 0) {
            output += "\nFizzBuzz";
        }
        else if(count % 3 === 0) {
            output += "\nFizz";
        }
        else if (count % 5 === 0) {
            output += "\nBuzz";
        }
        else {
            output += "\n" + count;
        }
        console.log(count);
        count++;
    }
    countElem.innerText = output;
}
//different ways to create functions
//function declaration
function calculator(value) {

}

//anonymous function assigned to a variable
const fn = function() {

}
// fn2 variable is pointing to calculator function
const fn2 = calculator;

//arrow function
const fn3 = () => {

}

*/