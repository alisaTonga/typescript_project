import Card from "../../components/cards/card";
import { forceUsers } from "../../lessons/lesson_04/data";

export default function Homework5(){
    return (
        <div className="lesson-container">
            <h5 id='title'>Homework 05</h5>
            <div className='cards'>
            {forceUsers.map((hero, index) => (
                <Card key={index}
                index={index}
                name={hero.name}
                isDark={hero.isDark}
                age={hero.age}
                lightsaberColors={hero.lightsaberColors}
                image={hero.image}/>
            ))}
            </div>
        </div>
        )
}