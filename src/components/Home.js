import React, { Component } from 'react';
/* import axios from 'axios'; */
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
    /* state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            res => {
                this.setState(
                    {
                        posts: res.data.slice(0, 9)
                    }
                );
            }
        );
    } */
    render() {
        /* const { posts } = this.state; */
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(
                posts => {
                    return (
                        <div className="posts card" key={posts.id}>
                            <div className="card-content">
                                <Link to={'/' + posts.id}>
                                    <span className="card-title">
                                        {posts.title}
                                    </span>
                                </Link>
                                <p>
                                    {posts.body}
                                </p>
                            </div>
                        </div>
                    )
                }
            )
        ) : (
                <div className="center">
                    No Posts Yet!!!
            </div>
            )
        return (
            <div className="container">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        );
    }
}

const mapToStateProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapToStateProps)(Home);