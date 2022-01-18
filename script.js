const button = document.querySelectorAll('button');
const current = document.getElementsByClassName('current-operand');
const previous = document.getElementsByClassName('previous-operand');
var currentOperand = "0", previousOperand = "", operation = undefined;
function compute(){
        if(previousOperand == "" || operation == undefined){
                return;
        }
        var a = parseFloat(currentOperand);
        var b = parseFloat(previousOperand);
        switch(operation){
                case '+':
                        currentOperand =  b + a;
                        break;
                case '-':
                        currentOperand =  b - a;
                        break;
                case '*':
                        currentOperand =  b * a;
                        break;
                case '/':
                        currentOperand =  b / a;
                        break;
                default:
                        return;
                                                                        
        }
        previousOperand = "";
        operation = undefined;
        updatedisplay();
}
function changeop(op){
        if(previousOperand == "" && operation == undefined){
                previousOperand = currentOperand;
                currentOperand = "0";
                operation = op;
                
        }else if(previousOperand != ""  && currentOperand=="0"){
                operation = op;
        }else if(currentOperand != "0"){
                compute();
                previousOperand = currentOperand;
                currentOperand = 0;
                operation = op;
        }
        updatedisplay();
}
function appendnumber(number){
        if(number == "." && currentOperand.includes('.')){
                return;
        }
        let a = currentOperand;
        if(a=="0"){
                a = "";
        }
        currentOperand = a + number;
        updatedisplay(); 
}
function clear(){
        currentOperand = "0";
        previousOperand = "";
        operation = undefined;
        updatedisplay();
}
function delet(){
        if(currentOperand.length == 1){
                currentOperand = "0";
        }else{
                var a = currentOperand;
                currentOperand = a.slice(0,-1);
        }
        updatedisplay();
}
function updatedisplay(){
        current[0].innerText = currentOperand;
        previous[0].innerText = previousOperand; 
        if(operation != undefined){
                previous[0].innerText = previousOperand + operation; 
        }      
}
// console.log(button);
for(let i in button){
        button[i].addEventListener('click',()=>{
                if(button[i].id == 'number' || button[i].id == 'point'){
                        appendnumber(button[i].innerText);
                }
                if(button[i].id == 'clean'){
                        clear();
                }
                if(button[i].id == 'del'){
                        delet();
                }
                if(button[i].id == 'operation'){
                        changeop(button[i].innerText);
                }
                if(button[i].id == 'equal'){
                        compute();
                }
        })

        
        
}