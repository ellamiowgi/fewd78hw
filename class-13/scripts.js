(function() {

	var listItems = document.getElementsByTagName('li');

	onListItemClick = function(e) {
		alert("My beautiful ella is " + e.currentTarget.innerHTML);
	}

	for (var i = 0; i < listItems.length; i++) {
		listItems[i].addEventListener('click', onListItemClick);
	}
})()