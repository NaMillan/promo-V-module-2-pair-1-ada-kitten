'use strict';
const list = document.querySelector('.js-list');
const input_search_desc = document.querySelector('.js_in_search_desc');
/*const kittenOneImage = 'https://dev.adalab.es/gato-siames.webp';
const kittenOneName = 'Anastacio'.toUpperCase();
const kittenOneDesc = 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenOneRace = 'Siamés';
const kittenTwoImage = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenTwoName = 'Fiona'.toUpperCase();
const kittenTwoDesc = 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';
const kittenTwoRace = 'Sphynx';
const kittenThreeImage = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenThreeName = 'Cielo'.toUpperCase();
const kittenThreeDesc = 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
const kittenThreeRace = 'Maine Coon';*/

const kittenOneData = {
	image: 'https://dev.adalab.es/gato-siames.webp',
	name: 'Anastacio'.toUpperCase(),
	desc: ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
	race: 'Siamés',
};
const kittenTwoData = {
	image: 'https://dev.adalab.es/sphynx-gato.webp',
	name: 'Fiona'.toUpperCase(),
	desc: 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.',
	race: 'Sphynx',
};
const kittenThreeData = {
	image: 'https://dev.adalab.es/maine-coon-cat.webp',
	name: 'Cielo'.toUpperCase(),
	desc: 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.',
	race: 'Maine Coon',
};

const kittenDataList = [kittenOneData, kittenTwoData, kittenThreeData]; //ejercicio arrays 2.8

const addBtn = document.querySelector('.js-btn-add');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');
const cancelBtn = document.querySelector('.js-btn-cancel');
const newForm = document.querySelector('.js-new-form');

//Escucha el evento click asociado al botón buscar:
const buttonSearch = document.querySelector('.js-button-search');
//Haz la función manejadora asociada al evento anterior:
//revisar mañana se suma el gato abajoterk
const filterKitten = (event) => {
	event.preventDefault();
	const descrSearchText = input_search_desc.value;
	list.innerHTML = '';
	if (kittenOneData.desc.includes(descrSearchText)) {
		list.innerHTML = renderKitten(kittenOneData); // Hemos puesto la función renderKitten porque es la que hace que el gato tenga información. Dejamos el innerHTML porque la función renderKitten tiene un return y no un innerHTML.
	}
	if (kittenTwoData.desc.includes(descrSearchText)) {
		list.innerHTML += renderKitten(kittenTwoData);
	}
	if (kittenThreeData.desc.includes(descrSearchText)) {
		list.innerHTML += renderKitten(kittenThreeData);
	}renderRace(); //como no podemos poner dos funciones manejadoras a un evento, llamamos a una dentro de la otra y se ejecutan las dos. 
	//console.log (descrSearchText);
};

const inputRace = document.querySelector ('.js-inputRace');

const raceMessageError= document.querySelector ('.js-race-error');

function renderRace (race) { //BONUS 2 DEL 2.6
  const raceSearchText = inputRace.value;
  if(raceSearchText ===  ''){
    console.log (raceSearchText)
    raceMessageError.innerHTML = `¡Uy que despiste, no sabemos su raza!`;
    
  }else if (kittenOneData.race.includes(raceSearchText)) {
		list.innerHTML = renderKitten(kittenOneData);

  }else if (kittenTwoData.race.includes(raceSearchText)) {
		list.innerHTML = renderKitten(kittenTwoData);

  }else if (kittenThreeData.race.includes(raceSearchText)) {
		list.innerHTML = renderKitten(kittenThreeData);
  }};


buttonSearch.addEventListener('click', filterKitten);




//1LLAMAMOS AL SIMBOLO MAS
const addPlus = document.querySelector('.js-add');

//4 CREAMOS LA FUNCION MANEJADORA E INCLUIMOS LAS FUNCIONES DEL PUNTO 3
function handleClickNewCatForm(event) {
	event.preventDefault();
	if (newForm.classList.contains('collapsed')) {
		showNewCatForm();
		console.log(hideNewCatForm);
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


//BONUS 4 DEL PUNTO 2.6

const cancelNewKitten = (event) => { 
  inputPhoto.value = '';
	inputDesc.value = '';
	inputName.value = '';
	newForm.classList.add('collapsed');
  
};

cancelBtn.addEventListener('click', cancelNewKitten);
	



//PUNTO 3 HEMOS CREADO UNA FUNCION RENDERKITTEN PARA UNIFICAR EL CODIGO PARA CREAR UN GATO

function renderKitten(kittenData) { // kittenData es un nombre genérico que tenemos que utilizar a lo largo de la función y que se sustituirá cuando llamemos a la función con nuestro parámetro. Podríamos haber puesto pepino y luego pepino.name que se sustituiría por kittenOneData.name cuando llamemos a renderKitten(kittenOneData).
	const html = `<li class="card">
<img
    class="card_img"
    src="${kittenData.image}"
    alt="siames-cat"
/>
<h3 class="card_title"> ${kittenData.name}</h3>
<h4 class="card_race">${kittenData.race}</h4>
<p class="card_description">${kittenData.desc}
</p>
</li>`;
	return html;
}
// El list.innerHTML lo dejamos fuera de la función para que luego no se duplique la información al hacer un loquesea.innerHTML = renderKitten() y por eso tenemos que incluir un return en la función, para que guarde esa información.
list.innerHTML = renderKitten(kittenOneData) + renderKitten(kittenTwoData) + renderKitten(kittenThreeData);

/*const kittenOne = renderKitten(
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
);*/



/*if( kittenOneDesc.includes(descrSearchText) ) {
    list.innerHTML = kittenOne;   
}

if (kittenTwoDesc.includes(descrSearchText)) {
    list.innerHTML += kittenTwo;
}

if( kittenThreeDesc.includes(descrSearchText) ) {
    list.innerHTML+= kittenThree;   
}*/
