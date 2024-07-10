import './ProfileCard.css'

export default function ProfileCard(){
    return(
    <div className='profile'>
        <h3>Name: John </h3>
        <h3>Last Name: Wick</h3>
        <img className="john" src="https://www.themoviedb.org/t/p/original/nCzzQKGijVzfGFg42id7uDLOjY5.jpg" alt="JOHNn_WICK" />
        
        <h4>Occupation: Hitman </h4>
        <div className='list_container'> 
        <h4 id='hobby'>Hobbies: </h4>
        <ul className='listHobbies'>
            <li>Dog care</li>
            <li>Weapons and combat training</li>
            <li>book restoration</li>
            <li>Classic literature</li>
        </ul>
        </div>
    </div>)
}