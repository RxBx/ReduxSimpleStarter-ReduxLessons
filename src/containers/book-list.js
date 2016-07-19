import React, { Component } from 'react';
//a glue between Redux & React
import { connect } from 'react-redux';

//removed export default
class BookList extends Component {

	renderList() {
		return this.props.books.map((book) => {
			return (
					<li key={book.title} className="list-group-item">{book.title}</li>
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
// using 'react-redux' connect function to link Redux state ('state.books') 
//to React props
//IOW connects function mapStateToProps to component BookList to create
//a container
export default connect(mapStateToProps)(BookList);