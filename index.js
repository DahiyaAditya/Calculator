const display = document.querySelector('.display')
const buttons = document.querySelectorAll('.calculator-button button')
// console.log(buttons);

let calculation = [];
let resultCalculation;

function calculate(button){
   const value = button.textContent;
//    console.log(value);
   if(value === 'CL'){
    calculation = [];
    display.textContent = "0"
   }else if(value === '='){
        display.textContent = eval(resultCalculation)
        // calculate=[];
        // resultCalculation = "";
   }else{
    calculation.push(value)
    resultCalculation= calculation.join('')
    display.textContent = resultCalculation;
   }
}

buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        calculate(button)
    })
    
})
















// let resultCalculation;

// const num = (values)=>{
//     if (Array.isArray(num.x)== false) {
//         num.x = [];
//       }
//       num.x.push(values);
//       console.log(num.x);
// }

// buttons.forEach((button)=>{
//     button.addEventListener('click', ()=>{
//         const buttonText = button.firstChild.classList[1]
       
//         console.log(button.value);
       
//     })
// })