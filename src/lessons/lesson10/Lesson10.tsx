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
    const [isLoading, setIsLoading] = useState(false);

    const fetchCatFacts = () => {
        setIsLoading(true);
        fetch('https://catfact.ninja/fact')
            .then(res => res.json())
            .then(data => setFacts(prev=>[...prev,data]))
            setIsLoading(false);
            ;
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
        <h3>Cat Facts</h3>
        <div className={styles.buttons}>
            <MyButton name={'GET MORE INFO'} onClick={handleGetMoreInfo} />
            {catFacts.length > 0 && (
            <MyButton
                id={styles.delete}
                name={'DELETE ALL DATA'}
                onClick={handleDeleteAllData}
            />
            )}
        </div>
        {isLoading && <Spinner />}
        {catFacts.length > 0 && (
            <div className={styles.catFactContainer}>
            <ol>
                {catFacts.map((el, index) => (
                <li key={index}>{el.fact}</li>
                ))}
            </ol>
            </div>
        )}
        {/* <Spinner/> */}
        </div>
    )
}