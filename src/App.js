import React, { Component } from 'react'
import Layout from './Layout'
import Counter from './Counter'
import Test2 from './test2'
import Interes from './Interes'

export default class App extends Component{
	render(){
		return(
			<Layout>
				<Counter />
				<Test2 />
				<Interes />
			</Layout>
		);
	}
}