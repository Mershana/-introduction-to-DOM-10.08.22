'use strict'

// Несколько обработчиков одного события в JavaScript
/* №1⊗jsPmDmSH
Дан абзац:
<p id="elem">text</p> */

let elem = document.querySelector('#elem');
elem.addEventListener('click', func1);
elem.addEventListener('click', func2);
elem.addEventListener('click', func3);

function func1() {
	console.log('1');
}

function func2() {
	console.log('2');
}

function func3() {
	console.log('3');
}