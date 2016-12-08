
window.test = function(){
	var frm = document.getElementId('myForm');

	var assignment = {
		title: frm.title.value,
		description: frm.desc.value
	}

	console.log(assignment);
};

function buildHTML(assignment){

	var el = document.getElementId('preview')

	var html = 
		'<h3>' + assignment.title + '</h3>' +
		'<p>' + assignment.description + '</p>';

	el.inner = html;
}

var btn_preview = document.getElementId('btn_preview');
btn_preview.addEventListner('click', function(){

}{
	console.log('YES!!!');

	var preview = document.getElementId('preview');
	var edit = document.getElementId('edit')

	test();


	preview.classlist.remove('hide');
	edit.classlist.add('hide')

	var btn_edit = document.getElementId('btn_edit');
	btn_edit.addEventListner('click', function()){
		var preview = document.getElementId('edit')
		var edit = document.getElementId('edit')
		preview.clicklist.add('hide')
		edit.classlist.remove('hide')
	}
}
