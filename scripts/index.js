function sayHi(){
    console.log("Hi");
}
sayHi();

console.log("--------------------------------------------");

function sayHello(name){
    console.log(`Hello ${name}`);
}
sayHello("Kamal");

console.log("--------------------------------------------");

function greeting (name="unkown"){
    console.log(`Hello ${name}`);
}
greeting("Haasan");
greeting();

console.log("--------------------------------------------");

const welcome = (isRegistered) => {
    if (!isRegistered){
        console.log("access denied");
        return;
    } 
    console.log("Passed");

}
welcome(true);
welcome(false);

console.log("--------------------------------------------");

function multiplication (number_1, number_2){
    return console.log(`The result of ${number_1} x ${number_2} is ${number_1*number_2}`);
}
multiplication(3,6);

const printDetails = (username, age,...courses) => {
console.log(`Hi, my name is ${username}, I'm ${age} years old. My courses are:`);
for (const course of courses) {
    console.log(course);
}
}
printDetails("Zeinab",30, ["HTML","CSS","JS" ,"SQL"]);

console.log("--------------------------------------------");
console.log("--------------------------------------------");

setTimeout(() => {
   console.log("Hi"); 
}, 3000);

console.log("--------------------------------------------");

function summation (number_1, number_2){
    return console.log(`The result of ${number_1} + ${number_2} is ${number_1+number_2}`);
}
summation(10,33);

console.log("--------------------------------------------");

const arrowsayHi = () => console.log("Hi");
arrowsayHi();

const arrowGreeting = (name) => console.log(`Hi ${name}`);
arrowGreeting("Hasan");

console.log("--------------------------------------------");

const function_1 = () => {
    console.log("Hi from function_1");
    const function_2 = () => {
         console.log("Hi from function_2");
    }
    function_2();
}
function_1();

console.log("--------------------------------------------");

const division = (x) => {
    return (y) => {
        if (y == 0){
            return null;
        }
        return x/y;

    }
}

const div = division(10);
console.log(`The result of 10/0 is ${div(0)}`);
console.log(`The result of 10/5 is ${div(5)}`);

console.log("--------------------------------------------");

const arrowsummation = (number_1, number_2) =>{
    return console.log(`The result of ${number_1} + ${number_2} is ${number_1+number_2}`);
}

const arrowsubtraction = (number_1, number_2) =>{
    return console.log(`The result of ${number_1} - ${number_2} is ${number_1-number_2}`);
}

const arrowmultiplication = (number_1, number_2) =>{
    return console.log(`The result of ${number_1} x ${number_2} is ${number_1*number_2}`);
}

const arrowdivision = (number_1, number_2) =>{
    if (number_2==0){
        return null;
    }
    return console.log(`The result of ${number_1} / ${number_2} is ${number_1/number_2}`);
}
 
const calculator = (callback, n1, n2) =>{
    callback(n1,n2);
}

calculator(arrowsummation,10,5);
calculator(arrowsubtraction,10,5);
calculator(arrowmultiplication,10,5);
calculator(arrowdivision,10,5);
