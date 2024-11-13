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
let num2=null;
let equalitysign=false;
let answer=0;
let originalOperatorKey="";


function operated(a,b,operator){
    if(a==null || b==null) return 0;
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
const Delete=document.querySelector('#Delete');
let Value="";
function Display(content){
    let number=0;
    if(!isNaN(content)){
        number=parseInt(content);
    }
    return number;
}

Delete.addEventListener('click',()=>{
    Value=deleteLastNum(Value);
})


for(const number of numbers){
    NumberCheck(number);
    
}
for(const operate of operators){
        operatorCheck(operate);
}

equal.addEventListener('click',()=>{
    calculatingValue();
})

function operatorCheck(operate){
    operate.addEventListener('click',()=>{
        OperatorKey=operate.textContent;
        
       if(equalitysign){
            num1=parseInt(Value);
            answer="";
            equalitysign=false;
            Value="";
        }
        else if(num1==null&& Value!==''){
            num1=parseInt(Value);
            Value="";
        }else if(num1!=null && Value!=''){
            num2=parseInt(Value);
            answer=operated(num1,num2,originalOperatorKey);
            screen.textContent=answer;
            num1=answer;
            Value='';
        }
       originalOperatorKey=operate.textContent;
        console.log(OperatorKey);
    })
}

/*value is getting displayed as NAN*/
clear.addEventListener('click',clearScreen);

function NumberCheck(number){
    number.addEventListener('click',()=>{
       
        Value+=Display(number.textContent);
       console.log(Value);
        screen.textContent=Value;

        // console.log(number.textContent);
        
    })
}

function clearScreen(){
    screen.textContent='';
    Value="";
    num1=null;
    num2=null;
    answer=0;
    OperatorKey="";
    equalitysign=false;
    originalOperatorKey='';
}
function calculatingValue(){
    if(OperatorKey!="" && Value!=""){
        num2=parseInt(Value);
        answer= operated(num1,num2,OperatorKey);
       screen.textContent=answer;
       equalitysign=true;
      Value=answer.toString();
     

    }
    else if(OperatorKey!="" && Value==""){
        answer=operated(num1,num1,OperatorKey);
        screen.textContent=answer;
        equalitysign=true;
        Value=answer.toString();
        
    }
}

function deleteLastNum(Value){

    let string=Value.slice(0,Value.length-1);
    
    screen.textContent=string;
    return string;
}