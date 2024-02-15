function imageToBlob(imageURL) {
	const img = new Image();
	const c = document.createElement('canvas');
	const ctx = c.getContext('2d');
	img.crossOrigin = '';
	img.src = imageURL;
	return new Promise((resolve) => {
		img.onload = function () {
			c.width = this.naturalWidth;
			c.height = this.naturalHeight;
			ctx.drawImage(this, 0, 0);
			c.toBlob(
				(blob) => {
					// here the image is a blob
					resolve(blob);
				},
				'image/png',
				0.75
			);
		};
	});
}

async function copyImage(imageURL) {
	const blob = await imageToBlob(imageURL);
	const item = new ClipboardItem({ 'image/png': blob });
	navigator.clipboard.write([item]);
}
