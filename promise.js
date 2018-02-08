function addScript(src){
	let script = document.createElement('script');
	script.src = src;
	document.head.appendChild(script);
}
addScript('buildPhoneList.js')

function loadPhones () {
	httpGet('./phones.json')
		.then(
			response => {
				let phoneList = JSON.parse(response)
				buildPhoneList(phoneList)
				button.parentNode.removeChild(button)
			}/*,

			error => {
				console.log(error)
			}*/
		)
		.catch(error => {
			console.log(error)
		})
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