console.log('Hello');
console.error('Uh-oh =(');
console.warn('stop!');


var temp =	'Sean';
temp = 12;
var arr	=	['Sean', 'Aaron', 'Lane'];
// arr[0]
// push adds new item to array
arr.push('New User');
arr.push('Boogie');

//.splice  starts at 3 index and removes 1 item from array
arr.splice(3,1);

for(var index = 0; index < arr.length; index++)
{var element = arr[index];
	console.log('Current name: ' + element);
}

arr.forEach(function(element, i, list) 
	{ console.log(element);
	});

var el = document.getElementById('test');
var colors = ['blue', 'red', 'green','pink', 'teal']
var html = '';
for(var i = 0; i < colors.length; i++)
{  	var c = colors[i];
	html += '<p style="color:' + c + '";>' + c + '</p>';
	debugger;
}	


el.innerHTML = html;
