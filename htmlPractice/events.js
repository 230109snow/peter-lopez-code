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