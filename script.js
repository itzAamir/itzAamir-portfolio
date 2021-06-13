let theme = localStorage.getItem('theme')

if (theme == null) {
	setTheme('light')
} else {
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i = 0; themeDots.length > i; i++) {
	themeDots[i].addEventListener('click', function () {
		let mode = this.dataset.mode
		setTheme(mode)
	})
}

function setTheme(mode) {
	if (mode == 'light') {
		document.getElementById('theme-style').href = 'css/default.css'
	}

	else if (mode == 'blue') {
		document.getElementById('theme-style').href = 'css/blue.css'
	}

	else if (mode == 'green') {
		document.getElementById('theme-style').href = 'css/green.css'
	}

	else if (mode == 'purple') {
		document.getElementById('theme-style').href = 'css/purple.css'
	}

	localStorage.setItem('theme', mode)
}

document.querySelector("form").addEventListener("submit", handleSubmit)

function handleSubmit(event) {
	const url = "https://formspree.io/f/xjvjrwwa";
	const data = new FormData(event.target);
	fetch(event.target.action, {
		method: "post",
		body: data,
		headers: {
			'Accept': 'application/json'
		}
	}).then((res) => res.json())
		.then(data => console.log(data))
		.catch(err => alert(err));
}