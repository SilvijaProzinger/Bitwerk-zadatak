let inputFile = document.getElementById('fileInput')
let form = document.getElementById('contactForm')
let listOfFiles = [] 
let submitButton = document.getElementById('submitButton')
let alertModal = document.getElementById('alert')

inputFile.addEventListener('change', function(event){
	listOfFiles = []

	//get list of multiple uploaded files
	for (let i = 0; i < inputFile.files.length; i++){
		listOfFiles.push(inputFile.files[i])
	}
})

form.addEventListener('submit', function(event){
	let nameValue = document.forms['form']['name'].value;
	let surnameValue = document.forms['form']['surname'].value;
	let emailValue = document.forms['form']['email'].value

	//check if any of the input fields is empty
	if (nameValue === '' || surnameValue === '' || emailValue === '' || !listOfFiles.length){
		alertModal.style.display = 'block'
		document.getElementById('main').classList.add('modal-opened')
		document.getElementById('modalText').innerHTML = 'Please fill out all required fields!'
		document.getElementById('close').addEventListener('click', function(){
			//on click close the alert modal window
			alertModal.style.display = 'none'
			document.getElementById('main').classList.remove('modal-opened')
		})
		event.preventDefault()
	} else {
		event.preventDefault()
		alertModal.style.display = 'block'
		document.getElementById('main').classList.add('modal-opened')
		document.getElementById('modalText').innerHTML = 'Thank you for your submission!'
		document.getElementById('close').addEventListener('click', function(){
			alertModal.style.display = 'none'
			document.getElementById('main').classList.remove('modal-opened')
			form.submit()
		})
		listOfFiles.forEach(function(file){
			sendFile(file)
		})
	}
})

//send the uploaded files with ajax 
sendFile = function(file){
	let formData = new FormData()
	let request = new XMLHttpRequest()

	formData.set('file', file)
	//placeholder server for testing purposes
	request.open('POST', 'https://jsonplaceholder.typicode.com/posts')
	request.send(formData)
}

 