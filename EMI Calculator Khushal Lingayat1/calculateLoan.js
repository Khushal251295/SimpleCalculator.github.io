function calLoan(){
const amount = document.querySelector('#amount').value;
const intrest_rate = document.querySelector('#intrest').value;
const months = document.querySelector('#months').value;

const intrest = (amount * (intrest_rate*0.01))/months;

const payment = ((amount/months)+intrest).toFixed(2);

document.querySelector('#payment').innerHTML = 'EMI : ₹' + payment;


}