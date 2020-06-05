let inputFile = document.getElementById('fileInput')
let form = document.getElementById('contactForm')
let listOfFiles = [] 

inputFile.addEventListener('change', function(event){
	listOfFiles = []

	//get list of multiple uploaded files
	for (let i = 0; i < inputFile.files.length; i++){
		listOfFiles.push(inputFile.files[i])
	}
})

form.addEventListener('submit', function(event){
	//event.preventDefault()
	listOfFiles.forEach(function(file){
		sendFile(file)
	})
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