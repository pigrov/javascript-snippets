function focusend(element) {
	setTimeout(() => {
		element.focus();
		window.getSelection().selectAllChildren(element);
		window.getSelection().collapseToEnd();
	}, 0);
}
