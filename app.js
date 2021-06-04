const emailInput = document.querySelector('[name="email-input"]');
const btn = document.querySelector('.cta');
const inputS = document.querySelector('.input-span');

function ValidateEmail() {
	const val =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (!val.test(emailInput.value)) {
		inputS.innerText = 'Please enter a valid email address';
	}
}
emailInput.addEventListener('input', ValidateEmail);
