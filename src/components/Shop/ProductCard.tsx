import React, { useEffect, useState } from 'react'
import styles from './shop.module.css'
import { number } from 'yup'

interface IProductCard{
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
        }
    }

export default function ProductCard(
    {id,
        title, 
        price, 
        description, 
        category, 
        image, 
        rating:
        { rate, count }, }:IProductCard){    
        
    return (
        <div key={id} className={styles.card}>
        <h5>{title.length > 20 ? title.substring(0,20) + '...' : 
        title}</h5>
        <span>Price: {price}€</span>
        <p>Description: {description.length > 150 ? description.substring(0,20) + '...' : 
        description}</p>
        <p>Category: {category}</p>
        <div className={styles.imgWrapper}>
        <img src={image} width={200} alt={title} />
        </div>
        <div className={styles.rating}>
        <div className={styles.rateBlock}>Rate: {rate}</div>
        <div className={styles.rateBlock}>Count: {count}</div>
        </div>


    </div>

)}
