import styles from './header.module.css'
import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

export default function Header() {
    // const addlink = (path:string, headerTitle:string)=>{
    //     return (
    //         <Link  className={location.pathname === `${path}` ? styles.active : ' '} to={ `${path}`}>  `${headerTitle}`</Link>
    //     )
    const location = useLocation()
    console.log(location.pathname);
    const navItems = [
        {path: '/robot-form', label: 'Robot form'},
        {path: '/gender-form', label: 'Gender form'},
        {path: '/my-form', label: 'Login Form'},
        {path: '/star-wars-gallery', label: 'Star wars gallery'},
        {path: '/feedback', label: 'Feedback'},
        {path: '/random-user', label: 'Random user'},
        {path: '/', label: 'Homepage'},
        {path: '', label: ''}
    ]
    return (
        <div>
        <header className={styles.header}>
        {navItems.map(item => (
        <NavLink 
            key={item.path}
            to={item.path}
            className={({ isActive }) => isActive ? styles.active : ''}
        >
            {item.label}
        </NavLink>
        ))}
        </header>            
        </div>
    )
}
