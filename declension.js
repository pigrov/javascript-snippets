function declension(number, txt) {
	const cases = [2, 0, 1, 1, 1, 2];
	return txt[
		number % 100 > 4 && number % 100 < 20
			? 2
			: cases[number % 10 < 5 ? number % 10 : 5]
	];
}
// Ниже примеры вызова в функции:

// let apple = 1;
// let pieces = 3;
// let ruble = 10;

// let a = declension(apple, ['яблоко', 'яблока', 'яблок']);
// let b = 'Мне нужно ' + pieces + ' ' + getDeclension(pieces, ['штука', 'штуки', 'штук']);
// let c = `Мы потратили ${ruble} ${getDeclension(ruble, ['рубль', 'рубля', 'рублей'])}`;
