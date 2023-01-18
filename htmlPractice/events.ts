let num : number = 0;

function increment() : void {
    console.log(num++);

    const countElem  = document.getElementById('count');
    countElem.innerText = num.toString();
}

function decrement() {
    const countElem = document.getElementById('count');
    countElem.innerText = num.toString();
}

function reset() {
    const countElem = document.getElementById('count');
    num - 0;
    countElem.innerText = num.toString();
}

function modifyNum(number) {
    const countElem = document.getElementById('count');
    num += number;
    countElem.innerText = num.toString();
}

function fizzbuzz() {
    let input : number = document.getElementById('fizzbuzz-input');
    let count : number = 1;
    let output : string = '';

    const countElem = document.getElementById('fizzbuzz-output');

    while (count<= input) {
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