import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM  from 'react-dom'
import App from './App'
import './style.css'

const render = (Component) => {
  ReactDOM.render(
	<AppContainer>
      <Component />
    </AppContainer>,
	document.getElementById('root')
  )
}

render(App);

if (module.hot) { //hot reloading
  module.hot.accept('./App', () => { render(App) })
}