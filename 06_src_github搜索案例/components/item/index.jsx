import React,{Component} from 'react'
import './item.css'

export default class Item extends Component{
  render(){
    const {login,avatar_url,html_url} = this.props
    return (
        <div className="card">
          <a href={html_url} >
            <img src={avatar_url} style={{width:'100px'}} alt="用户头像"/>
          </a>
        <p className="card-text">{login}</p>
        </div>
    )
  }
}