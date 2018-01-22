function populateStorage() {
  localStorage.setItem('FirstName', document.getElementById('FirstName').value);
  localStorage.setItem('LastName', document.getElementById('LastName').value);
  localStorage.setItem('email', document.getElementById('email').value);
  localStorage.setItem('phone_nb', document.getElementById('phone_nb').value);
}

function setForm() {
  var currentFirstName = localStorage.getItem('FirstName');
  var currentLastName = localStorage.getItem('LastName');
  var currentEmail = localStorage.getItem('email');
  var currentPhoneNb = localStorage.getItem('phone_nb');

  document.getElementById('FirstName').value = currentFirstName;
  document.getElementById('LastName').value = currentLastName;
  document.getElementById('email').value = currentEmail;
  document.getElementById('phone_nb').value = currentPhoneNb;
}


var form1 = document.querySelector("#identityform");
var storeForm = function storeForm(){
	if (!localStorage.getItem)
m} ;
form1.addEventListener('submit',populateStorage());