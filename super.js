let num = 20;

function showFirstMessage(text){
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage('Hello World!');
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret(){
    let num = 50;
    return num;
}

const anotherNun = ret();
console.log(anotherNun);

const logger = function (){
    console.log('Hello');
};
logger();

const str = "test";

console.log(str.toUpperCase());
console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));

const logg = "Hello world!";

console.log(logg.slice(6, 11));

const meat = "Misha pidor";

console.log(meat.slice(6, 11));
console.log(meat.substring(6, 11));
console.log(meat.substr(6, 4));

const number = 12.2;
console.log(Math.round(number));

const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test));
