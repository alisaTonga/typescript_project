interface ICard{
    index: number
    name: string
    isDark: boolean
    age: number
    lightsaberColors: string[] | number[]
    image?: string
}

export default function Card({index, name, isDark, age, lightsaberColors, image}:ICard){
    return(
        <div key={index} id='card' className={`card ${isDark ? 'dark' : 'light'}`}>
            <h4>{name}</h4>
            <h5>Age: {age}</h5>
            <img id="photo" width={200} src={image} />
            <h5>Lightsaber colors: {' '}
                        {lightsaberColors.map(color => (
                            <ol>{color}</ol>
                        ))}</h5>
        </div>
    )
}