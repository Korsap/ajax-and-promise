function loadPhones() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'phones.json', true)
	xhr.send()

	xhr.onreadystatechange = function () {
		if(xhr.readyState != 4) return
		button.innerHTML = 'Готово'

		if (xhr.status !== 200) {
			console.log('Error', xhr.status + ':' + xhr.statusText)
		} else {
			let phoneList = JSON.parse(xhr.responseText)
			let newUl = document.createElement('ul')

			newUl.id = 'list'
			document.body.children[1].appendChild(newUl)

			getLi()

			function getLi () {
				for (let item in phoneList) {
					let newLi = document.createElement('li')
					let h4 = document.createElement('h4')
					let p = document.createElement('p')
					newLi.id = phoneList[item].id
					h4.innerHTML = phoneList[item].name
					p.innerHTML = phoneList[item].snippet
					p.className = 'card-text'
					newLi.appendChild(h4)
					newLi.appendChild(p)
					newUl.appendChild(newLi)
					console.log(phoneList[item].id)
				}
			}
		}
	}

	button.innerHTML = 'Загружаю...'
	button.disabled = true

}