import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';


const PostPreview = (props) => {
    return (
        <ListItem button onClick={props.handlePostClick} >
            <ListItemText primary={props.p.title} secondary={props.p.author} />
            <ListItemSecondaryAction>
                <IconButton edge="end" onClick={props.handleEditPost}>
                    <EditIcon fontSize="default" />
                </IconButton>
                <IconButton edge="end" onClick={props.handlePostDelete}>
                    <ClearIcon fontSize="default" />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem >
    )
}

export default PostPreview