//export allows a function to be called across JS sheets?

export function selectBook(book) {
	//console.log('A book has been selected:', book.title);
	//selectBook is an ActionCreator, and it needs to return an action,
	// an object with a type property
	//usu needs a type & payload
	return {
		type: 'BOOK_SELECTED', //sometimes types are on seperate file
		payload: book
	};
}