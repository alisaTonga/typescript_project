import { Link, useParams } from 'react-router-dom'
import styles from './productPage.module.css'
import { useEffect, useState } from 'react';
import {IProductCard} from '../Shop/ProductCard'
import MyButton from '../myButton/myButton';
import Loader from '../loader/Loader';

const initialProduct: IProductCard = {
  id: 0,
  title: '',
  price: 0,
  description: '',
  category: '',
  image: '',
  rating: {
      rate: 0,
      count: 0
      }
}

export default function ProductPage() {
  const {id} = useParams();
  const [product, setProduct] = useState<IProductCard>(initialProduct);
  const [loading, setLoading] =useState<boolean>(false);


  useEffect(()=>{
    setLoading(true)
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(data =>setProduct(data));
    setLoading(false)
  },[id])

  return (
    <div>
      {loading && <Loader/>}
      <h3 className={styles.title}>{product.title}</h3>
      <div className={styles.mainContainer}>
          <div className={styles.photo}>
            <img src={product.image} width={200} alt={product.title} />
          </div>
          <div className={styles.infoContainer}>
            <p className={styles.decription}>{product.description}{id}</p>
            <p>{product.price} €</p>
            <Link to={String('/my-shop')}><MyButton name='back to shop'/> </Link>

          </div>
      </div>

      <div>
      </div>
      </div>
      )
}
