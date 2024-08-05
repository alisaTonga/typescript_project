import { Link, Outlet, useLocation } from 'react-router-dom';
import StarWarsGallery from '../StarWardsGallery/StarWarsGallery';
import styles from './layout.module.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useEffect } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { getUserWithToken } from '../../features/auth/authAction';
function Layout() {
    const location = useLocation()
    console.log(location.pathname);
    const dispatch = useAppDispatch()

    useEffect(()=>{
        const token = localStorage.getItem("userToken")
        if (token !== null){
            dispatch(getUserWithToken(token))
        }
    },[])
    return(
        <div className={styles.page}>
        {/* <header className={styles.header}>
            <Link  className={location.pathname === '/robot-form' ? styles.active : ' '} to={'/robot-form'}>Robot form </Link>
            <Link className={location.pathname === '/gender-form' ? styles.active : ' '} to={'/gender-form'}>Gender form</Link>
            <Link className={location.pathname === '/my-form' ? styles.active : ' '} to={'/my-form'}>Login Form</Link>
            <Link  className={location.pathname === '/star-wars-gallery' ? styles.active : ' '}to={'/star-wars-gallery'}>Star wars gallery</Link>
            
            <Link  className={location.pathname === '/feedback' ? styles.active : ' '}to={'/feedback'}>Feedback</Link>
            <Link  className={location.pathname === '/random-user' ? styles.active : ' '}to={'/random-user'}>Random user</Link>
            <Link  className={location.pathname === '/' ? styles.active : ' '}to={'/'}>Homepage</Link>


        </header> */}
        <Header />
        <main className={styles.main}>
            <Outlet />
        </main>
        <Footer />
        </div>
    )
}
export default Layout;