window.test = function(){
	var frm = document.getElementById('myForm')

	var assignment = {
		title: frm.title.value,
		description: frm.desc.value
	};

	buildHTML(assignment);
};

function buildHTML(assignment){
	//go grab our preview container
	var el = document.getElementById('preview');

	var html = 
		'<h3>' + assignment.title + '</h3>' + 
		'<p>' + assignment.description + '</p>';

	el.innerHTML = html;
}



function toggle(isPreview){
	var _preview = document.getElementById('preview');
	var _edit = document.getElementById('edit');
	var showElement = (isPreview) ? preview : edit;
	var hideElement = (isPreview) ? edit : preview;

	showElement.classList.remove('hide');
	hideElement.classList.add('hide');
}