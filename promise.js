function loadPhones () {
	httpGet('./phones.json')
		.then(
			response => {
				let phoneList = JSON.parse(response)
				getPhoneList(phoneList)
				button.parentNode.removeChild(button)
			},

			error => {
				console.log(error)
			}
		)
	button.innerHTML = 'Загружаю...'
	button.disabled = true
}

function httpGet(url) {
	return new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', url, true)

		xhr.onload = function() {
			if (this.status === 200) {
				resolve(this.response);
			} else {
				let error = new Error(this.statusText)
				error.code = this.status
				reject(error)
			}
		}

		xhr.onerror = function() {
			reject(new Error("Network Error"))
		}
		xhr.send()
	})
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
