/* generate pin function */
function generatePin(){
    const randomNum = Math.round(Math.random()*10000);
    // check random number of length 4:
    const randString = randomNum.toString();
    const getPin = document.getElementById('pin-generate');
    if (randString.length == 4) {
        getPin.value = randString;
    }
    else{
        generatePin();
    }
};

/* calculator section js */
const submitBtn = document.getElementById('btn-submit');
const calcKeyPad = document.getElementById('calc-keypad');
const calcDisplay = document.getElementById('calc-display');
calcKeyPad.addEventListener('click', function(event){
    if (isNaN) {
        if(event.target.innerText == 'C'){
            calcDisplay.value = '';
        }
        else if(event.target.innerText == '<'){
            const calcValueText = String(calcDisplay.value);
            const slicedValue = calcValueText.slice(0, -1);
            calcDisplay.value = slicedValue;
        }
        else{
            const keyInput = event.target.innerText;
            calcDisplay.value = calcDisplay.value + keyInput;
        }
    }
    if(calcDisplay.value.length == 4){
        submitBtn.removeAttribute('disabled');
        submitBtn.style.backgroundColor = '#495BC3';
    }
});


/* sending pin & verify */
function sendPin(){
    const getPin = document.getElementById('pin-generate');
    const calcDisplay = document.getElementById('calc-display');
    const failNotify = document.getElementById('notify-fail');
    const successNotify = document.getElementById('notify-success');
    const countTry = document.getElementById('try-count')
    if(getPin.value == calcDisplay.value) {
        successNotify.style.display = 'block';
        failNotify.style.display = 'none';
        countTry.parentElement.style.display = 'none';
    }
    else{
        failNotify.style.display = 'block';
        successNotify.style.display = 'none';
        countTry.parentElement.style.display = 'block';
        if(countTry.innerText > 0){
            countTry.innerText--;
        }
    }

}









