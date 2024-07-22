import styles from './header.module.css'
import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

export default function Header() {
    const location = useLocation()
    console.log(location.pathname);
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
        {navItems.map((item, index) => (
            <Link 
            key={index}
            className={location.pathname === item.path ? styles.active : ''} 
            to={item.path}>{item.label}</Link>
        ))}
        </header>
    )
}
