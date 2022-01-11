let count = 0;
let counter = document.querySelector(".count");

function increase() 
{
    count++;
    counter.innerHTML = count;
}

function reset() 
{
    count = 0;
    counter.innerHTML = count;
}

function decrease() 
{
    count--;
    counter.innerHTML = count;
}