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

let calcTempVal = '';

function calcOne(){
    calcTempVal =+ '1';
}
function calcTwo(){
    calcTempVal =+ '2';
}
function calcThree(){
    calcTempVal =+ '3';
}
function calcFour(){
    calcTempVal =+ '4';
}
function calcFive(){
    calcTempVal =+ '5';
}
function calcSix(){
    calcTempVal =+ '6';
}
function calcSeven(){
    calcTempVal =+ '7';
}
function calcEight(){
    calcTempVal =+ '8';
}
function calcNine(){
    calcTempVal =+ '9';
}
function calcZero(){
    calcTempVal =+ '0';
}
function calcPlus(){
    calcTempVal =+ '+';
}
function calcMinus(){
    calcTempVal =+ '-';
}
function calcEquals(){

}
function calcClear(){
    calcTempVal = '';
}