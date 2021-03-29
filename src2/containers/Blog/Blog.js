import React, { Component } from 'react';
//import axios from 'axios';
import axios from '../../axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    constructor(props){
        super(props);
       
    }
    state={
        posts:[],
        selectedPostsID:null,
        error:false
    }
    componentDidMount(){
        axios.get('/posts').then(response=>{
            const posts= response.data.slice(0,4);
            const updatedPosts = posts.map(post=>{
                return {
                    ...post,
                    author:'suji'
                }
            })
            this.setState({posts:updatedPosts})
           // console.log(response);
        }).catch(err=>{
            this.setState({error:true})
          //  console.log(err);
        })
    }
    selectedPOstHandler=(id)=>{
        console.log(id);
        this.setState({selectedPostsID:id})
    }
    render () {
        let posts 
        posts= <p style={{textAlign:'center'}}>Something went wrong</p>
        if(!this.state.error){
         posts=this.state.posts.map(post=>{
          return   <Post  key={post.id} title={post.title} author={post.author} clicked={()=>this.selectedPOstHandler(post.id)} />
        })
    }
        return (
            <div>
                <section className="Posts">
                   {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostsID}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    
}
}

export default Blog;