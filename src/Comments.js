import React, { Component } from 'react'

export default class Comments extends Component{
	
	constructor(props){
		super(props);
		this.state = {dataShow: props.data};

		this.handleSortByAuthor = this.handleSortByAuthor.bind(this);
		this.handleSortByText = this.handleSortByText.bind(this);
	}

	handleSortByAuthor(e){
		var lolo = this.props.data.sort(function(el1, el2){
			if (el1.author.toLowerCase() > el2.author.toLowerCase()) return 1;
			if (el1.author.toLowerCase() < el2.author.toLowerCase()) return -1;
		})
		this.setState({
			dataShow: lolo
		})
	}

	handleSortByText(e){
		var lolo = this.props.data.sort(function(el1, el2){
			if (el1.text.toLowerCase() > el2.text.toLowerCase()) return 1;
			if (el1.text.toLowerCase() < el2.text.toLowerCase()) return -1;
		})
		this.setState({
			dataShow: lolo
		})
	}

	render(){
		//var data = this.props.data;
		var newsTemplate = this.state.dataShow.map(function (item, index) {
			return (
				<div className="wrap" key={index}>
					<div className="news_author">{item.author}:</div>
					<p className="news_text">{item.text}</p>
				</div>
			)
		})
		return <div className="news">
			<input type="button" value="Sort by Author" onClick={this.handleSortByAuthor}/>
			<input type="button" value="Sort by Text" onClick={this.handleSortByText}/>
			{newsTemplate}
		</div>
	}
}