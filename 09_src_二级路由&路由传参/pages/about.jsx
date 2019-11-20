import React,{Component} from 'react'

export default class About extends Component{

  componentWillUnmount(){
    console.log('About------componentWillUnmount');
  }

  componentDidMount(){
    console.log('路由组件About的实例：',this);
  }

  render(){
    return (
      <h3>我是About的内容</h3>
    )
  }
}