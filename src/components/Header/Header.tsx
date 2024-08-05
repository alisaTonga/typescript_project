import styles from './header.module.css'
import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { logoutUser } from '../../features/auth/authSlice'
import { clearProducts } from '../../features/products/productSlice'

export default function Header() {
    const dispatch = useAppDispatch()
    const location = useLocation()
    console.log(location.pathname);
    const handleLogout = ()=>{
        localStorage.removeItem("userToken")
        dispatch(logoutUser())
        dispatch(clearProducts())
    }
    const { user} = useAppSelector(state=> state.user)
    interface ILink{
        path: string,
        label: string
    }

    const navItems: ILink[] = [
        {path: '/robot-form', label: 'Robot form'},
        {path: '/gender-form', label: 'Gender form'},
        {path: '/my-form', label: 'Login Form'},
        {path: '/star-wars-gallery', label: 'Star wars gallery'},
        {path: '/feedback', label: 'Feedback'},
        {path: '/random-user', label: 'Random user'},
        {path: '/', label: 'Homepage'},
        {path: '/my-shop', label: 'Shop'}
    ]
    return (
        <header className={styles.header}>
            {user.username && <span>{user.username}</span>}
            {user.username ? (
                <>
            {navItems.map((item, index) => (
                <Link 
                key={index}
                className={location.pathname === item.path ? styles.active : ''} 
                to={item.path}>{item.label}</Link>
        ))}
        <Link to="/login" onClick={handleLogout}>Logout</Link>
        </>

        ) : (
                <Link to='/login'>Login</Link>
            )}

        </header>
    )
}
