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

			getPhoneList (phoneList);
		}
	}

	button.innerHTML = 'Загружаю...'
	button.disabled = true

}

function getPhoneList (phones) {
	let newUl = document.createElement('ul')

	newUl.id = 'list'
	document.body.children[1].appendChild(newUl)

	for (let item in phones) {
		let newLi = document.createElement('li')
		let h4 = document.createElement('h4')
		let p = document.createElement('p')
		newLi.id = phones[item].id
		h4.innerHTML = phones[item].name
		p.innerHTML = phones[item].snippet
		p.className = 'card-text'
		newLi.appendChild(h4)
		newLi.appendChild(p)
		newUl.appendChild(newLi)
		console.log(phones[item].id)
	}
}