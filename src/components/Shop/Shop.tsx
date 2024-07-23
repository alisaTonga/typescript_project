import { useEffect, useState } from 'react';
import styles from './shop.module.css'
import ProductCard from './ProductCard';
import Loader from '../loader/Loader';

    export interface IProduct{
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


export default function Shop() {
    const [products, setProducts] =useState<IProduct[]>([]);
    const [loading, setLoading] =useState<boolean>(false);

        const getFakeStore = async () =>{
            setLoading(true)
            await fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data)) 
            setLoading(false)
        } 
        
        useEffect(() => {
            getFakeStore();
            }, []);

    return (
    <div>
        {loading && <Loader /> }
        <h1>Shop 🛒</h1>
        <div className={styles.products}>
            {products.map(product =>(
                <ProductCard 
                key={product.id}
                id = {product.id}
                title = {product.title}
                price = {product.price} 
                description = {product.description}
                category = {product.category}
                image = {product.image}
                rating={product.rating}
                />       
            ))}
        </div>
    </div>
    )
}
