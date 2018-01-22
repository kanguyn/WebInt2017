$( function() {
    $( "#sortable1, #sortable2" ).sortable({
        connectWith: ".connectedSortable"
    }).disableSelection();
} );

///local storage ///

(function($) {
$.fn.donetyping = function(callback){
	var _this = $(this);
 	var x_timer;    
    _this.keyup(function (){
        clearTimeout(x_timer);
        x_timer = setTimeout(clear_timer, 1000);
    }); 
	
	function clear_timer(){
		clearTimeout(x_timer);
		callback.call(_this);
	}
}
});

/*function to check HTML5 storage support in user browser*/
function _support_html5_storage() {
	  try {
		return 'localStorage' in window && window['localStorage'] !== null;
	  } catch (e) {
		return false;
	  }
}

/* set item in local storage */
$("#mytext").donetyping(function (e){
	if(_support_html5_storage()){
		localStorage.setItem($(this).attr("id"), $(this).val());
	}
});

/*retrive item from local storage*/
if(_support_html5_storage()){
	var _textarea = $("#mytext");
	if($.trim( _textarea.val()) == ''){
		var stored_item = localStorage.getItem( _textarea.attr("id"));
		_textarea.val(stored_item);
	}
}

//delete local item
$("button").click(function(e){
	e.preventDefault();
	$("#mytext")[0].reset;
	localStorage.removeItem($("#mytext").attr("id"));
});

/////////////////////////////////////////////////////////////////////////////


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
