
window.test = function(){
    // Get our form so we can access our inputs easily
    var frm = document.getElementById('myForm');

    // Create an object that has the user input
    var assignment = {
        title: frm.title.value,
        description: frm.desc.value
    };

    buildHTML(assignment);
    
};

function buildHTML(assignment){
    // Go grab our preview container
    var el = document.getElementById('preview');

    var html =
        '<h3>' + assignment.title + '</h3>' +
        '<p>' + assignment.description + '</p>';
    
    el.innerHTML = html;
}

var btn_preview = document.getElementById('btn_preview');

btn_preview.addEventListener('click', function(){
    // Execute our previous function to build out our assignment object 
    // and to render out the assignment as html to our preview container
    test();

    toggle(true);
});

var btn_edit = document.getElementById('btn_edit');
btn_edit.addEventListener('click', function(){
   toggle(false);
});

function toggle(isPreview){
    var preview = document.getElementById('preview');
    var edit = document.getElementById('edit');

    var showElement = (isPreview) ? preview : edit;
    var hideElement = (isPreview) ? edit : preview;

    showElement.classList.remove('hide');
    hideElement.classList.add('hide');
}