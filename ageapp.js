const btn = document.querySelector('.btn');
const day = document.querySelector('.day');
const month = document.querySelector('.month');
const year = document.querySelector('.year');


//error-messages
const day_err = document.querySelector('.day-err');
const month_err = document.querySelector('.month-err');
const year_err = document.querySelector('.year-err');

//date methods
const date = new Date();
const current_year = date.getFullYear();
const current_month = date.getMonth() +1;
const current_day = date.getDay() +1;

//results
const year_result = document.querySelector('.year-result');
const month_result = document.querySelector('.month-result');
const day_result = document.querySelector('.day-result');

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    
    if(day.value == '' || month.value == '' || year.value == ''){
        day_err.textContent = 'This field is required';
        month_err.textContent = 'This field is required';
        year_err.textContent = 'This field is required';
        day.style.border = '1px solid red';
        month.style.border = '1px solid red';
        year.style.border = '1px solid red';
    }else if(isNaN(day.value)){
        day_err.textContent = 'Requires a number';
        day.style.border = '1px solid red';
    }else if(isNaN(month.value)){
        month_err.textContent = 'Requires a number';
        month.style.border = '1px solid red';
    }else if(isNaN(year.value)){
        year_err.textContent = 'Requires a number';
        year.style.border = '1px solid red';
    }else if(day.value > 31){
        day_err.textContent = 'Must be a valid day';
        day.style.border = '1px solid red';
    }else if(month.value > 12){
        month_err.textContent = 'Must be a valid month';
        month.style.border = '1px solid red';
    }else if(year.value > current_year){
        year_err.textContent = 'Must be in the past';
        year.style.border = '1px solid red';
    }else{
        day.style.border = '1px solid grey';
        month.style.border = '1px solid grey';
        year.style.border = '1px solid grey';
        day_err.textContent = '';
        month_err.textContent = '';
        year_err.textContent = '';

       const user_year = current_year - year;
       const user_month = current_month - month;
       const user_day = current_day - day;
    }
})