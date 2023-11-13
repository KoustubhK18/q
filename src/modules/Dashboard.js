import { Box, Grid } from "@mui/material";
import quizData from "../store/QuizData.json"
import QuizDisplayTile from "./QuizComponents/QuizDisplayTile";

export default function Dashboard(){
    return(
        <>
            <h1>Welcome to Dashboard</h1>
            <Box sx={{ overflow: 'hidden' }} style={{padding: '2%', display:'grid'}}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> 
                    {quizData.data.map(data=>{return <QuizDisplayTile data={{image: data.image, title: data.title, description: data.description, category: data.category}} />})}
                </Grid>
            </Box>  
            
        </>
    );
}