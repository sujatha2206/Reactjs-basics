import React, { Component } from 'react';

import {Link, NavLink, Route, Switch,Redirect} from "react-router-dom";
import Posts from './Posts/Posts';
import './Blog.css';
import asyncComponent from '../../hoc/asyncComponent';
const AsyncNewPost= asyncComponent(()=>{
    return import('./NewPost/NewPost')
})



class Blog extends Component {
  

  state={
      auth:true
  }
    

    render () {
       

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" exact>Posts</NavLink></li>
                            <li><NavLink 
                             activeClassName="active"
                             activeStyle={{
                                 color:'#fa923f',
                                 textDecoration:'underline'
                             }}
                                to={{
                                pathname:'/new-post',
                                hash:"#submit",
                                search:"?quick-submit=true"
                                }}>New Posts</NavLink></li>
                        </ul>
                    </nav>
                </header>
              
            {/* <Route path="/"  exact render={()=><h1>Home</h1>} />
            <Route path="/new-posts" render={()=><h1>Home2</h1>}/> */}
              <Switch>
           
          
          {this.state.auth ? <Route path="/new-post" component={AsyncNewPost}/> :null}  
            <Route path="/posts"  component={Posts}/>
            <Route render={()=><h1>Not found</h1>}/>
            {/* <Redirect from="/" to="/posts"/> */}
            {/* <Route path="/"  component={Posts}/> */}
           
            </Switch>
            {/* <Redirect to="/posts"/> in swicthc add from */}
            </div>
        );
    }
}

export default Blog;