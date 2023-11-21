import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setData } from '../../store/quiz/quizDataSlice';


export default function QuizDisplayTile(props){

    const dispatch = useDispatch();
    const performQuizEnter = ()=>{
        console.log(props.data);
        console.log(props.data.title+" entered");
        dispatch(setData({isQuizSelected: true, quizQuestions: props.data.quizQuestions, title: props.data.title}));
    };
    return(
    <Grid  item xs={4}> 
        <Card sx={{ maxWidth: 345 }} style={{ boxShadow:'2px 2px 10px #e8e6e6'}}>
        <CardMedia
            component="img"
            height="140"
            image={props.data.image}
            sx={{ maxWidth: 345 }} 
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {props.data.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {props.data.category.map(category=>{return (<Chip label={category} variant="outlined" onClick={()=>{console.log(category+" clicked")}} />)})}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {props.data.description}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="large" onClick={performQuizEnter}>Enter Quiz</Button>
        </CardActions>
        </Card>
    </Grid>
    );
}
