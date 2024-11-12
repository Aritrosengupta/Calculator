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

let OperatorKey='';
let num1=null;
let num2='';

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
const operators=document.querySelectorAll(".OperatorKey");
const equal=document.querySelector("#equal");
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
for(const operate of operators){
    operate.addEventListener('click',()=>{
        if(Value!=''){
            num1=parseInt(Value);
            Value="";
        }
       OperatorKey=operate.textContent;
        console.log(OperatorKey);
    })
}

equal.addEventListener('click',()=>{
    if(OperatorKey!="" && Value!=""){
        num2=parseInt(Value);
       let answer= operate(num1,num2,OperatorKey);
       screen.textContent=answer;

    }
    else if(OperatorKey!="" && Value==""){
        let answer=operate(num1,num1,OperatorKey);
        screen.textContent=answer;
    }
})

/*value is getting displayed as NAN*/
clear.addEventListener('click',clearScreen);
function clearScreen(){
    screen.textContent='';
    Value="";
}