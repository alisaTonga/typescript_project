import { useEffect, useState } from 'react'
import styles from './lesson10.module.css'
import MyButton from '../../components/myButton/myButton'
import Spinner from './Spinner'

export default function Lesson10(){
    interface ICatFact{
        fact:string
        length?: number  
    }


    const [catFact, setFact] = useState<ICatFact>({
        fact: '' })

    const [catFacts, setFacts] = useState<ICatFact[]>([])


    const fetchCatFacts = () => {
        fetch('https://catfact.ninja/fact')
            .then(res => res.json())
            .then(data => setFacts(prev=>[...prev,data])) ;
        };

        useEffect(() => {
            fetchCatFacts()
            }, []);

            const handleGetMoreInfo = () => {
        fetchCatFacts()
    }        

    const handleDeleteAllData = () => {
        setFacts([])
    }

    return(
        <div className='lesson-container'>
            <h3>Cat Fact</h3>
            
            <div className={styles.buttons}>
            <MyButton name={'GET MORE INFO'} onClick={handleGetMoreInfo}/>
            <MyButton 
                id={`${(catFacts.length <= 0) ? styles.invisible: styles.delete}`} 
                name={'DELETE ALL DATA'} 
                onClick={handleDeleteAllData}
            />
            </div>
            <div className={styles.catFactContainer}>
            <ol>
                {catFacts.map(el=> <li>{el.fact}</li>)}
            </ol>
            <Spinner />
            </div>

        </div>
    )
}