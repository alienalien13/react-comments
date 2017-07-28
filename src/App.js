import React, { Component } from 'react'
import Layout from './Layout'
import Comments from './Comments'
import {Button} from 'react-bootstrap'

var my_comments = [
	{
		id: 1,
		author: 'Parad Nashashyn',
		comment: 'Excepturi unde dolorum numquam sit, saepe facere pariatur. Ipsum dolor sit amet, consectetur adipisicing elit. Omnis?'
	},
	{
		id: 2,
		author: 'Apolon Markus',
		comment: 'Error similique soluta sint neque perferendis provident illo culpa, ab veritatis nostrum? Dolor vero modi optio mollitia, eos magnam. Hic, eius, aut!'
	},
	{
		id: 3,
		author: 'Mamay Popau',
		comment: 'Laboriosam quisquam quibusdam suscipit rem fugit soluta doloremque similique iure, voluptate, atque sit tempore reiciendis? Ea ducimus, dolore veritatis.'
	}
]

export default class App extends Component{

	constructor(props){
		super(props);
		this.state = {
			comments: my_comments
		}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(){ //adding comment method
		var authorInp = document.getElementById('authorNameInput'),
			commentInp = document.getElementById('commentInput'),
			author = authorInp.value,
			comment = commentInp.value

		if (author && comment){ //if values are not empty change state
			function newComment(author, comment){ //constructor function for design new comment
				this.id = my_comments.length + 1;
				this.author = author;
				this.comment = comment;
			}

			var newComment = new newComment(author, comment) //new comment
			my_comments.push(newComment) //add new comment to comments array my_comments
			
			this.setState({
				comments: my_comments
			})
			
			//reset inputs
			document.getElementById("authorNameInput").value="";
			document.getElementById("commentInput").value="";
		}

		
	}
	
	render(){
		return(
			<Layout>

				<div className="row">
					<textarea placeholder="Your Comment" className="col-md-10 offset-md-1" id="commentInput"/>
				</div>

				<div className="row">
					<input placeholder="Your Name" className="col-md-5 offset-md-1" id="authorNameInput" type="text"/>
					<div className="col-md-5 addButtPar">
						<Button bsStyle="primary" onClick={this.handleClick}>Add comment</Button>
					</div>
				</div>

				<hr className="col-md-10" />

				<Comments data={my_comments}/>
				
			</Layout>
		);
	}
}