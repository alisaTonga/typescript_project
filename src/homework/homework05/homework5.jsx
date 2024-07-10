import Card from "../../components/cards/card";
import { forceUsers } from "../../lessons/lesson_04/data.js";



export default function Homework5(){
    return (
        <div className="lesson_container">
            <h5 id='title'>Homework 05</h5>
            <div className='cards'>
            {forceUsers.map((hero, index) => (
                <Card key={index} props={hero} />
            ))}
            </div>
        </div>
        )
}