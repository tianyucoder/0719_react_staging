import React,{Component} from 'react'

export default class Button extends Component{

  render(){
    console.log(this);
    //let {children} = this.props
    return (
      <button style={{backgroundColor:'gray',color:'orange',width:'80px',height:'80px'}} {...this.props}></button>
    )
  }
}