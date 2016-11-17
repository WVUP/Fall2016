window.test = function(){
	var frm = document.getElementById('myForm')

	var assignment = {
		title: frm.title.value,
		description: frm.desc.value
	};

	buildHTML(assignment);

};

function buildHTML(assignment){
	var el = document.getElementById('preview');

	var html =
		'<h3>' + assignment.title + '</h3>' +
		'<p>' + assignment.description + '</p>';

		el.innerHTML = html;
}

var btn_preview = document.getElementById('btn_preview');
btn_preview.addEventListener('click', function(){
	
	var preview = document.getElementById('preview')
	test();
	preview.classList.remove('hide');
	
	
});

var btn_edit = document.getElementById('btn_edit');
btn_edit.addEventListener('click', function(){

var preview = document.getElementById('preview');
var edit = document.getElementById('edit')

preview.classList.add('hide');
edit.classList.remove('hide');

});

function toggle(isPreview){
	var preview = document.getElementById('preview');
	var edit = document.getElementById('edit')


	var showElement = (isPreview) ? preview : edit;
	var hideElement = (isPreview) ? edit    : preview;

	showElement.classList.remove('hide');
	hideElement.classList.add('hide');

}