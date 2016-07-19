// reducers always take current state & action as arguments
//state arg is not application state, only the state THIS reducer
//is responsible for
//ES6 allous us to set original state to null on start
export default function(state = null, action) {
	switch(action.type) {
		case 'BOOK_SELECTED':
			return action.payload;
	}

	return state;
}