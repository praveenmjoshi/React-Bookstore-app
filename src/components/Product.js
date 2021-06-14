import React from 'react'
// import Rating from './Rating'

export default function Product(props) {
    const {product} = props
    return (
        <div key={product.id} className="card">
            <a href={`/product/${product.id}`}>
            <img className="medium" 
            src={product.imageLink} 
            alt={product.title} />
            </a>
            <div className="card-body">
            <a href={`/product/${product.id}`}>
                <h2>{product.title}</h2>
            </a>
            <h3>{product.author}</h3>
            
            </div>
        </div>
    )
}
