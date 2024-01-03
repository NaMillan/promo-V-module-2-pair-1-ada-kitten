'use strict';
const list = document.querySelector('.js-list');
const input_search_desc = document.querySelector('.js_in_search_desc');
const kittenOneImage = 'https://dev.adalab.es/gato-siames.webp';
const kittenOneName = 'Anastacio'.toUpperCase();
const kittenOneDesc =
  'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenOneRace = 'Siamés';

const kittenTwoImage = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenTwoName = 'Fiona'.toUpperCase();
const kittenTwoDesc =
  'Produce fascinación y curiosidad. Exótico, raro, bello, extraño hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';
const kittenTwoRace = 'Sphynx';

const kittenThreeImage = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenThreeName = 'Cielo'.toUpperCase();
const kittenThreeDesc =
  'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
const kittenThreeRace = 'Maine Coon';

const addBtn = document.querySelector('.js-btn-add');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');
const cancelBtn = document.querySelector('.js-btn-cancel');
const newForm = document.querySelector('.js-new-form');

//1LLAMAMOS AL SIMBOLO MAS
const addPlus = document.querySelector('.js-add');

//4 CREAMOS LA FUNCION MANEJADORA E INCLUIMOS LAS FUNCIONES DEL PUNTO 3
function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newForm.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}
//3 CREAMOS LAS FUNCIONES
function showNewCatForm() {
  newForm.classList.remove('collapsed');
}
function hideNewCatForm() {
  newForm.classList.add('collapsed');
}

//2 LLAMAMOS AL EVENTO SOBRE EL +
addPlus.addEventListener('click', handleClickNewCatForm);

//PUNTO 2. HEMOS LA FUNCION ADDNEWKITTEN Y HEMOS METIDO LAS CONSTANTES DEL EVENTO ADDBTN

function addNewKitten(event) {
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMessageError.innerHTML = '¡Uy! parece que has olvidado algo.';
  }
}

addBtn.addEventListener('click', addNewKitten);

cancelBtn.addEventListener('click', (event) => {
  inputPhoto.value = '';
  inputDesc.value = '';
  inputName.value = '';
  newForm.classList.add('collapsed');
});

//PUNTO 3 HEMOS CREADO UNA FUNCION RENDERKITTEN PARA UNIFICAR EL CODIGO PARA CREAR UN GATO

function renderKitten(url, desc, name, race) {
  return `<li class="card">
<img
    class="card_img"
    src="${url}"
    alt="siames-cat"
/>
<h3 class="card_title"> ${name}</h3>
<h4 class="card_race">${race}</h4>
<p class="card_description">${desc}
</p>
</li>`;
}

const kittenOne = renderKitten(
  kittenOneImage,
  kittenOneDesc,
  kittenOneName,
  kittenOneRace
);

const kittenTwo = renderKitten(
  kittenTwoImage,
  kittenTwoDesc,
  kittenTwoName,
  kittenTwoRace
);

const kittenThree = renderKitten(
  kittenThreeImage,
  kittenThreeDesc,
  kittenThreeName,
  kittenThreeRace
);

list.innerHTML = kittenOne + kittenTwo + kittenThree;

const descrSearchText = input_search_desc.value;
if (kittenOneDesc.includes(descrSearchText)) {
  list.innerHTML = kittenOne;
}

if (kittenTwoDesc.includes(descrSearchText)) {
  list.innerHTML += kittenTwo;
}

if (kittenThreeDesc.includes(descrSearchText)) {
  list.innerHTML += kittenThree;
}
