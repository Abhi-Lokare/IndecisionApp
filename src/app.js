import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
//Render React Output

ReactDOM.render(<IndecisionApp options={['Javascript', 'React']} /*setting some default options*/ />, document.querySelector('.root'))
