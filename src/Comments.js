import React, { Component } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

export default class Comments extends Component{
	
	constructor(props){
		super(props);
		this.state = {dataShow: props.data};

		this.handleSortByAuthor = this.handleSortByAuthor.bind(this);
		this.handleSortByComment = this.handleSortByComment.bind(this);
		this.handleSortReset = this.handleSortReset.bind(this);
	}

	handleSortByAuthor(e){
		var dataSorted = this.props.data.sort(function(el1, el2){
			if (el1.author.toLowerCase() > el2.author.toLowerCase()) return 1;
			if (el1.author.toLowerCase() < el2.author.toLowerCase()) return -1;
		})
		this.setState({
			dataShow: dataSorted
		})
	}

	handleSortByComment(e){
		var dataSorted = this.props.data.sort(function(el1, el2){
			if (el1.comment.toLowerCase() > el2.comment.toLowerCase()) return 1;
			if (el1.comment.toLowerCase() < el2.comment.toLowerCase()) return -1;
		})
		this.setState({
			dataShow: dataSorted
		})
	}

	handleSortReset(e){
		var dataSorted = this.props.data.sort(function(el1, el2){
			if (el1.id > el2.id) return 1;
			if (el1.id < el2.id) return -1;
		})
		this.setState({
			dataShow: dataSorted
		})
	}

	render(){
		
		var newsTemplate = this.state.dataShow.map(function (item, index) {
			return (
				<div className="row comment-row" key={item.id}>
					<div className="col-md-1"></div>
					<div className="col-md-10 comment-wrap">
						<div className="row">
							<div className="col-md-5 author">{item.author}:</div>
							<div className="col-md-4"></div>
							<div className="col-md-3">Comment #{item.id}</div>
						</div>
						<hr className="hrcom"/>
						<div className="row">
							<div className="col-md-12 comment">{item.comment}</div>
						</div>
					</div>
				</div>
			)
		})
		return <section>
			<div className="row">

					<ButtonGroup>
							<Button bsStyle="primary" onClick={this.handleSortByAuthor}>Sort by Author</Button>
							<Button bsStyle="primary" onClick={this.handleSortReset}>Reset</Button>
							<Button bsStyle="primary" onClick={this.handleSortByComment}>Sort by Comment</Button>
					</ButtonGroup>

			</div>
			<div className="row">
				<div className="col-md-12">
					{newsTemplate}
				</div>
			</div>
		</section>
	}
}