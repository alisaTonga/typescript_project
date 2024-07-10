import './lesson_04.css'

import { forceUsers } from './data'

export default function Lesson_04(){
    return(
        <div className="lesson_container">
            <h5 id='title'>Lesson 04 </h5>
            <div className='cards'> 
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
        </div>
    )
}