import React,{Component} from 'react'
import List from './components/list'
import Search from './components/searchs'

export default class App extends Component{

  state = {
    users:[],
    isFirst:true,
    isLoading:false,
    error:''
  }

  updateAppState = (obj)=>{
    /* 
    传递过来的obj必须是如下格式： 
    {
      users:[],
      isFirst:true,
      isLoading:false,
      error:''
    } */
    this.setState(obj)
  }

  render(){
    return (
        <div className="container">
          <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            <Search updateAppState={this.updateAppState}/>
          </section>
          <List {...this.state}/>
        </div>
    )
  }
}