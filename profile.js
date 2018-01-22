$( function() {
    $( "#sortable1, #sortable2" ).sortable({
        connectWith: ".connectedSortable"
    }).disableSelection();
} );
/*
alert("check localStorage");
// localStorage detection
function supportsLocalStorage() {
  return typeof(Storage)!== 'undefined';
}

// Run the support check
if (!supportsLocalStorage()) {
  // No HTML5 localStorage Support
  alert("// No HTML5 localStorage Support");
  alert(supportsLocalStorage());
} else {
  // HTML5 localStorage Support
  alert(supportsLocalStorage());
  alert("HTML5 localStorage Support");
}

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

  document.getElementById('FirstName').innerHTML = currentFirstName;
  document.getElementById('LastName').innerHTML = currentLastName;
  document.getElementById('email').innerHTML = currentEmail;
  document.getElementById('phone_nb').innerHTML = currentPhoneNb;


}


var form1 = document.querySelector("#identityform");
var storeForm = function storeForm(){
	if (!localStorage.getItem)
} ;
form1.addEventListener('submit',populateStorage());
*/
/*
//INUTILE A ENLEVER A LA FIN
function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move"
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop_ondiv2(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    ev.dataTransfer.clearData();
}

function drop_ondiv1(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    ev.dataTransfer.clearData();
}


function dragstart_handler(ev) {
	//console.log("dragStart");
	// Add the target element's id to the data transfer object
	alert("in dragstart_handler");
	ev.dataTransfer.setData("text/plain", ev.target.id);
	ev.dropEffect = "move";
}

function dragover_handler(ev) {
	alert("in dragover_handler");
	ev.preventDefault();
	// Set the dropEffect to move
	ev.dataTransfer.dropEffect = "move"
}
function drop_handler(ev) {
	alert("in drop_handler");
	ev.preventDefault();
	// Get the id of the target and add the moved element to the target's DOM
	var data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));
}
*/
