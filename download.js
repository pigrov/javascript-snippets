async function toDataURL(url) {
	const blob = await fetch(url).then((res) => res.blob());
	return URL.createObjectURL(blob);
}
async function download(props) {
	const { url, name } = props;
	const a = document.createElement('a');
	a.href = await toDataURL(url);
	a.download = `${name}.jpeg`;
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
}
