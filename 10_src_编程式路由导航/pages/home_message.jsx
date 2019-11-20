import React,{Component} from 'react'
import {Link,Route} from 'react-router-dom'
import HomeMessageDetail from './home_message_detail'

export default class HomeMessage extends Component{

  state = {
    messageArr:[]
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        messageArr:[
          {id:1,title:'messages1'},
          {id:2,title:'messages2'},
          {id:3,title:'messages3'},
          {id:4,title:'messages4'},
          {id:5,title:'messages5'},
        ]
      })
    },1000)
  }

  pushShow = (id)=>{
    //向浏览器的历史记录中push一个路径
    this.props.history.push(`/home/message/detail/${id}`)
  }

  replaceShow = (id)=>{
    this.props.history.replace(`/home/message/detail/${id}`)
  }

  back = ()=>{
    this.props.history.goBack()
  }

  go = ()=>{
    this.props.history.goForward()
  }


  render(){
    let {messageArr} = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map((item)=>{
              return (
                <li key={item.id}>
                  <Link to={`/home/message/detail/${item.id}`}>{item.title}</Link>&nbsp;&nbsp;
                  <button onClick={()=>{this.pushShow(item.id)}}>push查看详情</button>&nbsp;
                  <button onClick={()=>{this.replaceShow(item.id)}}>replace查看详情</button>
                </li>
              )
            })
          }
        </ul>
        <button onClick={this.back}>返回</button>
        <button onClick={this.go}>前进</button>
        <hr/>
          <Route path="/home/message/detail/:id" component={HomeMessageDetail}/>
      </div>
    )
  }
}