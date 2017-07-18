import React, { Component } from 'react'
import Layout from './Layout'
import Counter from './Counter'
import Comments from './Comments'

const my_news = [
	{
		id: 1,
		author: 'B',
		text: '3 em ipsum dolor sit amet, consectetur adipisicing elit. Omnis?'
	},
	{
		id: 2,
		author: 'A',
		text: 'a 2 Repellendus.'
	},
	{
		id: 3,
		author: 'C',
		text: '122 dfdf'
	},
	{
		id: 4,
		author: 'Ccc',
		text: '1 dfdf'
	},
	{
		id: 5,
		author: 'Mamay Popau',
		text: 'Paradox mm da'
	}
]

export default class App extends Component{
	render(){
		return(
			<Layout>
				<Comments data={my_news} />
			</Layout>
		);
	}
}