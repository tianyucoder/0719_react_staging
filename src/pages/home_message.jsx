import React,{Component} from 'react'

export default class HomeMessage extends Component{

  state = {
    messageArr:[]
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        messageArr:[
          {id:'g12hjg32jh34',title:'messages1'},
          {id:'g12hjg32jh35',title:'messages2'},
          {id:'g12hjg32jh36',title:'messages3'},
          {id:'g12hjg32jh37',title:'messages4'},
          {id:'g12hjg32jh38',title:'messages5'},
        ]
      })
    },1000)
  }

  render(){
    let {messageArr} = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map((item)=>{
              return (
                <li>
                  <a href="/home/message/1">{item.title}</a>&nbsp;&nbsp;
                </li>
              )
            })
          }
        </ul>
        <button>回退</button>
        <hr/>
      </div>
    )
  }
}