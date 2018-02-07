function loadPhones() {
	fetch('./phones.json')
		.then(function (response) {
			button.parentNode.removeChild(button)
			return response.json()
		})
		.then(function(phones) {
			getPhoneList(phones)
		})
		.catch(console.log)

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