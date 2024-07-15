import { useEffect, useState } from 'react';
import styles from './hw9.module.css'
import MyButton from '../../components/myButton/myButton';

export default function Homework9(){

interface IFoxData {
    image: string;
    link: string;
    }

    const [fox, setFox] = useState<IFoxData>({
        image: '',
        link: ''
        });

    const fetchFox = () => {
        fetch('https://randomfox.ca/floof/')
            .then(res => res.json())
            .then(data => setFox(data));
        };        

    useEffect(() => {
        fetchFox();
    }, []);    

    const handleUpdate = ()=>{
            fetchFox();
    }
    return(
        <div className='lesson-container'>
            <h4 className={styles.h4}>Random fox photo </h4>
            <p className={styles.text}>Use update button to get new fox phono 🦊</p>
            <img className={styles.photo} src={fox.image} alt="" />
            <MyButton name={'update'} onClick={handleUpdate}/>
        </div>
    )
}