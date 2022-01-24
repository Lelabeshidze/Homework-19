const signupForm = document.querySelector('#user-signup-form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');

const usernameError = document.querySelector('#username-error');
const emailError = document.querySelector('#email-error');

const userID =  document.querySelector('#ID');
const mobile = document.querySelector('#phone');
const position = document.querySelector('#position');

const useridError = document.querySelector ('#id-error');
const mobileError = document.querySelector('#mobile-error');
const positionError = document.querySelector('#position-error');

function validateUsername(){
  if(!username.validity.valid){
    username.classList.add('has-error');
    if(username.validity.tooShort){
      usernameError.innerText = 'Username must be 4 length or more';
    } else {
      usernameError.innerText = 'Username is required.';
    }
    return false;
  } else {
    username.classList.remove('has-error');
    username.classList.add('has-success');
    usernameError.innerText = '';
    return true;
  }
}

function validateEmail(){
  if(!email.validity.valid){
    email.classList.add('has-error');
    if(email.validity.typeMismatch){
      emailError.innerText = 'Please enter valid email.';
    } else {
      emailError.innerText = 'Email is required.';
    }
    return false;
  } else {
    email.classList.remove('has-error');
    email.classList.add('has-success');
    emailError.innerText = '';
    return true;
  }
}

function validateID(){
    if(!userID.validity.valid){
        userID.classList.add('has-error');
        if(userID.validity.tooShort){
            useridError.innerText = 'ID must contain 11 numbers';
        }else{
            useridError.innerText = 'ID is required';
        }
        return false;
    }else{
    userID.classList.remove('has-error');
    userID.classList.add('has-success');
    useridError.innerText = '';
    return true;
    }
}

function validateMobile(){
    if(!mobile.validity.valid){
        mobile.classList.add('has-error');
        if(mobile.validity.tooShort){
            mobileError.innerText = 'Mobile number must be 9 length';
        }else{
            mobileError.innerText = 'Mobile number is required';
        }
        return false;
    }else{
    mobile.classList.remove('has-error');
    mobile.classList.add('has-success');
    mobileError.innerText = '';
    return true;
    }
}

function validatePosition(){
    if(position.validity.valid) {
      position.classList.add('has-success');}
      if(position.validity.valid){
      positionError.innerText = 'Position is not required';
      }
}

username.addEventListener('input', () => {
  validateUsername();
});

email.addEventListener('input', () => {
  validateEmail();
});
userID.addEventListener('input', () => {
    validateID();
  });
mobile.addEventListener('input', () => {
    validateMobile();
  });
position.addEventListener('input', () => {
    validatePosition();
  });

signupForm.addEventListener('submit', e => {
  e.preventDefault();
  const isValidUsername = validateUsername();
  const isValidEmail = validateEmail();
  const isValidID = validateID();
  const isValidMobile = validateMobile();
  const isValidPosition = validatePosition();

  if(isValidUsername && isValidEmail && isValidID && isValidMobile && isValidPosition ){
    const usernameValue = username.value;
    const emailValue = email.value;
    const IDValue = userID.value;
    const mobileValue = mobile.value;
    const positionValue = position.value;
    console.log('We can send information to server.', {username: usernameValue, email: emailValue , userID: IDValue , mobile:mobileValue , position: positionValue});
    dynamicModalShow('#user-notification');
  } else {
    dynamicModalShow('#payment-success');
  }
});


// Modals
const modalEl = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal-close');

// modalCloseBtn.addEventListener('click', () => {
//   closeModal();
// });

// function showModal(){
//     modalEl.classList.add('open');
// }
//
// function closeModal() {
//   modalEl.classList.remove('open');
// }

function dynamicModalShow(modalSelector){
  const modal = document.querySelector(modalSelector);
  if(modal){
    modal.classList.add('open');
    const modalCloseBtn = modal.querySelector('.modal-close')
    modalCloseBtn.addEventListener('click', () => {
      dynamicModalClose(modalSelector);
    });
  }
}

function dynamicModalClose(modalSelector) {
  const modal = document.querySelector(modalSelector);
  if(modal){
    modal.classList.remove('open');
  }
}
