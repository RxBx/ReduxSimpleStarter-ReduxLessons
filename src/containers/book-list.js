import React, { Component } from 'react';
//a glue between Redux & React
import { connect } from 'react-redux';
//bring the action fom actons/index.js
import { selectBook } from '../actions/index';
//special binding function
import { bindActionCreators } from 'redux';

//removed export default
class BookList extends Component {

	renderList() {
		return this.props.books.map((book) => {
			return (
					<li 
					key={book.title} 
					//below event calls selectBook, and returned object
					//then passes thru to reducers, due to bindActionCreators
					onClick={() => this.props.selectBook(book)}
					className="list-group-item">{book.title}</li>
				);
		});
	}


	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}
	//BELOW:
	//state is the argument
	//whatever is returned in object 
	//will show up as props on "this" inside of BookList
	//this is the link to Redux state ('state.books')
	//and the object becomes part of React component
	//thru connect immediately below
	//glue between React & Redux
function mapStateToProps(state) {
	
	return {
		books: state.books
	};
}

//anything returned from this function will end up as props
//on the BookList container
function mapDispatchToProps(dispatch) {
	//whenever selectBook is called, result should be passed
	//to all of our reducers
	//key in argument becomes this.props.selectBooks & then gets value
	//of selectBook function/action
	return bindActionCreators({ selectBook: selectBook }, dispatch )
}

// using 'react-redux' connect function to link Redux state ('state.books') 
//to React props
//IOW connects function mapStateToProps to component BookList to create
//a container
//Promote book list from a componenet to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
//as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);