import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import PostsDisplay from './PostsDisplay'
import Post from './Post'
import { withRouter } from 'react-router-dom';



import LinearProgress from '@material-ui/core/LinearProgress';


const Main = () => {
    const [posts, setposts] = useState([]);
    const [post, setpost] = useState(null);

    function handlePostClick(post) {
        setpost(post);
    }

    function handlePostDelete(index, p) {
        const url = 'https://2dvandsr59.execute-api.us-east-1.amazonaws.com/dev/posts/' + p._id
        axios.delete(url).then((res) => {
            console.log(res)
            if (post === p) {
                setpost(null);
            }
            setposts([...posts.slice(0, index), ...posts.slice(index + 1)])
            alert("Post deleted");
        }).catch(err => {
            console.log(err);
        })

    }


    useEffect(() => {
        axios.get(
            `https://2dvandsr59.execute-api.us-east-1.amazonaws.com/dev/posts`
        ).then((res) => {
            console.log(res);
            setposts(res.data.data);
        }).catch(err => {
            console.log(err);
        })
    }
        , []);

    console.log(posts)


    return (
        <Grid container justify="center">
            <h1> Blog Posts </h1>

            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
            >
                {posts.length === 0 ?
                    <LinearProgress />
                    :
                    <PostsDisplay posts={posts} handlePostClick={handlePostClick} handlePostDelete={handlePostDelete} />
                }

                {post === null ?
                    <div>
                    </div>
                    :
                    <Post post={post} />
                }
            </Grid>

        </Grid>
    )

}

export default withRouter(Main)