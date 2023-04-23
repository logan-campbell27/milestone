import React from 'react';
import Card from './Card';

class ProductList extends React.Component{

    handleSelectOne = (productid)=>{
        this.props.onClick(productid);
    }
    render(){
        const products = this.props.productList.map(
            (product)=>{
                return(<Card
                    productId = {product.id}
                    key = {product.id}
                    productName = {product.name}
                    productDesc = {product.description}
                    buttontext = ""
                    onClick = {this.handleSelectOne}
                    />);
            }
        );
        return (<div className="container">
            {products}
        </div>)
    }
}
export default ProductList;