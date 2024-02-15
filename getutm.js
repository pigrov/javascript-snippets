function getutm(url) {
	var urlParams = {};
	var queryString = url.split('?')[1];

	if (queryString) {
		var params = queryString.split('&');

		for (var i = 0; i < params.length; i++) {
			var pair = params[i].split('=');
			var key = decodeURIComponent(pair[0]);
			var value = decodeURIComponent(pair[1].replace(`#!`, ``));

			if (key.indexOf('utm_') === 0) {
				urlParams[key] = value;
			}
		}
	}

	return urlParams;
}
