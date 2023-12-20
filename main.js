'use strict';
const list = document.querySelector('.js-list');
const input_search_desc = document.querySelector('.js_in_search_desc');
const kittenOneImage = 'https://dev.adalab.es/gato-siames.webp';
const kittenOneName = 'Anastacio'.toUpperCase();
const kittenOneDesc = 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenOneRace = 'Siamés';


const kittenTwoImage = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenTwoName = 'Fiona'.toUpperCase();
const kittenTwoDesc = 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';
const kittenTwoRace = 'Sphynx';

const kittenThreeImage = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenThreeName = 'Cielo' .toUpperCase();
const kittenThreeDesc = 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
const kittenThreeRace = 'Maine Coon';


const kittenOne = `<li class="card">
<img
    class="card_img"
    src="${kittenOneImage}"
    alt="siames-cat"
/>
<h3 class="card_title"> ${kittenOneName}</h3>
<h4 class="card_race">${kittenOneRace}</h4>
<p class="card_description">${kittenOneDesc}
</p>
</li>`;


const kittenTwo = `<li class="card">
<img
    class="card_img"
    src="${kittenTwoImage}"
    alt="sphynx-cat"
/>
<h3 class="card_title"> ${kittenTwoName}</h3>
<h4 class="card_race">${kittenTwoRace}</h4>
<p class="card_description">${kittenTwoDesc}
</p>
</li>`;

const kittenThree = `<li class="card">
<img
    class="card_img"
    src="${kittenThreeImage}"
    alt="maine-coon-cat"
/>
<h3 class="card_title">${kittenThreeName}</h3>
<h4 class="card_race">${kittenThreeRace}</h4>
<p class="card_description">${kittenThreeDesc}
</p>
</li>`;
list.innerHTML = kittenOne + kittenTwo + kittenThree;

const descrSearchText = input_search_desc.value;
if( kittenOneDesc.includes(descrSearchText) ) {
 list.innerHTML = kittenOne;   
}

if( kittenTwoDesc.includes(descrSearchText) ) {
 list.innerHTML+= kittenTwo;   
}

if( kittenThreeDesc.includes(descrSearchText) ) {
 list.innerHTML+= kittenThree;   
}


