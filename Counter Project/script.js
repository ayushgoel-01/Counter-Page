const countValue = document.querySelector('.val');

function increment(){
    let value = parseInt(countValue.innerText);
    value = value + 1;
    countValue.innerText = value;
};

function decrement(){
    let value = parseInt(countValue.innerText);
    value = value - 1;
    countValue.innerText = value;
};

function reset(){
    let value = 0;
    countValue.innerText = value;
}