import React,{Component} from 'react'
import {Button,message} from 'antd'
import '../node_modules/antd/dist/antd.css'

export default class App extends Component{

  demo = ()=>{
    message.error('你点我了')
  }

  render(){
    return (
      <div>
        <h2>hello</h2>
        <Button type="primary" onClick={this.demo}>点我</Button>
      </div>
    )
  }
}