// ----------------------------- Домашняя работа ---------------------------- >

// 1) Дан массив names = ["Jhone", "Dos", "Aidos", "Oleg"] удалить первый и последний элемент
let names = ["Jhone", "Dos", "Aidos", "Oleg"];
names.shift(); // удаляет первый элемент массива
names.pop(); // удаляет последний элемент массива


// 2) Дан массив nums = [] заполнить числами от 500 до 555
let nums = [];

for (let i = 500; i <= 555; i++) {
	nums.push(i);
}

console.log(nums);

// 3) Дан массив cities = [] заполнить имена городов Астана Алматы и т д.
let cities = [];

cities.push('Астана', 'Алматы');

console.log(cities);

// 4) Функция принмает массив и выводит размер массива
let arr4 = [1, 2, 3, 4, 5];

function sizeArray(arr) {
	return arr.length;
}

console.log(sizeArray(arr4));

// 5) Вывести в консоль все поля объекта

let photo = {
	albumId: 1,
	id: 1,
	title: "accusamus beatae ad facilis cum similique qui sunt",
	url: "https://via.placeholder.com/600/92c952",
	thumbnailUrl: "https://via.placeholder.com/150/92c952"
};

console.log(photo);

// 6) Изменить поле albmId у photo и вывести новое значения albmId
let photo2 = {
	albumId: 1,
	id: 1,
	title: "accusamus beatae ad facilis cum similique qui sunt",
	url: "https://via.placeholder.com/600/92c952",
	thumbnailUrl: "https://via.placeholder.com/150/92c952"
};

photo2.albumId = 2;

console.log(photo2.albumId);


// 7) Создать 4 объекта с полями login, password и запушить в массив users

// Не понял как и где запушить.
// Поля это - ключ или ключ + значения. Если так какое значение нужно писать?
let users = [];

let obj1 = {
	login: '',
	password: ''
};

let obj2 = {
	login: '',
	password: ''
};

let obj3 = {
	login: '',
	password: ''
};

let obj4 = {
	login: '',
	password: ''
};

users.push(obj1);


// 8) Функция принимает массив users (брать из 7 задачи) и выводить поле login


// 9) Функция принимает другую функцию и вызывает.
function firstFunc() {
	console.log('First Function!!!');
}

function secondFunc(firstFunc) {
	return firstFunc;
}

secondFunc(); // Ничего не выводит. Почему?
console.log(secondFunc); // [Function: secondFunc] - Выводит со скобками. Почему?


// 10) Удалить первый элемент массива ["green", "red", "blue"]
let arr10 = ["green", "red", "blue"];

arr10.shift();

console.log(arr10);

// 11) Удалить последний элемент массива ["green", "red", "blue"]
let arr11 = ["green", "red", "blue"];

arr11.pop();

console.log(arr11);



// 12) Функция принимает массив строк и выводит если строка начинается с буквы А (ШЕШІЛМЕДІ)
let arr12 = ["apple", "Oral", "Astana", "Madrid", "Aral", "Piter", "appartment"];

function arrStartA() {
	let out = '';

	for (let i = 0; i < arr12.length; i++) {
		for (let k = 0; k < arr12[i].length; k++) {
			// out += arr12[i][k];
			if (arr12[i][k] == 'a') {
				out += arr12[i] + ' ';
			}
		}

	}

	console.log(out);
}

arrStartA();



// 13) Функция принимает массив объектов и выводит id и name каждого элемента
// Например: 1 labore ex et quam laborum

let comments = [
	{
		id: 1,
		name: "labore ex et quam laborum",
	},
	{
		id: 2,
		name: "quo vero reiciendis velit similique earum",
	},
	{
		id: 3,
		name: "odio adipisci rerum aut animi",
	},
	{
		id: 4,
		name: "alias odio sit",
	},
	{
		id: 5,
		name: "vero eaque aliquid doloribus et culpa",
	},
	{
		id: 6,
		name: "et fugit eligendi deleniti quidem qui sint nihil autem",
	}
];

function idArr() {
	for (let item of comments) {
		for (let key in item) {
			console.log(item[key]);
		}
	}
}

idArr();




// 14) Вывести все элементы массива comments если поле id больше 3
let comments2 = [
	{
		id: 1,
		name: "labore ex et quam laborum",
	},
	{
		id: 2,
		name: "quo vero reiciendis velit similique earum",
	},
	{
		id: 3,
		name: "odio adipisci rerum aut animi",
	},
	{
		id: 4,
		name: "alias odio sit",
	},
	{
		id: 5,
		name: "vero eaque aliquid doloribus et culpa",
	},
	{
		id: 6,
		name: "et fugit eligendi deleniti quidem qui sint nihil autem",
	}
];

function idMoreThree() {
	for (let item of comments2) {
		for (let key in item) {
			if (item[key] > 3) {
				console.log(item);
			}
		}
	}

}

idMoreThree();


// 15) Дан массив ids = [] заполнить массив id (брать данные из массива comments);
let comments3 = [
	{
		id: 1,
		name: "labore ex et quam laborum",
	},
	{
		id: 2,
		name: "quo vero reiciendis velit similique earum",
	},
	{
		id: 3,
		name: "odio adipisci rerum aut animi",
	},
	{
		id: 4,
		name: "alias odio sit",
	},
	{
		id: 5,
		name: "vero eaque aliquid doloribus et culpa",
	},
	{
		id: 6,
		name: "et fugit eligendi deleniti quidem qui sint nihil autem",
	}
];

let ids = [];

for (let elem of comments3) {
	for (let key in elem) {
		if (key === 'id') {
			ids.push(elem[key]);
		}
	}
}

console.log(ids);


// 16) Функция принимает массив объектов и ВОЗВРАЩАЕТ первый элемент массива
let todos = [
	{
		userId: 1,
		id: 1,
		title: "delectus aut autem",
		completed: false
	},
	{
		userId: 1,
		id: 2,
		title: "quis ut nam facilis et officia qui",
		completed: false
	},
	{
		userId: 1,
		id: 3,
		title: "fugiat veniam minus",
		completed: false
	}
];

// console.log(todos[0]);

function returnFirstElem(arr) {
	return console.log(arr[0]);
}

returnFirstElem(todos);


// 17) Функция принимает массив объектов(todos из 14) и ВОЗВРАЩАЕТ последний элемент массива
let todos2 = [
	{
		userId: 1,
		id: 1,
		title: "delectus aut autem",
		completed: false
	},
	{
		userId: 1,
		id: 2,
		title: "quis ut nam facilis et officia qui",
		completed: false
	},
	{
		userId: 1,
		id: 3,
		title: "fugiat veniam minus",
		completed: false
	}
];

function returnFirstElem(arr) {
	console.log(arr[arr.length - 1]);
}

returnFirstElem(todos2);

// 18) Функция принимает массив объектов(todos из 14) ВОЗВРАЩАЕТ массив состоящий из поле title;
// Например ["delectus aut autem", "quis ut nam facilis et officia qui", "fugiat veniam minus" ]
let todos3 = [
	{
		userId: 1,
		id: 1,
		title: "delectus aut autem",
		completed: false
	},
	{
		userId: 1,
		id: 2,
		title: "quis ut nam facilis et officia qui",
		completed: false
	},
	{
		userId: 1,
		id: 3,
		title: "fugiat veniam minus",
		completed: false
	}
];

function arrTitle(arr) {
	let newArr = [];

	for (let elem of arr) {
		newArr.push(elem.title);
	}

	console.log(newArr);
}

arrTitle(todos3);


// 19) Созадть объект user2 = {name:"Vasya", age:44, address:{city:"Almaty", street:"Абая"}}
// Вывести город и улицу. Например Almaty Абая
let user2 = { name: "Vasya", age: 44, address: { city: "Almaty", street: "Абая" } };

function cityStreet() {
	console.log(user2.address.city + ' ' + user2.address.street);
}

cityStreet();


// 20) Функция принимает три парметра name, age, city и ВОЗВРАЩАЕТ объект состоящий из этих последний
// Должен возвращать {city:"SomeCity", age:55, name:"Dos"}

function newObj (city, age, name) {
	let newObj = {};

	newObj.city = city;
	newObj.age = age;
	newObj.name = name;

	console.log(newObj);
}

newObj('SomeCity', 55, 'Dos');
