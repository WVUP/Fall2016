console.log('Hello'); 
console.error('Uh Oh =('); 
console.warn('Stop!');

var temp ="Brady";

temp = 12;

var arr = ['Brady', 'Bob', 'Joe'];
//arr[0]

//Add new item to array
arr.push('New User');


//Start at the 2 index and remove 1 item from array
arr.splice(2, 1);

for(var index = 0; index < arr.length; index++)	{
	var element = arr [index];
	console.log('Current name: ' + element);
}

arr.forEach(function(element, i, list) {
	console.log(element);
});

var el = document.getElementById('test');
var colors = ['blue', 'red', 'green'];
var html = '';
for (var i = 0; i  < colors.length; i++) {
	var c = colors[i];
	html += '<p style="color:' + c + ';" >' + c + '</p>';
}

el.innerHTML = html;