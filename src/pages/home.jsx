import React,{Component} from 'react'

export default class Home extends Component{
  render(){
    return (
        <div>
          <h2>Home组件内容</h2>
              <div>
                <ul className="nav nav-tabs">
                  <li>
                    <a className="list-group-item" href="./home-news.html">News</a>
                  </li>
                  <li>
                    <a className="list-group-item active" href="./home-message.html">Message</a>
                  </li>
                </ul>
                <div>
                  <ul>
                    <li>
                      <a href="/home/message/1">message001</a>&nbsp;&nbsp;
                      <button>push查看</button>&nbsp;&nbsp;
                      <button>replace查看</button>
                    </li>
                    <li>
                      <a href="/home/message/3">message003</a>&nbsp;&nbsp;
                      <button>push查看</button>&nbsp;&nbsp;
                      <button>replace查看</button>
                    </li>
                    <li>
                      <a href="/home/message/5">message005</a>&nbsp;&nbsp;
                      <button>push查看</button>&nbsp;&nbsp;
                      <button>replace查看</button>
                    </li>
                  </ul>
                  <button>回退</button>
                  <hr/>
                </div>
              </div>
          </div>
    )
  }
}