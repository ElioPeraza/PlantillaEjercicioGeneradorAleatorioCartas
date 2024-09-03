window.onload = () => {
  generarCartaAleatoria();
  iniciarTemporizador();
};

let Number = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
let card_head = document.querySelector('header');
let card_footer = document.querySelector('footer'); 
let boton_cargar_carta = document.querySelector('.button_new_card');
let card_body = document.querySelector('section.number');
let contadorDisplay = document.getElementById('contador');
let tiempoRestante = 10;

boton_cargar_carta.addEventListener('click', () => {
  generarCartaAleatoria();
});

function generarCartaAleatoria() {

  card_head.className = '';
  card_footer.className = '';
  card_body.className = 'number'; 

 
  let pinta = generarPintaAleatoria();
  card_head.className = pinta;
  card_footer.className = pinta + ' inverse';
  
 
  if (pinta === 'heart' || pinta === 'diamond') {
    card_body.classList.add('red');
  } else {
    card_body.classList.add('black');
  }
  
 
  let numero_aleatorio = generarNumeroAleatorio();
  card_body.textContent = numero_aleatorio;

  tiempoRestante = 10; 
}

function generarPintaAleatoria() {
  let num_aleatorio_pinta = Math.floor(Math.random() * 4) + 1;
  let pinta = '';
  
  switch (num_aleatorio_pinta) {
    case 1:
      pinta = 'heart';
      break;
    case 2:
      pinta = 'diamond';
      break;
    case 3:
      pinta = 'spade';
      break;
    case 4:
      pinta = 'club';
      break;
  }
  
  return pinta;
}

function generarNumeroAleatorio() {
  let num_aleatorio = Math.floor(Math.random() * Number.length);
  return Number[num_aleatorio];
}

function iniciarTemporizador() {
  setInterval(() => {

    contadorDisplay.textContent = tiempoRestante; 
    tiempoRestante--; 
    if (tiempoRestante <= 0) {
      generarCartaAleatoria(); 
    }
  }, 1000); 
}