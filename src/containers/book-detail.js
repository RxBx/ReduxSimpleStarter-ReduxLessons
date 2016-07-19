import React, { Component } from 'react';

import { connect } from 'react-redux';

//special binding function
import { bindActionCreators } from 'redux';

class BookDetail extends Component {
	render() {
		//check to see if activeBook is null
		if(!this.props.book) {
			return <div>Select a book to get started.</div>
		}

		return (
			<div>
				<h3>Details for:</h3>
					<div>Title: {this.props.book.title}</div>
					<div>Pages: {this.props.book.pages}</div>
			</div>
		);

	}
}

//helper to link application state to current props
function mapStateToProps(state) {
	
	return {
		book: state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);