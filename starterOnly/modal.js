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
const Inputlocation = document.getElementsByClassName('checkbox-input');
// récupérer les messages d'erreurs
const MessageErreur = document.getElementById('error-alphabet');

let validInput = { // Quand toutes les valeurs sont à 1, formIsTtue passe à true.
  
  symbol : 0,
  mail : 0,
  password : 0,

}

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
// vérification ne champ du prénom

let alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));

nameInputEvent.addEventListener('input',() => {
  
  const nameValue = nameInputEvent.value;
   if (nameValue.search(alphabet)=== 0) {
    nameInputEvent.style.display="none";
    return true;
   }
   else if (nameValue.search(alphabet)=== -1){
    nameInputEvent.style.display = "inline";
    return false;
   }
})
// vérification ne champ du nom
LastnameIputEvent.addEventListener('input',() => {
  
  const LastnameValue = LastnameIputEvent.value;
   if (LastnameValue.search(alphabet)=== 0) {
    MessageErreur.style.display="inline";
    return true;
   }
   else if (LastnameValue.search(alphabet)=== -1){
    MessageErreur.style.display = "inline";
    return false;
   }
})
// vérification l'adreese email
InputMail.addEventListener('input',() =>{
  const at = InputMail.value.indexOf("@");
  if ( at == -1){
    alert ("votre email est non valide");
    InputMail.focus();
    return false;
  }
} )