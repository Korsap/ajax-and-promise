function addScript(src){
	let script = document.createElement('script');
	script.src = src;
	document.head.appendChild(script);
}
addScript('buildPhoneList.js')

function loadPhones() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'phones.json', true)
	xhr.send()

	xhr.onreadystatechange = function () {
		if(xhr.readyState != 4) return

		button.parentNode.removeChild(button)

		if (xhr.status !== 200) {
			console.log('Error', xhr.status + ':' + xhr.statusText)
		} else {
			let phoneList;
			try {
				phoneList = JSON.parse(xhr.responseText)
			} catch (error) {
				alert('Некорректный ответ' + error.message)
			}

			buildPhoneList (phoneList);
		}
	}

	button.innerHTML = 'Загружаю...'
	button.disabled = true

}
