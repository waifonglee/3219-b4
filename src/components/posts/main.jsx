import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import PostsDisplay from './PostsDisplay'
import Post from './Post'
import PostForm from './PostForm'
import { withRouter } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';


const Main = () => {
    const [posts, setposts] = useState([]);
    const [post, setpost] = useState(null);
    const [edit, setedit] = useState(null);
    const [editInd, seteditind] = useState(null);

    function handlePostClick(post) {
        setpost(post);
        setedit(null);
        seteditind(null);
    }

    function handleEditPost(post, ind) {
        setpost(null);
        setedit(post);
        seteditind(ind);
    }

    function handleSubmitEdit(updatedpost) {
        setposts([...posts.slice(0, editInd), updatedpost, ...posts.slice(editInd + 1)])
        setedit(null)
        seteditind(null)
        setpost(updatedpost)
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
                    <PostsDisplay posts={posts} handlePostClick={handlePostClick} handlePostDelete={handlePostDelete} handleEditPost = {handleEditPost} />
                }

                {post === null && edit === null?
                    <div>
                    </div>
                    : post !== null ?
                    <Post post={post} />
                    :
                    <Grid style={{width: "60%"}} >
                    <PostForm post = {edit} handleSubmitEdit = {handleSubmitEdit} />
                    </Grid>
                }
            </Grid>

        </Grid>
    )

}

export default withRouter(Main)