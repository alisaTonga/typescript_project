import styles from './HeroCard.module.css'

interface IHeroCardProps {
    name: string
        age: number
        isDark: boolean
        lightsaberColors: string[]
        image: string
}

const HeroCard = ({name, isDark, age, lightsaberColors, image}: IHeroCardProps) => {
        return(
                <div  id={styles.card} className={`${isDark ? styles.dark: styles.light} ${styles.card}`}>
                    <h4>{name}</h4>
                    <h5>Age: {age}</h5>
                    <img id='photo' width={200} src={image} alt="" />
                    <h5>Lightsaber colors: {' '}
                        {lightsaberColors?.map(color => (
                            <ol>{color}</ol>
                        ))}</h5>
                </div>
    )
}
export default HeroCard;