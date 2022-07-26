let password = document.querySelector('input[type=password]');
let checkbox = document.querySelector('input[type=checkbox]');

checkbox.unCheck = function(newState, oldState) {
  this.checked
    ? password.setAttribute('type', newState)
    : password.setAttribute('type', oldState);
};

checkbox.addEventListener('change', ev => {
  ev.currentTarget.unCheck('text', 'password');
});
