let inputFile = document.getElementById('fileInput')
let form = document.getElementById('contactForm')
let listOfFiles = [] 
let submitButton = document.getElementById('submitButton')

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
	if (nameValue === '' || surnameValue === '' || emailValue === ''){
		alert('Please fill all required fields!')
	} else {
		//event.preventDefault()
		listOfFiles.forEach(function(file){
			sendFile(file)
		})
		alert('Thank you for your submission!')
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

 