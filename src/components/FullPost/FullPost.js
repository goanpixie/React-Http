import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    componentDidUpdate() {
        if (this.props.id) {
            axios.get("http://jsonplaceholder.typicode.com/posts/" + this.props.id)
                .then(response => {
                    console.log(response);
            })

        }
    }
    render () {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if (this.props.id) {
            post = (
                <div className="FullPost">
                    <h1>Title</h1>
                    <p>Content</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;