import React from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import PostPreview from './PostPreview'


const PostDisplay = (props) => {
    return (
        <List style = {{width: "50%", maxHeight: "100%", overflow: "auto"}}>
            {
                props.posts.map((p, index) => {
                    return(
                        <PostPreview p={p} key={p._id} handlePostClick = {() => props.handlePostClick(p)}  handlePostDelete={()=>props.handlePostDelete(index, p)}/>
                    )
                })
            }
            
        </List>
    )
}

export default PostDisplay
