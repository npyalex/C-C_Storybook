//var className = ['Digital','Technological','Progressive','Humanist','Immersive','Ethical','Empathic','Creative','Exploratory'];

//var randomValue = className[Math.floor(Math.random() * className.length)];

//function capFirst(string) {
//    return string.charAt(0).toUpperCase() + string.slice(1);
//}

//function getRandomInt(min, max) {
//  	return Math.floor(Math.random() * (max - min)) + min;
//}
//function generateName(){
//	var name1 = ["testo","sneezy"];

//	var name2 = ["testy","doc"];

//	var name = capFirst(name1[getRandomInt(0, name1.length + 1)]) + ' ' + capFirst(name2[getRandomInt(0, name2.length + 1)]);
//	return name;

//}

var names = [
    'Digital','Technological','Progressive','Humanist','Immersive','Ethical','Empathic','Creative','Exploratory'
]

function newClass() {
    var randomNumber = Math.floor(Math.random()*names.length);
    document.getElementById('classDisplay').innerHTML = class[randomNumber];
}