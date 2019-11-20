import React,{Component} from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component{

  myRef = React.createRef()

  search = ()=>{
    //const {updateAppState} = this.props //用于更新App的状态，从而触发List组件重新渲染
    //1.获取用户输入
    let keyWord = this.myRef.current.value
    //2.校验数据  
    if(keyWord.trim() === '') return
    //3.发请求
    const URL = `https://api.github.com/search/users?q=${keyWord}`
    //请求之前更新数据，为了展示loading。
    PubSub.publish('atguigu',{
      users:[],
      isFirst:false,
      isLoading:true,
      error:''
    })
    axios.get(URL)
      .then((value)=>{
        //若成功，更新数据
        PubSub.publish('atguigu',{
          users:value.data.items,
          isFirst:false,
          isLoading:false,
          error:''
        })
      })
      .catch((error)=>{
        //若失败，更新数据
        PubSub.publish('atguigu',{
          users:[],
          isFirst:false,
          isLoading:false,
          error:error.message
        })
      })
    //4.清空输入
    this.myRef.current.value = ''
  }
  render(){
    return (
        <div>
          <input type="text" placeholder="输入关键字" ref={this.myRef}/>&nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
    )
  }
}