let $ = document
let locationKey = $.querySelector('#location')
let keyCode = $.querySelector('#keyCode')
let key = $.querySelector('#key')
let which = $.querySelector('#which')
let code = $.querySelector('#code')
let title = $.querySelector('title')

document.body.addEventListener('keydown', function (event) {
	event.preventDefault()
	starter.style.display = 'none'
	heading.style.display = 'flex'
	ascii.style.display = 'flex'
	infos.style.display = 'flex'
	
	key.innerHTML = event.key
	locationKey.innerHTML = event.location
	which.innerHTML = event.which
	code.innerHTML = event.code
	keyCode.innerHTML = event.keyCode

})


