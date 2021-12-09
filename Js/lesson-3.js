
// 1) Вывести в консоль элементы массива начиная с 5 элемента var arr = [1000, 99, 34, 4, 43, 23];
function printFromFive() {
	var arr = [1000, 99, 34, 4, 43, 23];
	let out = '';

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 5) {
			console.log(arr[i]);
			// out += arr[i];
		}
	}
}

console.log(printFromFive());


// 2) Функция принимает объект {name:"Dos", fullname:"Yesov"} и выводить в консоль "Dos Yesev";
function printFullName(a) {

}


// 3) Вывести в консоль элементы массива если элемент больше 34 var arr = [1000, 99, 34, 4, 43, 23];
function printBiggerThirtyFour() {
	var arr = [1000, 99, 34, 4, 43, 23];

}

console.log(printBiggerThirtyFour());