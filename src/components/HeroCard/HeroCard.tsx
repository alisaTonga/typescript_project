import {IForceUser} from '../../lessons/lessons/lesson_04/data'
import {forceUsers} from '../../lessons/lessons/lesson_04/data'
import styles from './HeroCard.module.css'

interface IHeroCardProps extends IForceUser{
    index: number;
}

const HeroCard = ({ index, name, isDark, age, lightsaberColors, image }: IHeroCardProps) => {
        return(
            <div className={styles.card}> 
            {forceUsers.map((hero,index) => (
                <div key={index} id='card' className={`card ${hero.isDark ? 'dark' : 'light'}`}>
                    <h4>{hero.name}</h4>
                    <h5>Age: {hero.age}</h5>
                    <img id='photo' width={200} src={hero.image} alt="" />
                    <h5>Lightsaber colors: {' '}
                        {hero.lightsaberColors.map(color => (
                            <ol>{color}</ol>
                        ))}</h5>

                </div>
            ))}
            </div>
    )
}
export default HeroCard;