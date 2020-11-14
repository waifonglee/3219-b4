import React from 'react'
import List from '@material-ui/core/List';
import PostPreview from './PostPreview'


const PostDisplay = (props) => {
    return (
        <List style = {{width: "40%", maxHeight: "100%", overflow: "auto"}}>
            {
                props.posts.map((p, index) => {
                    return(
                        <PostPreview p={p} key={p._id} handlePostClick = {() => props.handlePostClick(p)}  handlePostDelete={()=>props.handlePostDelete(index, p)} handleEditPost={()=>props.handleEditPost(p, index)}/>
                    )
                })
            }
            
        </List>
    )
}

export default PostDisplay
