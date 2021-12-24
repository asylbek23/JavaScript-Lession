
// 1) При клике на p добавить класс text-clicked{text-decoration:line-through;}
const text = document.querySelector('.text');

text.addEventListener('click', () => {
	text.classList.add('text-clicked');
});


// 2) Выбрать все nav__item вывести результат в консоль
const navItem = document.querySelectorAll('.nav__item');

navItem.forEach(item => {
	console.log(item.textContent);
});

// 3) добавить класс nav__item--active{color:red} для всех элементов nav__item(из 2);
navItem.forEach(item => {
	item.classList.add('nav__item--active');
});

// 4) Функция принмает имя класса и находить все элементы и ВОЗВРАЩАЕТ все найденные элементы например findElemnts(".nav__item") // [.....]
function findElemnts(elem) {
	let allElements = document.querySelectorAll(elem);

	allElements.forEach(item => {
		return item;
	});

	return allElements;
}

findElemnts('.nav__item');

// 5) Удалить у всех a class link__item
const links = document.querySelectorAll('.link__item');

links.forEach(item => {
	item.classList.remove('link__item');
});

// 6) Сделать счетчик при клике на кнопки увеличивать или уменишить содержимое тега p
function counterBtn() {
}

let output = document.querySelector('.count');

const increment = document.querySelector('.btn-increment');
const decrement = document.querySelector('.btn-decrement');

let count = 0;

increment.addEventListener('click', () => {
	count++;
	output.innerHTML = count;
});

decrement.addEventListener('click', () => {
	count--;
	output.innerHTML = count;
});