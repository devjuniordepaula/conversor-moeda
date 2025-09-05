
const valor = document.querySelector('#valor');
const de = document.querySelector('#de');
const para = document.querySelector('#para');
const resultado = document.querySelector('#resultado');
const conversor = document.querySelector('#conversor');


const taxas = {
    brl: {brl: 1, usd: 0.18, euro: 1.16},
    usd: {brl: 5.47, usd: 1, euro: 0.86},
    euro: {brl: 6.67, usd: 1.16, euro: 1}
};

conversor.addEventListener('click', () => {

    const valorInserido = valor.value;

});