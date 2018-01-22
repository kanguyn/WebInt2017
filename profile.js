$( function() {
    $( "#sortable1, #sortable2" ).sortable({
        connectWith: ".connectedSortable"
    }).disableSelection();
} );

var formData = {
	
	set : function (){
		// (Re)create the myForm valiable
		var myForm = [];
		// Delete old data from localstorage
		localStorage.removeItem('myForm');
		// Take each input's name and value and add it to the array we already created.
		$('form input[type=text]').each(function(){
			// Push each input's value into the temporary variable
			myForm.push({ name: this.name, value: this.value});
		});
		// Add the array to localStorage
		localStorage.myForm = JSON.stringify(myForm);
	},
	get : function (){
		// Is the form already stored within localStorage? If so, get it and copy it's contents over our myform array variable.
		if(localStorage.myForm != undefined){
			// Get the existing values out of localStorage
			myForm = JSON.parse(localStorage.myForm);
			// Loop through myForm
			for (var i = 0; i < myForm.length; i++) {
				// Populate the form with what data you have for it
				$('[name='+myForm[i].name+']').val(myForm[i].value);
			}
		}
	}
}
// Populate the form with whatever data already exists for it
formData.get();
// Watch for a change in a change in an input field. If there is a change, resave the form values.
$("input").change( function() {
	// If a change is detected, save the values.
	formData.set();
});


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
