import { forceUsers } from "../../lessons/lesson_04/data";
import HeroCard from "../HeroCard/HeroCard";
import styles from './StarWarsGallery.module.css'

export default function StarWarsGallery(){
    return(
        <div className='lesson-container'> 
        <div className={styles.forceUsersGrid}>
            {forceUsers.map((hero, index)=>(
                <HeroCard
                key={index}
                name={hero.name} 
                image={hero.image} 
                age={hero.age} 
                isDark={hero.isDark} 
                lightsaberColors={hero.lightsaberColors}/>
            )
            )}
            </div>
            </div>
    )
}