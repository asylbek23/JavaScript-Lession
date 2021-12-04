
// 1) Функция екі сан қабылдайды егер қосындысы немесе көбитіндісі 100 ден жоғары болса консольга мәнін шығарады
function one(a, b) {
	if (a + b > 100 || a * b > 100) {
	}

	console.log(result);
}

console.log(one());

// 2) Фунция бір сан кабылдайды сосын ол саннын квадратын кайтарады (return)
function two(a) {
	// return a ** 2;
	return Math.pow(a, 2);
}

console.log(two(7));

// 3) Функция он рет Мен Javascript уйренем деп косольға шығарады
function three() {
	for (let i = 0; i < 10; i++) {
		console.log('Javascript');
	}
}

console.log(three());

// 4) Фунция бір сан қабылдайды берілген сан қанша болса сонша рет консольга Салем деген жазуды шыгарады
function four(a) {
	for (let i = 0; i < a; i++) {
		console.log('Salem');
	}
}

console.log(four(5));


// 5) Фунция екі сан қабылдайды егер екінші сан 500 ден кіші болса бірінші санның квадратын кайтарады. Ал егер 500 ден үлкен болса сол саннын өзін қайтарады
function five(a, b) {
	if (b < 500) {
		return a ** 2;
	} else {
		return b;
	}
}

console.log(five(6,550));

