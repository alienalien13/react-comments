import React, { Component } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

export default class Comments extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			dataShow: props.data,
			sortAut: false, //authors sorting switch
			sortComm: false, //comments sorting switch
			faAut: "col-md-2", //sort marker font awesome icon. sorting by authors
			faComm: "col-md-2" //sort marker font awesome icon. sorting by comments
		};

		this.handleSortByAuthor = this.handleSortByAuthor.bind(this);
		this.handleSortByComment = this.handleSortByComment.bind(this);
		this.handleSortReset = this.handleSortReset.bind(this);
	}

	handleSortByAuthor(e){

		if(this.state.sortAut){ //sorting to reduce

			let dataSorted = this.props.data.sort(function(el1, el2){
				if (el1.author.toLowerCase() > el2.author.toLowerCase()) return -1;
				if (el1.author.toLowerCase() < el2.author.toLowerCase()) return 1;
			})
			this.setState({
				dataShow: dataSorted,
				sortAut: false,
				sortComm: false,
				faAut: "col-md-2 fa fa-angle-double-up",
				faComm: "col-md-2"
			})

		}else{ //sorting to increase

			let dataSorted = this.props.data.sort(function(el1, el2){
				if (el1.author.toLowerCase() > el2.author.toLowerCase()) return 1;
				if (el1.author.toLowerCase() < el2.author.toLowerCase()) return -1;
			})
			this.setState({
				dataShow: dataSorted,
				sortAut: true,
				sortComm: false,
				faAut: "col-md-2 fa fa-angle-double-down",
				faComm: "col-md-2"
			})

		}
	}

	handleSortByComment(e){ //sorting to reduce

		if(this.state.sortComm){

			let dataSorted = this.props.data.sort(function(el1, el2){
				if (el1.comment.toLowerCase() > el2.comment.toLowerCase()) return -1;
				if (el1.comment.toLowerCase() < el2.comment.toLowerCase()) return 1;
			})
			this.setState({
				dataShow: dataSorted,
				sortAut: false,
				sortComm: false,
				faAut: "col-md-2",
				faComm: "col-md-2 fa fa-angle-double-up"
			})

		}else{ //sorting to increase

			let dataSorted = this.props.data.sort(function(el1, el2){
				if (el1.comment.toLowerCase() > el2.comment.toLowerCase()) return 1;
				if (el1.comment.toLowerCase() < el2.comment.toLowerCase()) return -1;
			})
			this.setState({
				dataShow: dataSorted,
				sortAut: false,
				sortComm: true,
				faAut: "col-md-2",
				faComm: "col-md-2 fa fa-angle-double-down"
			})

		}

	}

	handleSortReset(e){
		let dataSorted = this.props.data.sort(function(el1, el2){
			if (el1.id > el2.id) return 1;
			if (el1.id < el2.id) return -1;
		})
		this.setState({
			dataShow: dataSorted,
			sortAut: false,
			sortComm: false,
			faAut: "col-md-2",
			faComm: "col-md-2"
		})
	}

	render(){
		
		var newsTemplate = this.state.dataShow.map(function (item, index) {
			return (
				<div className="row comment-row" key={item.id}>
					<div className="col-md-10 offset-md-1 comment-wrap">

						<div className="row">
							<div className="col-md-5 author">{item.author}:</div>
							<div className="col-md-3 offset-md-4">Comment #{item.id}</div>
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

				<ButtonGroup className="col col-md-10 offset-md-1 align-self-center">

					<Button className="col-md-5" id="sortByAuthorButton" bsStyle="primary" onClick={this.handleSortByAuthor}>
						<div className="row">
							<div className={this.state.faAut}></div>
							<div className="col-md-10">Sort by Author</div>
						</div>
					</Button>

					<Button className="col-md-2" bsStyle="primary" onClick={this.handleSortReset}>Reset</Button>

					<Button className="col-md-5" id="sortbyCommentButton" bsStyle="primary" onClick={this.handleSortByComment}>
						<div className="row">
							<div className="col-md-10">Sort by Comment</div>
							<div className={this.state.faComm}></div>
						</div>
					</Button>

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