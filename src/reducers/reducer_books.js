//export default allows this reducer to be called by any other js file
//this is a data object function - it returns a json-like object

export default function() {
	return [
		{ title: 'Javascript: The Good Parts', pages: 101},
		{ title: 'Harry Potter', pages: 39},
		{ title: 'The Dark Tower', pages: 85},
		{ title: 'Eloquent Ruby', pages: 1}
	]
}