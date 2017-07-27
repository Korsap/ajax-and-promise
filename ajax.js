function loadPhones() {

	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'phones.json', true);

	xhr.onload = function() {
		button.innerHTML = 'Готово!';
		console.log("Loading complete");

		if (xhr.status != 200) {
			// обработать ошибку
			alert(xhr.status + ': ' + xhr.statusText);
		} else {
			try {
				var phones = JSON.parse(xhr.responseText);
			} catch (err) {
				alert('Ошибка ' + err.name + ': ' + err.message);
			}
			// вывести результат
			showPhones(phones);
		}
	};

	xhr.onerror = function () {
		alert("Данные не загружены");
	};

	xhr.send();

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

	button.innerHTML = 'Загружаю...';
	button.disabled = true;
}
