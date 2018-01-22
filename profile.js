$( function() {
    $( "#sortable1, #sortable2" ).sortable({
        connectWith: ".connectedSortable"
    }).disableSelection();
} );

var myForm = [];
function saveForm(){
	// Take each input's name and value and add it to the array we already created.
	$('form input[type=text]').each(function(){
		myForm.push({ name: this.name, value: this.value});
	});
}
function debug(){
	// Loop through our array and output the values.  These values should reflect what form inputs we have above and what their current values are.
	for (var i = 0; i < myForm.length; i++) {
		console.log(myForm[i].name+': '+myForm[i].value);
	}
}


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
