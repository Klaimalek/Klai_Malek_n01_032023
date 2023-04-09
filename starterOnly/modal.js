function editNav() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

// DOM Elements
const msg = document.getElementById('.message');
const modalbg = document.querySelector('.bground');
const successModal = document.getElementById('bground-success');
const sucessModalClose = document. getElementById('close-modalsucess');
const modalBtn = document.querySelectorAll('.modal-btn');
const confirmationValidation = document.getElementById('confirm-modal');
const sucessModelCloseBtn = document.querySelector('#btn-closed'); // bouton "fermer"
//récupérer les données de formulaire
const formData = document.querySelectorAll('.formData');
// récupérer le span close
const modalClose = document.getElementsByClassName('close');
//récupérer le button c'est partie
const modalInscription = document.getElementsByClassName('tn');
// récupérer les champs de formulaire d'inscription
const nameInputEvent = document.getElementById('first');
const LastnameIputEvent = document.getElementById('last');
const InputMail = document.getElementById('email');
const Inputbirthdate = document.getElementById('birthdate');
const Inputquantity = document.getElementById('quantity');
const Inputlocation = document.querySelectorAll('input[name="location"]');
const InputCondition = document.getElementById('checkbox1');

// récupérer les messages d'erreurs
const MessageErreur = document.getElementById('error-alphabet');
const MessageErreurLastname = document.getElementById(
  'error-alphabet-lastname'
);
const MessageErreurMail = document.getElementById('error-mail');
const MessageErreurDate = document.getElementById('error-date');
const MessageErreurAge = document.getElementById('error-age');
const MessageErreurNumber = document.getElementById('error-number');
const MessageErreurCondition = document.getElementById('error-condition');
const MessageErreurRadio = document.getElementById('error-radio');
// création de la regex email
const regEmail = new RegExp(
  '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$',
  'g'
);
7;

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
  successModal .style.display ='none';
}

// ------------ element pour l'envoi du formulaire ------------------------
const form = document.querySelector('form[name="reserve"]');

// validation de prénom
nameInputEvent.addEventListener('input', function () {
  validName(this);
});
const validName = function (nameInputEvent) {
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
};
// validation de nom
LastnameIputEvent.addEventListener('input', function () {
  validLastname(this);
});
const validLastname = function (LastnameIputEvent) {
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
};
// validation de l'adreese email

InputMail.addEventListener('input', function () {
  validMail(this);
});
const validMail = function (InputMail) {
  if (regEmail.test(InputMail.value)) {
    MessageErreurMail.style.display = 'none';
    InputMail.focus();
    return true;
  } else if (!regEmail.test(InputMail.value)) {
    MessageErreurMail.style.display = 'inline';
    InputMail.focus();
    return false;
  }
};

//validation de date de naissance

Inputbirthdate.addEventListener('input', function () {
  validBirthday(this);
});
const validBirthday = function (Inputbirthdate) {
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
};
// validation de champs de saisie qauntité

Inputquantity.addEventListener('input', function () {
  validQuantity(this);
});
const validQuantity = function (Inputquantity) {
  InputQuantityValue = Inputquantity.value;
  if (isNaN(InputQuantityValue) == true) {
    MessageErreurNumber.style.display = 'inline';
    return false;
  } else {
    MessageErreurNumber.style.display = 'none';
    return true;
  }
};
// validation location
Inputlocation.forEach((check) =>
  check.addEventListener('change', function () {
    validLocation(this);
  })
);

const validLocation = function (Inputlocation) {
  let itemChecked = 0;
  Inputlocation.forEach((i) => {
    if (i.checked) {
      itemChecked++;
    }
  });
  if (itemChecked === 0) {
    MessageErreurRadio.style.display = 'inline';
    return false;
  } else if (itemChecked !== 0) {
    MessageErreurRadio.style.display = 'none';
    return true;
  }
};
//validation conditions
InputCondition.addEventListener('input', function () {
  validCondition(this);
});
const validCondition = function (InputCondition) {
  if (InputCondition.checked == false) {
    MessageErreurCondition.style.display = 'inline';
    return false;
  } else {
    MessageErreurCondition.style.display = 'none';
    return true;
  }
};

//*************** Validation de formulaire**********************
const validation = function () {
  let isOK = [];

  isOK.push(validName(nameInputEvent));
  isOK.push(validLastname(LastnameIputEvent));
  isOK.push(validMail(InputMail));
  isOK.push(validBirthday(Inputbirthdate));
  isOK.push(validQuantity(Inputquantity));
  isOK.push(validLocation(Inputlocation));
  isOK.push(validCondition(InputCondition));

  if (isOK.includes(false)) {
    successModal.style.display = 'none';
  } else {
    form.style.display = 'none';
    modalbg.style.display = 'none';
    SuccesModal();
  }
};

function SuccesModal() {
  successModal.style.display = 'block';
}

// ------------ Envoi du formulaire d'inscription ------------------

form.addEventListener('submit', function (e) {
  e.preventDefault();
  validation();
});

// ------- Fermer le formulaire avec le message de validation ---------

//close modal insciption

sucessModelCloseBtn.addEventListener('click', function () {
  closeModalsucess(this);
});
const closeModalsucess = function(){
  successModal .style.display='none';
}

sucessModalClose.addEventListener('click', closeModal);

function closeModal() {
  successModal .style.display ='none';
}

//document.querySelector("btn-closed").addEventListener("click", closeModal);
