function addScript(src){
	let script = document.createElement('script');
	script.src = src;
	document.head.appendChild(script);
}
addScript('buildPhoneList.js')

function loadPhones() {
	fetch('./phones.json')
		.then(function (response) {
			button.parentNode.removeChild(button)
			return response.json()
		})
		.then(function(phones) {
			buildPhoneList(phones)
		})
		.catch(console.log)

	button.innerHTML = 'Загружаю...'
	button.disabled = true
}