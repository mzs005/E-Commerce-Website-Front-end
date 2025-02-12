const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');
const close = document.getElementById('close');

// check condition
if (hamburger) {
	hamburger.addEventListener('click', function() {
		navbar.classList.add('active')
	});
}

if (close) {
	 close.addEventListener('click', function(){
	 	navbar.classList.remove('active');
	 })
}