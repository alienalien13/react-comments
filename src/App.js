import React, { Component } from 'react'
import Layout from './Layout'
import Counter from './test1'

export default class App extends Component{
	render(){
		return(
			<Layout>
				<Counter />
			</Layout>
		);
	}
}