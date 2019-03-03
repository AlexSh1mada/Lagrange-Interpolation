
var polynomial = require('everpolate').polynomial;

var btnCalcular = document.querySelector('#btnCalcular');
btnCalcular.addEventListener('click', Calcular);

function Calcular()
{
    var x = document.querySelector('#x');
    var x0 = document.querySelector('#x0');
    var x1 = document.querySelector('#x1');
    var x2 = document.querySelector('#x2');
    var x3 = document.querySelector('#x3');
    var y0 = document.querySelector('#y0');
    var y1 = document.querySelector('#y1');
    var y2 = document.querySelector('#y2');
    var y3 = document.querySelector('#y3');

    if(x<=2)
    {
        polynomial(x, [x0,x1], [y0,y1]);
    }
    else if(x===3)
    {
        polynomial(x, [x0, x1, x2], [y0, y1, y2]);
    }
    else if(x===4)
    {
        polynomial(x, [x0, x1, x2, x3], [y0, y1, y2, y3]);
    }
    else
        console.log("Ingrese un número entre 1 y 4")
    
}

console.log(polynomial(3, [2,4], [640, 2790]));
console.log(polynomial(3, [1, 2, 4], [425, 640, 2790]));
console.log(polynomial(3, [1, 2, 4,5 ], [425, 640, 2790, 6123]));