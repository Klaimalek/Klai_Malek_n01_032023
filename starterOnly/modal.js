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
// récupérer les champs de formulaire d'inscription
const nameInputEvent = document.getElementById('first');
const LastnameIputEvent = document.getElementById('last');
const InputMail = document.getElementById('email');
const Inputbirthdate = document.getElementById('birthdate');
const Inputquantity = document.getElementById('quantity');
const InputRadio = document.getElementsByClassName('checkbox-input');
const InputCondition = document.querySelector('checkbox1');
const btns = document.getElementsByClassName('btn-submit');

// récupérer les messages d'erreurs
const MessageErreur = document.getElementById('error-alphabet');
const MessageErreurLastname = document.getElementById(
  'error-alphabet-lastname');
const MessageErreurMail = document.getElementById('error-mail');
const MessageErreurDate = document.getElementById('error-date');
const MessageErreurAge = document.getElementById('error-age');
const MessageErreurNumber = document.getElementById('error-number');
const MessageErreurCondition = document.getElementById('error-condition');
const MessageErreurRadio = document.getElementById('error-radio');
// création de la regex email
const regEmail = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');
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
}

// vérification de champ de saisie prenom
nameInputEvent.addEventListener('input', () => {
  
  const nameInputValue = nameInputEvent.value;
  if (nameInputValue.length <= 2) {
    MessageErreur.style.display = 'inline';
    nameInputEvent.focus();
    return false;
  } else if (nameInputValue.length >= 2) {
    MessageErreur.style.display = 'none';
    nameInputEvent.focus();
    return true;
  }
});
// vérification de champ de saisie nom
LastnameIputEvent.addEventListener('input', () => {
  const lastnameValue = LastnameIputEvent.value;
  if (lastnameValue.length <= 2) {
    MessageErreurLastname.style.display = 'inline';
    LastnameIputEvent.focus();
    return false;
  } else if (lastnameValue.length >= 2) {
    MessageErreurLastname.style.display = 'none';
    LastnameIputEvent.focus();

    return true;
  }
});
// vérification l'adreese email
InputMail.addEventListener('input', () => {
  
  
  if (regEmail.test(InputMail.value)) {
    MessageErreurMail.style.display = 'none';
    InputMail.focus();
    return true;
  } else {
    MessageErreurMail.style.display = 'inline';
    InputMail.focus();
    return false;
  }

});

//vérification de date de naissance
Inputbirthdate.addEventListener('input', () => {
  inputdateValue = Inputbirthdate.value;
  var dt = new Date(inputdateValue).getFullYear();
  var yearNow = new Date().getFullYear();
  var d_reg = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/;
  inputdateValue = inputdateValue.split('-').reverse().join('/');

  if (d_reg.test(inputdateValue)) {
    MessageErreurDate.style.display = 'none';
    //calcul l'age
    let dateDiff = yearNow - dt;
    if (dateDiff < 18) {
      MessageErreurAge.style.display = 'inline';
      return false;
    } else {
      MessageErreurAge.style.display = 'none';
    }
    return true;
  } else {
    // si aucune date n’est saisie affichage du message qui demande de le faire.
    MessageErreurDate.style.display = 'inline';
    return false;
  }
});
// vérification de champs de saisie qauntité

Inputquantity.addEventListener('input', () => {
  InputQuantityValue = Inputquantity.value;
  if ( isNaN( InputQuantityValue) == true) {
    MessageErreurNumber.style.display = 'inline';
  
  } else {
    
    MessageErreurNumber.style.display = 'none';
  }
});
// vérification de radio

for (let i = 0; i < InputRadio.length; i++) {
  InputRadio[i].addEventListener('change', functionSelection(i));
}

//InputRadio.forEach((val) => val.addEventListener('change', functionSelection));

function functionSelection(i) {
  var selected = false;
  if (InputRadio[i].checked) {
    selected = true;
  }
  if (selected) {
   // alert('validation suceessful');
    
  }
}

//validation conditions


function validCondition(InputCondition) {
  if (InputCondition.checked == false) {
      MessageErreurCondition.style.display = "inline";
      console.log("false");
      return false;
  } else {
      MessageErreurCondition.style.display = 'none';
      return true;
  }; 
}