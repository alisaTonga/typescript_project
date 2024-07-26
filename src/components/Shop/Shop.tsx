import { useEffect, useState } from 'react';
import styles from './shop.module.css'
import ProductCard from './ProductCard';
import Loader from '../loader/Loader';
import { number } from 'yup';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getProducts } from '../../features/products/productsAction';

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
    const [limit, setLimit] = useState<number>(20);

    const dispatch = useAppDispatch()
    const {products, isLoading} = useAppSelector(state => state.products);

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])

        // const getFakeStore = async (limit: number) =>{
        //     setLoading(true)
        //     await fetch(`https://fakestoreapi.com/products?limit=${limit}`)
        //     .then(res => res.json())
        //     .then(data => setProducts(data)) 
        //     setLoading(false)
        // } 
        

        const handleLimitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const newLimit = parseInt(event.target.value, 10);
            if (!isNaN(newLimit) && newLimit > 0 && newLimit <= 20) {
                setLimit(newLimit);
            }
        };
        
        // useEffect(() => {
        //     getFakeStore(limit);
        //     }, [limit]);

    return (
    <div>
        {isLoading && <Loader /> }
        
        {/* <h1>Shop 🛒</h1> */}
        <div className={styles.limit}>
        <label>Number of items to display</label>
        <br />
        <input type="number" min="1" max="20" value={limit} onChange={handleLimitChange}  /> 
        </div>
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
