function addScript(src){
	let script = document.createElement('script');
	script.src = src;
	document.head.appendChild(script);
}
addScript('buildPhoneList.js')

function loadPhones() {
	fetch('./phones.json')
		.then(response => {
			if(response.status >= 400) throw new Error(response.statusText)
			//TODO добавить обработку undefined
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