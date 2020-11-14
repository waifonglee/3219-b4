import React from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const Post = (props) => {
    return (
        <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
            style={{width:"50%", maxHeight: "100%", overflow: "auto"}}

        >
            <Typography variant="h1" component="h2" >
                {props.post.title}
            </Typography>
            <Typography variant="h6" gutterBottom>
                by: {props.post.author}
            </Typography>
            <Box width="80%" p={1}>
                <Typography variant="body1" align="center" gutterBottom>
                    {props.post.content}
                </Typography>
            </Box>
        </Grid>
    )
}

export default Post