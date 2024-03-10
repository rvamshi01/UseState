import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function CardAxios({handleClick}) {
  const[search, setSearch]=useState('');
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products');
      .then(res => setProducts(res.data));
  }, [])

 
  
  return (
    <>
    <input type="text" placeholder='productname'  className="setside" onChange={(e)=>setSearch(e.target.value)} value={search}/>
    <div className="container mt-4">
      <h2>Products Data</h2>
      <div className="row">
        {products.filter((productdetails)=>productdetails.title.toLowerCase().includes(search.toLowerCase())).map(product => (
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.title} width="150px" height="350px" />
              <div className="card-body">
                <h5 className="card-title text-truncate">{product.title}</h5>
                <h5 className="card-title">Price: {product.price}$</h5>
                <h6 className="card-text">Rating: {product.rating.rate}</h6>
                <h6 className="card-text">Count: {product.rating.count} Items in Stock</h6>
                <button  className="btn btn-outline-success" onClick={()=>handleClick(product)}>Add To Cart</button>&nbsp;&nbsp;
                <Link to ={`/card/${product.id}`} state={product}><button type="button" className="btn btn-warning">More</button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
  )
}

