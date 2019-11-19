import React,{Component} from 'react'
import Add from './components/add/add'
import List from './components/list/list'

export default class App extends Component{

  state = {
    comments:[
      {id:'ud7tudjf7tje83h8g7',name:'班长',content:'我觉得很简单'},
      {id:'ab7tudjf7tje83h8g8',name:'龙哥',content:'我是没学，学了我也会'},
      {id:'cd7tudjf7tje83h8g9',name:'老师',content:'其实没那么难'},
    ]
  }

  addComment = (commentObj)=>{
    /* 
      特别注意：state中的数据：1.不能直接修改 2.不能直接更新
    */
    //1.获取原状态
    //let {comments} = this.state //不要这样获取状态中的对象类型数据，后期可能会产生一些问题
    let comments = [...this.state.comments]
    //2.追加数据
    comments.unshift(commentObj)
    //3.新数据维护到状态中
    this.setState({comments})
  }

  render(){
    let {comments} = this.state
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <Add addComment={this.addComment}/>
          <List comments={comments}/>
        </div>
      </div>
    )
  }
}