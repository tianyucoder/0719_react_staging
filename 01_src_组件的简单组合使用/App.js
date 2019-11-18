import React,{Component} from 'react'
import Hello from './components/hello/hello.jsx'
import Peiqi from './components/peiqi/peiqi.jsx'

export default class App extends Component{
  render(){
    return (
      <div>
        <h1>App</h1>
        <Hello/>
        <Peiqi/>
      </div>
    )
  }
}