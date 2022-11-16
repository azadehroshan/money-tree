const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

////////scan//////////

function addNumber() {
	let element = document.getElementById("rangeValue");
	let value = element.innerHTML;
	++value;
	console.log(value);
	document.getElementById("rangeValue").innerHTML = value;
}


function rangeSlide(value) {
	document.getElementById('rangeValue').innerHTML = value;
}