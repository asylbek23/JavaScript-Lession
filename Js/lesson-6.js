// 1) Дан массив names = ["Jone", "Dos", "Aidos", "Oleg"] вывести в div
// Пример: <div id="output">Jhone Dos Aidos Oleg</div>

let names = ["Jone", "Dos", "Aidos", "Oleg"];

let output = document.getElementById('output');

names.forEach(elem => {
	return output.innerHTML += elem + ' ';
});


// 2) Дан объект:

// photo = {
// 	"albumId": 1,
// 	"id": 1,
// 	"title": "accusamus beatae ad facilis cum similique qui sunt ",
// 	"url": "https://via.placeholder.com/600/92c952",
// 	"thumbnailUrl": "https://via.placeholder.com/150/92c952"
// };

// вывести все значения поля в див <div id="photo"></div>

let photoOutput = document.getElementById('photo');

let photo = {
	albumId: 1,
	title: "accusamus beatae ad facilis cum similique qui sunt",
	url: "https://via.placeholder.com/600/92c952",
	thumbnailUrl: "https://via.placeholder.com/150/92c952"
};

photoOutput.innerHTML = photo.albumId;
photoOutput.innerHTML += photo.title;
photoOutput.innerHTML += photo.url;
photoOutput.innerHTML += photo.thumbnailUrl;


// 3) В html есть тег <img id="img1" /> как получить доступ через js ?

let getImg = document.getElementById('img1');
console.log(getImg);

// 4) <img id="img1" /> поменять атрибут src на "https://via.placeholder.com/600/92c952"

getImg.src = 'https://via.placeholder.com/600/92c952';

// 5) Дан объект:
// var styles = { color: "red", fontSize: "50px" } и
// <p id="mytext">Some text</p>
// присвоить тегу p (атрибут style)

let styles = { color: "red", fontSize: "50px" };
let myText = document.getElementById('mytext');

myText.style.color = styles.color;
myText.style.fontSize += styles.fontSize;


// 6) var arr = [1, 555, 555, 98, 100, 2023, 2, 45]
// Вывести все элменты массива в див < div id = "arrOutput" ></ >
let arrOutput = document.getElementById('arrOutput');

let arr = [1, 555, 555, 98, 100, 2023, 2, 45];

arr.forEach(item => {
	arrOutput.innerHTML += item + ' ';
});


// 7) Взять массив из 6 задачи и отфильтровать числа больше 100 и вывести див <div id="filterOutput"></div>
let filterOutput = document.getElementById('filterOutput');

arr.forEach(item => {
	if (item > 100) {
		filterOutput.innerHTML += item + ' ';
	}
});


// 8) Взять массив из 6 задачи и удвоить все элементы и резульат вывести
// див <div id="doubleOutput"></div>
let doubleOutput = document.getElementById('doubleOutput');

arr.forEach(item => {
	doubleOutput.innerHTML += item * 2 + ' ';
});



// 9) Есть кнопка <button id="doCalculate">Calculate</button>
// приклике вывести в консоль "I'm clicked"
let doCalculate = document.getElementById('doCalculate');

doCalculate.addEventListener('click', () => {
	console.log("I'm clicked");
});

// 10) Верстка
// <input id="numsInput" value="Task 9"/>
// <button id="pushButton">Push</button>
// при клике на кнопку Push взять value у инпута и вывести тег <p id="numsOutput"></p>

let numsInput = document.getElementById('numsInput');
let pushButton = document.getElementById('pushButton');
let numsOutput = document.getElementById('numsOutput');

pushButton.addEventListener('click', () => {
	numsOutput.innerHTML = numsInput.value;
});


// 11) Дан пустой массив fromInputValues = [] и верстка
// <input id="numsInput" />
// <button id="pushButton2">Push</button>
// При клике на кнопку Пуш взять value из инпута и запушить в массив - fromInputValues;
let fromInputValues = [];

let pushButton2 = document.getElementById('pushButton2');

pushButton2.addEventListener('click', () => {
	fromInputValues.push(numsInput.value);
	console.log(fromInputValues);
});

console.log(fromInputValues);

