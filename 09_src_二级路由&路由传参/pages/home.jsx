import React,{Component} from 'react'
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
import HomeMessage from './home_message'
import HomeNews from './home_news'

export default class Home extends Component{
  render(){
    return (
        <div>
          <h2>Home组件内容</h2>
              <div>
                <ul className="nav nav-tabs">
                  <li>
                    <NavLink className="list-group-item" activeClassName="demo" to="/home/news">News</NavLink>
                  </li>
                  <li>
                    <NavLink className="list-group-item" activeClassName="demo" to="/home/message">Message</NavLink>
                  </li>
                </ul>
                <Switch>
                  <Route path="/home/news" component={HomeNews}/>
                  <Route path="/home/message" component={HomeMessage}/>
                  <Redirect to="/home/news"/>
                </Switch>
              </div>
          </div>
    )
  }
}