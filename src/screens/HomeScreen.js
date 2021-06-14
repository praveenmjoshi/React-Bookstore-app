import React, { useEffect } from 'react';
import Product from '../components/Product'
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { useSelector, useDispatch } from 'react-redux'
import { listProducts, searchProducts } from '../actions/productActions';
// import NavigationScreen from './NavigationScreen';
import NavHeader from '../components/NavHeader';

export default function HomeScreen() {
    const dispatch = useDispatch()
    const productList = useSelector( state => state.productList);
    const { loading, error, products } = productList;
    useEffect(() =>{
      dispatch(listProducts({}))
    },[])
    
    const actionHandler = (action) =>{
      console.log('event recieved', action)
      dispatch(listProducts({'category':action}))
    }

    const searchHandler = (searchText) =>{
      console.log(searchText)
      dispatch(searchProducts(searchText))
    }
    return (
      <div>
        <NavHeader actionHandler={actionHandler} searchHandler={searchHandler}></NavHeader>
        {
          loading ? (<LoadingBox></LoadingBox>)
          :
          error? (<MessageBox type="error">{error}</MessageBox>)
          :
          (
            <div className="row  ">
                {
                  products.map((product) =>(
                    <Product key={product.id} product={product}></Product>
                  ))
                }
            </div>
        )}
      </div>
    )
}
