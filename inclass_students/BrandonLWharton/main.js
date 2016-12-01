console.log('Hello');
console.error('Oh noes');
console.warn('Warning');

var temp = 'Brandon';

temp = 12;/*not a strongly definded language*/

temp = false;/*obviously*/

var arr = ['Aaron', 'Brandon', 'Lois'];/*an array*/

/*variables can function as an index in an array if they reference an integer*/

arr.push('New user');

arr.splice(2, 1);
/*removes Lois from the array*/

for(var i = 0; i < arr.length;i++)
{
	var element = arr[i];
	console.log('Current name: ' + element);
}

arr.forEach(function(element, i, list){
	console.log(element);
}, this);//the forEach function works as a for loop

var ele = document.getElementById('test');
var colors = ['blue', 'red', 'green'];
var html = '';
debugger;
for(var i = 0, len = colors.length;i < len;i++){
	var c = colors[i];
	html += '<p style="color:' + c + '";>'+ c + '</p>'

}

ele.innerHTML = html;