import React, { Component } from 'react'
import Layout from './Layout'
import Counter from './Counter'
import Comments from './Comments'
import {Button} from 'react-bootstrap'

var my_comments = [
	{
		id: 1,
		author: 'Parad Nashashyn',
		comment: 'Ipsum dolor sit amet, consectetur adipisicing elit. Omnis?'
	},
	{
		id: 2,
		author: 'Apolon Markus',
		comment: 'Repellendus.'
	},
	{
		id: 3,
		author: 'Coco Pollo',
		comment: 'Income isnt the goal.'
	},
	{
		id: 4,
		author: 'CC Catch',
		comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor vero modi optio mollitia, eos magnam. Hic, eius, aut!'
	},
	{
		id: 5,
		author: 'Mamay Popau',
		comment: 'Paradox mia dell vito'
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

	handleClick(){
		var authorInp = document.getElementById('authorNameInput'),
			commentInp = document.getElementById('commentInput'),
			author = authorInp.value,
			comment = commentInp.value

		function newComment(author, comment){
			this.id = my_comments.length + 1;
			this.author = author;
			this.comment = comment;
		}

		var newComment = new newComment(author, comment)
		my_comments.push(newComment)
		
		this.setState({
			comments: my_comments
		})
		document.getElementById("authorNameInput").value="";
		document.getElementById("commentInput").value="";
	}
	
	render(){
		return(
			<Layout>
				<div className="row">
					<div className="col-md-1"></div>
					<input placeholder="Your Name" className="col-md-5" id="authorNameInput" type="text"/>
					<div className="col-md-5 addButtPar">
						<Button bsStyle="primary" onClick={this.handleClick}>Add comment</Button>
					</div>
				</div>
				<div className="row">
					<div className="col-md-1"></div>
					<textarea placeholder="Your Comment" className="col-md-10" id="commentInput"/>
				</div>
				<hr className="col-md-10" />
				<Comments data={my_comments} />
			</Layout>
		);
	}
}