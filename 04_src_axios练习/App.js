import React,{Component} from 'react'
import axios from 'axios'


export default class App extends Component{

  state = {
    repoName:'', //仓库的名字
    respoUrl:'',//仓库的地址
    isLoading:true, //控制是否展示Loading....
    keyWord:'v',//搜索的关键词
    error:''//错误
  }

  componentDidMount(){
    const URL = `https://api.githubb.com/search/repositories?q=${this.state.keyWord}&sort=stars`
    //使用axios发送ajax请求
    axios.get(URL)
      .then((value)=>{
        console.log(value);
        let {name,html_url} = value.data.items[0]
        this.setState({
          repoName:name,
          respoUrl:html_url,
          isLoading:false
        })
      })
      .catch((reason)=>{
        this.setState({
          isLoading:false,
          error:reason.message
        })
      })

  }

  render(){
    const {repoName,respoUrl,isLoading,error,keyWord} = this.state
    if(isLoading){
        return <h2>Loading......</h2>
    }else if(repoName && respoUrl && !error){
      return  <h2>在github上以【{keyWord}】字母开头的仓库中，点赞最多的是<a href={respoUrl}>{repoName}</a></h2>
    }else{
      return <h2 style={{color:'red'}}>{error}</h2>
    }
  }
}