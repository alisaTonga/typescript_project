export default function Card({props}){
    return(
        <div key={props.index} id='card' className={`card ${props.isDark ? 'dark' : 'light'}`}>
            <h4>{props.name}</h4>
            <h5>Age: {props.age}</h5>
            <img id="photo" width={200} src={props.image} alt="" />
            <h5>Lightsaber colors: {' '}
                        {props.lightsaberColors.map(color => (
                            <ol>{color}</ol>
                        ))}</h5>
        </div>
    )
}