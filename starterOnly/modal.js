function editNav() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

// DOM Elements
const btn-submit = document.getElementsByClassName('btn-submit');
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
const InputRadio = document.querySelectorAll('checkbox-input');

// récupérer les messages d'erreurs
const MessageErreur = document.getElementById('error-alphabet');
const MessageErreurLastname = document.getElementById('error-alphabet-lastname');
const MessageErreurMail = document.getElementById('error-mail');
const MessageErreurDate = document.getElementById('error-date');
const MessageErreurAge = document.getElementById('error-age');
const MessageErreurNumber = document.getElementById('error-number');
const MessageErreurCheck = document.getElementById('error-condition');
const MessageErreurRadio = document.getElementById('error-radio');
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
// vérification les champs de saisie fr formulaire inscription
/*function ValidationInscription ()
{


if(InputName.value == "")
{
  alert("Mettez votre Nom.");
  InputName.focus();
  return false;
}
if(InputLastName.value == "")
{
  alert("Mettez votre Prenom.");
  InputLastName.focus();
  return false;
}
if(InputMail.value == "")
{
  alert("Mettez votre adresse emaail.");
  InputMail.focus();
  return false;
}
if(Inputbirthdate.value == "")
{
  alert("Mettez votre date de naissance.");
  Inputbirthdate.focus();
  return false;
}
if(Inputquantity.value == "")
{
  alert("Champs obligatoire");
  Inputquantity.focus();
  return false;
}
if(Inputlocation.value == "")
{
  alert("Veuillez choisir un pays.");
  Inputlocation.focus();
  return false;
}
return true;
}
*/

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
  const at = InputMail.value.indexOf('@');
  if (at == -1) {
    MessageErreurMail.style.display = 'inline';
    InputMail.focus();
    return false;
  } else {
    MessageErreurMail.style.display = 'none';
    InputMail.focus();
    return true;
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
      MessageErreurAge.style.display ='inline';
      return false;
    } else {
      MessageErreurAge.style.display ='none';
    }
    return true;
  } else {
    // si aucune date n’est saisie affichage du message qui demande de le faire.
    MessageErreurDate.style.display = 'inline';
    return false;
  }
});
// vérification de champs de saisie qauntité

Inputquantity.addEventListener('input',() =>{
  InputQuantityValue = Inputquantity.value;
   let input = typeof(InputQuantityValue);
  if(  input === Number){
    MessageErreurNumber.style.display ='none';
    return true;
  }
  else{
    
    MessageErreurNumber.style.display ='inline';
    return false;
  }
})
// vérification de radio
InputRadio.forEach((val) => val.addEventListener('cahnge',functionSelection));

  function functionSelection() {
  
  var selected = false;
  for ( var i =0; i< InputRadio.length;i++) {
    if (InputRadio[i].checked) {
      selected = true;
      break;
    } 
  }
  if (selected){
    alert("validation suceessful")
    console.log("validation suceessful");
  }
  else{
    alert("not good")
  }
  }