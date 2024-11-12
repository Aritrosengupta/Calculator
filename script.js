function add (a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

let operator;
let num1;
let num2;

function operate(a,b,operator){
    switch (operator){
        case "+":return add(a,b);
        case"-":return subtract(a,b);
        case "*":return multiply(a,b);
        case "/":return divide(a,b);
    }
}

const numbers=document.querySelectorAll('.numberKey');
const screen=document.querySelector("#screen");
const clear=document.querySelector('#clear');
let Value="";
function Display(content){
    let number=parseInt(content)
    return number;
}

for(const number of numbers){
    number.addEventListener('click',()=>{
        
        Value+=Display(number.textContent);
        screen.textContent=Value;

        console.log(number.textContent);
    })
}


/*value is getting displayed as NAN*/
clear.addEventListener('click',clearScreen);
function clearScreen(){
    screen.textContent='';
    Value="";
}