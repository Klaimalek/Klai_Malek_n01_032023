function editNav() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
//récupérer les données de formulaire
const formData = document.querySelectorAll('.formData');
// récupérer le span close
const modalClose = document.getElementsByClassName('close');
//récupérer le button c'est partie
const modalInscription = document.getElementsByClassName('button');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
}
//close modal

modalClose[0].addEventListener('click', closeModal);


function closeModal() {
  modalbg.style.display = 'none';
  trigger.preventDefault();
  
}
// modale validation de l'inscription
modalInscription.addEventListener('click',ValidationInscription);

function ValidationInscription() {
 if(formData.value() = ""){
  e.preventDefault();
  modalbg.style.display = 'block';
 }
}

