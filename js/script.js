var femaleNames = ['Marta', 'Asia', 'Emilia', 'Kasia'];
var maleNames = ['Mateusz', 'Paweł', 'Łukasz', 'Karol'];
var allNames = femaleNames.concat(maleNames);
console.log(allNames);

var newName = 'Marian';
if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
} else {
	alert('Zdublowane imię!');
}
console.log(allNames);