import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    card:{
        marginBottom:theme.spacing(5)
    },
   media:{
    //    height: "250px"
    height:250,
    [theme.breakpoints.down("sm")]:{
        height:150,
    }
   }
}));

const Post = () => {
    const classes = useStyles();
    return (
       <Card className={classes.card}>
           <CardActionArea>
               <CardMedia className={classes.media} image="https://images.pexels.com/photos/7245535/pexels-photo-7245535.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" title="My Post"/>
               <CardContent>
                    <Typography variant="h5" gutterBottom>My First Post</Typography>
                    <Typography variant="body2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            consectetur earum est. dolor sit amet consectetur adipisicing elit. Quibusdam
            consectetur earum est.</Typography>
               </CardContent>
           </CardActionArea>
           <CardActions>
               <Button size="small" color="primary">Share</Button>
               <Button size="small" color="primary">Learn More</Button>
           </CardActions>
       </Card>
    )
}

export default Post;
