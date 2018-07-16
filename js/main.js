document.addEventListener('DOMContentLoaded', function() {

var signInButton = document.querySelector('button.signin');

signInButton.addEventListener('click', function() {
  document.querySelector('.modal').style.display = 'block';

// set attr for submit button and user/pass buttons.
  var sumbitButton = document.querySelector('button.submit');
  var userInputField = document.querySelector('#user');
  var userPassField = document.querySelector('#pass');

// check to see if the submit button in the modal is clicked before input fields filled.
  sumbitButton.addEventListener('click', function(e) {
    userInputField.className = 'error';
    userPassField.className = 'error';
    e.stopPropagation();

  });
// check for clicks on input fields and cancel propagation.
  userPassField.addEventListener('click', function(e) {
    e.stopPropagation();
  });

  userInputField.addEventListener('click', function(e) {
    e.stopPropagation();
  });
// moveover EventListener for input fields to reset className.
  userInputField.addEventListener('mouseover', function(){
    userInputField.className = "";
  });

  userPassField.addEventListener('mouseover', function(){
    userPassField.className = "";
  });

// onclick event listener to close modal when you click anywhere.
  var modalSelect = document.querySelector('.modal');

  modalSelect.addEventListener('click', function() {
    document.querySelector('.modal').style.display = 'none';
    });

});

var signInButton = document.querySelector('button.close');

signInButton.addEventListener('click', function() {
  document.querySelector('.modal').style.display = 'none';
});




});
