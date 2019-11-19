import React,{Component} from 'react'
import Item from '../item/item.jsx.js'
import './list.css'

export default class List extends Component{

  state = {
    comments:[
      {id:'ud7tudjf7tje83h8g7',name:'班长',content:'我觉得很简单'},
      {id:'ab7tudjf7tje83h8g8',name:'龙哥',content:'我是没学，学了我也会'},
      {id:'cd7tudjf7tje83h8g9',name:'老师',content:'其实没那么难'},
    ]
  }

  componentWillReceiveProps({commentObj}){
    let comments = [...this.state.comments]
    comments.unshift(commentObj)
    this.setState({comments})
  }	

  deleteComment = (id)=>{
    let comments = [...this.state.comments]
    comments = comments.filter((item)=>{
      return item.id !== id
    })
    this.setState({comments})
  }
  
  render(){
    let {comments} = this.state
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display:comments.length === 0 ? 'block':'none'}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            comments.map((item)=>{
              return <Item key={item.id} {...item} deleteComment={this.deleteComment}/> //传递标签属性的简化写法
              //return <Item key={item.id} id={item.id} name={item.name} content={item.content}/>
            })
          }
        </ul>
      </div>
    )
  }
}