// This code snippet consists of two functions: `imageToBlob` and `copyImage`. 
// 1. The `imageToBlob` function takes an `imageURL` as a parameter, creates an image element, a canvas element, and a 2D drawing context. It sets the cross-origin attribute of the image to an empty string, assigns the image URL to the image element, and then creates a promise that resolves when the image is loaded. Once the image is loaded, it sets the canvas dimensions to match the image's natural dimensions, draws the image on the canvas, converts the canvas content to a Blob object, and resolves the promise with the resulting blob.
// 2. The `copyImage` function is an async function that takes an `imageURL` as a parameter. It awaits the result of calling `imageToBlob` with the `imageURL`, then creates a `ClipboardItem` object with the blob and a MIME type of 'image/png'. Finally, it writes the clipboard with the created `ClipboardItem` using `navigator.clipboard.write`.
// Overall, these functions work together to convert an image from a URL to a Blob object and then copy that Blob to the clipboard.
	

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
