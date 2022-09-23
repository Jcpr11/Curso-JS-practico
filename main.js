const h1 = document.querySelector('h1');
const input1 = document.querySelector('#Calculo1');
const input2 = document.querySelector('#Calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

btn.addEventListener("click", btnOnClick);


function btnOnClick () {
    const sumInput = Number(input1.value) + Number(input2.value);
    pResult.innerText = "El Resultado es: " + sumInput;
}