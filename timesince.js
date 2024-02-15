function timesince(seconds) {
	//var seconds = Math.floor((new Date() - date) / 1000);
	var interval = seconds / 31536000;

	if (interval > 1)
		return (
			Math.floor(interval) +
			declension(Math.floor(interval), [' год', ' года', ' лет'])
		);
	interval = seconds / 2592000;
	if (interval > 1)
		return (
			Math.floor(interval) +
			declension(Math.floor(interval), [' месяц', ' месяца', ' месяцев'])
		);
	interval = seconds / 86400;
	if (interval > 1)
		return (
			Math.floor(interval) +
			declension(Math.floor(interval), [' день', ' дня', ' дней'])
		);
	interval = seconds / 3600;
	if (interval > 1)
		return (
			Math.floor(interval) +
			declension(Math.floor(interval), [' час', ' часа', ' часов'])
		);
	interval = seconds / 60;
	if (interval > 1)
		return (
			Math.floor(interval) +
			declension(Math.floor(interval), [' минута', ' минуты', ' минут'])
		);
	return (
		Math.floor(seconds) +
		declension(Math.floor(interval), [' секунда', ' секуунды', ' секунд'])
	);
}
