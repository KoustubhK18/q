import { Box, Card, CardContent, Divider, FormControl, FormControlLabel, FormLabel, List, ListItem, ListItemText, Paper, Radio, RadioGroup, Typography } from "@mui/material";

export default function QuizQuestionComponent(props){
    console.log('Quiz Question Component',props);
    return(
        <>
            
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: 'background.default',
                gap: 2
              }}
            >
                <Paper elevation={8}>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">
                            <Typography variant="h5" component="div">{props.data.question}</Typography>
                            </FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                            {props.data.options.map((option, index)=> <FormControlLabel value={index} control={<Radio />} label={option.description} />)} 
                            </RadioGroup>
                        </FormControl>  
                    <Divider />

            </Paper>
                </Box>
        
        
        </>
    );
}