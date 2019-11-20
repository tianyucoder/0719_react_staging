import React,{Component} from 'react'
import PubSub from 'pubsub-js'
import Item from '../item/item'

export default class List extends Component{
  state = {
    users:[],
    isFirst:true,
    isLoading:false,
    error:''
  }

  componentDidMount(){
    //完成消息的订阅
    PubSub.subscribe('atguigu',(msg,data)=>{
      this.setState(data)
    })
  }

  render(){
    const {users,isFirst,isLoading,error} = this.state
    if(isFirst){
        return <h2>输入关键字以搜索</h2>
    }else if(isLoading){
        return <h2>loading.....</h2>
    }else if(error){
        return <h2>{error}</h2>
    }else{
      return (
        <div className="row">
          {
            users.map((item)=>{
              return <Item key={item.login} {...item}/>
            })
          }
        </div>
      )
    }
  }
}