import React, { Component } from 'react';
/* import axios from 'axios'; */
import { connect } from 'react-redux';
import { deletePost } from '../actions/postsActions';

class SinglePost extends Component {
    /* state = {
        post: null
    }
    componentDidMount() {
        let id = this.props.match.params.postid;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then(
            post => {
                this.setState(
                    {
                        post: post.data
                    }
                );
            }
        );
    } */

    handelClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }
    render() {
        console.log(this.props);
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">
                    {this.props.post.title}
                </h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <div className="btn grey" onClick={this.handelClick}>
                        Delete Post
                    </div>
                </div>
            </div>
        ) : (
                <div className="center">Loading post...</div>
            );
        return (
            <div className="center">
                {post}
            </div>
        )
    }
}

const mapStateProps = (state, ownProps) => {
    let id = ownProps.match.params.postid;
    return {
        post: state.posts.find(
            post => post.id === id
        )
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch(deletePost(id)) }
    }
}

export default connect(mapStateProps, mapDispatchToProps)(SinglePost);