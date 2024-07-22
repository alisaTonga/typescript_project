import { useEffect, useState } from 'react';
import styles from './shop.module.css'
import ProductCard from './ProductCard';

    interface IProduct{
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

        const getFakeStore = async () =>{
            await fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data)) 
        } 
        
        useEffect(() => {
            getFakeStore();
            }, []);

    return (
    <div>
        <h1>Shop 🛒</h1>
        <div className={styles.products}>
            {products.map(product =>(
                <ProductCard 
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
