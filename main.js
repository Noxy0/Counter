var number = 0;


function increase() {
        ++number,
        document.getElementById('number').innerHTML = number;
}

function decrease() {
    --number
    document.getElementById('number').innerHTML = number;
}