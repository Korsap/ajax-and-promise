function loadPhones() {

	return new Promise(function (resolve, reject) {
		let xhr = new XMLHttpRequest();

		xhr.open('GET', 'phones.json', true);

		xhr.onload = function() {
			button.innerHTML = 'Готово!';
			console.log("Loading complete");

			if (xhr.status != 200) {
				// обработать ошибку
				let error = new Error(this.statusText);
				error.code = this.status;
				reject(error);
			} else {
				resolve(this.responseText);
			}
		};

		xhr.onerror = function() {
			reject(new Error("Network Error"));
		};

		xhr.send();

		button.innerHTML = 'Загружаю...';
		button.disabled = true;
	});

}

button.onclick = loadPhones()
	.then(
		response => {
			try {
				var phones = JSON.parse(response);
			} catch (err) {
				alert('Ошибка ' + err.name + ': ' + err.message);
			}
			// вывести результат
			showPhones(phones);
		},
		error => alert(`${error}`)
	);

		//alert(xhr.status + ': ' + xhr.statusText);

 function showPhones(phones) {
 	phones.forEach( (phone) => {
 		try {
 			if (!phone.name) {
 				throw new SyntaxError("Данные не корректны");
 			}

 			let li = list.appendChild(document.createElement('li'));
 			li.innerHTML = phone.name;
 			} catch (err) {
 				alert("Извините, в данных ошибка");
 			}

 	});
 }

