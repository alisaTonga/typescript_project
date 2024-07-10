import Feedback from "../../components/feedback/Feedback";
import MyButton from "../../components/myButton/myButton";

export default function Homework04(){
    return(
        <div className="lesson_container">
        <h1>Homework </h1>
        <MyButton />
        <MyButton name='click me!'/>
        <Feedback />
        </div>

    );
}