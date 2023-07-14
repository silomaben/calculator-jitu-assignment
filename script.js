let form = document.querySelector('.inputform');
let firstNo = document.querySelector('#first-no');
let secondNo = document.querySelector('#second-no');
let operator = '';


let btnAdd = document.querySelector('#add');
let btnSubtract = document.querySelector('#subtract');
let btnMultiply = document.querySelector('#multiply');
let btnDivide = document.querySelector('#divide');


btnAdd.addEventListener('click', () => {
    operator = '';
    operator = 'add';
    // console.log(operator + 'clicked');
  });

btnSubtract.addEventListener('click', () => {
    operator = '';
    operator = 'subtract';
    // console.log(operator + 'clicked');
});

btnMultiply.addEventListener('click', () => {
    operator = '';
    operator = 'multiply';
    // console.log(operator + 'clicked');
  });

btnDivide.addEventListener('click', () => {
    operator = '';
    operator = 'divide';
    // console.log(operator + 'clicked');
});



form.addEventListener('submit', (e)=>{
    e.preventDefault();

    if(operator == ''){
        alert('select an operator');
    } else  if((firstNo.value !== '') && (secondNo.value !== '' && operator !=='')){
        let answer = '';
        if(operator == 'add'){
            answer = parseInt(firstNo.value) + parseInt(secondNo.value);
        } else if (operator == 'subtract'){
            answer = parseInt(firstNo.value) - parseInt(secondNo.value);
        } else if (operator == 'multiply'){
            answer = parseInt(firstNo.value) * parseInt(secondNo.value);
        } else if (operator == 'divide'){
            answer = parseInt(firstNo.value) / parseInt(secondNo.value);
        }
        

        console.log(answer);
        document.getElementById("your-answer").value = answer;
        operator = '';
    }

   
})
