import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions'
import _ from 'lodash';
import { Link } from 'react-router-dom';

class PostIndex extends Component {
    componentDidMount(){
        this.props.fetchPost();
    }
    renderPostsList(){
        return _.map(this.props.posts, post => {
            return(
                <li className='list-group-item' key={post.id}> 
                {post.title}
                </li>
            );
        });
    }
    render(){
        return (
            <div>                
                <div className='text-xs-right add'>
                    <Link className='btn btn-primary' to='/posts/new'>Add a Post</Link>
                </div>
                <h3>Posts</h3>
                <ul className='List-group'>
                {this.renderPostsList()}
                </ul>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        posts: state.posts
    };
}

export default connect(mapStateToProps, { fetchPost })(PostIndex);