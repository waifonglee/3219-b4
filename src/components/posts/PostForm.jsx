import axios from 'axios';
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

const PostForm = (props) => {
    let history = useHistory();
    const [title, settitle] = useState("");
    const [author, setauthor] = useState("");
    const [content, setcontent] = useState("");

    useEffect(() => {
        if (props.post) {
            settitle(props.post.title)
            setauthor(props.post.author)
            setcontent(props.post.content)
        }
    }, [])
    
    function handletitlechange(t) {
        settitle(t.target.value);
    }

    function handleauthorchange(t) {
        setauthor(t.target.value);
    }

    function handlecontentchange(t) {
        setcontent(t.target.value);
    }

    function handlesubmit() {
        if (title === "" || author === "" || content === "") {
            alert("Please enter all fields");
            return;
        }

        if (!props.handleSubmitEdit) {
        axios.post(`https://2dvandsr59.execute-api.us-east-1.amazonaws.com/dev/posts`, { title: title, author: author, content: content })
            .then(res => {
                alert("post created");
                history.push("/");
            }).catch(err => {
                console.log(err);
            })
        } else {
            const url = 'https://2dvandsr59.execute-api.us-east-1.amazonaws.com/dev/posts/' + props.post._id;
            axios.put(url, { title: title, author: author, content: content })
            .then(res => {
                alert("post updated");
                let updatedPost = {_id:props.post._id, title: title, author: author, content: content, create_date: props.post.create_date }
                props.handleSubmitEdit(updatedPost);
            }).catch(err => {
                console.log(err);
            })

            
        }
    }

    return (
        <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
            style={{width:"100%"}}
        >
            <Box m={2} >
                <TextField
                    label="Title"
                    value={title}
                    helperText="Please enter the title of your post"
                    onChange={handletitlechange}
                />
            </Box>
            <Box m={2} >
                <TextField
                    label="author"
                    value={author}
                    helperText="Please enter the author of your post"
                    onChange={handleauthorchange}
                />
            </Box>

            <Box m={2} >
                <TextField
                    id="standard-multiline-flexible"
                    label="content"
                    multiline
                    rowsMax={20}
                    value={content}
                    onChange={handlecontentchange}
                />
            </Box>

            <Box m={2} >
                <Button variant="outlined" color="primary" onClick={handlesubmit}>
                    Submit
                </Button>
            </Box>
        </Grid>

    )
}

export default PostForm
