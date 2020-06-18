'use strict';

let canvas = new Matrix(4, 4);

document.getElementById('root').innerHTML = canvas.output();

canvas.makeIdentity();

document.getElementById('root2').innerHTML = canvas.output();