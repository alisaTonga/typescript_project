import HeroCard from "../HeroCard/HeroCard";
import {forceUsers} from '../../lessons/lessons/lesson_04/data'
import styles from './StarWarsGallery.module.css'

export default function StarWarsGallery(){
    return(
        <div className="lesson-container">
            <div className='cards'>
            {forceUsers.map((hero, index) => (
                <HeroCard key={index}
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