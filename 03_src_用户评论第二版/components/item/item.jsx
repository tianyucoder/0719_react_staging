import React,{Component} from 'react'
import './item.css'

export default class Item extends Component{
  
  delete = (id)=>{
    //在状态中删除该条评论---获取该条评论的id
    const {deleteComment} = this.props
    if(window.confirm('确定删除吗？')){
      deleteComment(id)
    }
  }

  render(){
    let {id,name,content} = this.props
    return (
        <li className="list-group-item">
          <div className="handle">
            <a href="#1" onClick={()=>{this.delete(id)}}>删除</a>
          </div>
          <p className="user"><span >{name}</span><span>说:</span></p>
          <p className="centence">{content}</p>
        </li>
    )
  }
}