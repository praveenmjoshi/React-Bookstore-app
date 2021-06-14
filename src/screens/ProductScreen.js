import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { productDetails } from '../actions/productActions';

export default function ProductScreen(props) {
   
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const productDetail = useSelector(state => state.productDetails);
    const { loading, error, product } = productDetail;
   
    useEffect(() =>{
        dispatch(productDetails(productId));
    }, [])

    const addToWatchlist = () =>{
        props.history.push(`/watchlist/${product.title}`);
    }
    return (
        <div>
            {
            loading ? (<LoadingBox></LoadingBox>)
            :
            error? (<MessageBox type="error">{error}</MessageBox>)
            :
            (
            <div className="details">
                <Link to="/">Back to Results</Link>
               <div className="row top">
                    <div className="col-1">
                        <img src={`../${product.imageLink}`} alt={product.title}></img>
                    </div>
                    <div className="col-2">
                        <ul>
                            <li>
                                <h1 className="primary-color">{ product.title }</h1>
                                <h2>{ product.author }</h2>
                            </li>
                            <li>
                                    <div className="row">
                                        <div>Published on</div>
                                        <div className="price">{product.year}</div>
                                    </div>
                            </li>
                            <li>
                                    <div className="row">
                                        <div>Country</div>
                                        <div className="price">{product.country}</div>
                                    </div>
                            </li>
                            <li>
                                    <div className="row">
                                        <div>Link</div>
                                        <div className="price"><a href={product.link} target="_blank" rel="noopener noreferrer">{product.link}</a></div>
                                    </div>
                            </li>
    
                        </ul>
                    </div>
                    <div className="col-1">
                        <div className=" card card-o card-body">
                            <ul>
                                <li>
                                    <div className="row">
                                        <div>Language</div>
                                        <div className="price">{product.language}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>Pages</div>
                                        <div className="price">{product.pages}</div>
                                    </div>
                                </li>
                                <li>
                                    <button onClick={addToWatchlist} className="primary block">Add to Watchlist</button>
                                </li>
                            </ul>
                        </div>
                    </div>
               </div>
            </div>
    
            )}
        </div>

        )
}
