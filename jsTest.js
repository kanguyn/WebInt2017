// localStorage detection
function supportsLocalStorage() {
  return typeof(Storage)!== 'undefined';
}

// Run the support check
if (!supportsLocalStorage()) {
  // No HTML5 localStorage Support
  alert(supportsLocalStorage());//False
} else {
  // HTML5 localStorage Support
  alert(supportsLocalStorage());//True
}

window.onload = function() {
	setForm();
};

function populateStorage() {
	alert("in populateStorage function");
	localStorage.setItem('FirstName', document.getElementById('FirstName').value);
	localStorage.setItem('LastName', document.getElementById('LastName').value);
	localStorage.setItem('email', document.getElementById('email').value);
	localStorage.setItem('phone_nb', document.getElementById('phone_nb').value);
}

function setForm() {
	alert("in setForm function");
	var currentFirstName = localStorage.getItem('FirstName');
	var currentLastName = localStorage.getItem('LastName');
	var currentEmail = localStorage.getItem('email');
	var currentPhoneNb = localStorage.getItem('phone_nb');
	alert("setForm function found those values: FirstName = " + currentFirstName + "/ LastName = " + currentLastName + "/ email = " + currentEmail + "/ phone_nb = "+ currentPhoneNb);

	document.getElementById('FirstName').innerHTML = currentFirstName;
	document.getElementById('LastName').innerHTML = currentLastName;
	document.getElementById('email').innerHTML = currentEmail;
	document.getElementById('phone_nb').innerHTML = currentPhoneNb;
}

var form1 = document.querySelector("#identityform");
form1.addEventListener('submit', function(){
    alert('Your form has been sent');
	populateStorage();
	setForm();
});