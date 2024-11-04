let $ = document
let title = $.querySelector('title')

let starter = $.getElementById('starter');
let ascii = $.getElementById('ascii');
let infos = $.getElementById('infos');
let key = $.getElementById('key');
let Location = $.getElementById('location');
let which = $.getElementById('which');
let code = $.getElementById('code');
let keyCode = $.getElementById('keyCode');

document.body.addEventListener('keydown', function (event) {
	event.preventDefault();

    key.innerHTML = event.key
    Location.innerHTML = event.location
    which.innerHTML = event.which
    code.innerHTML = event.code
    keyCode.innerHTML = event.key

	starter.style.display = 'none'
	ascii.style.display = 'flex'
	infos.style.display = 'flex'
    console.log(event);
})