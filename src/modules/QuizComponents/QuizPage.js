import QuizQuestionComponent from "./QuizQuestionComponent";

export default function QuizPage(props){
    console.log(props);
    return (
        <>
            <h1>{props.data.title}</h1>
            {props.data.quizQuestions.map(data => {
                return <QuizQuestionComponent data={data}/>
            })}
        </>
    );
}