import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Product from './Product';
class Products extends Component {
    render() {
        var products = [
            {
                id: 1,
                slug:'iphone-X',
                name: 'iphone X',
                price: 1000
            },
            {
                id: 2,
                slug:'iphone-8',
                name: 'iphone 8',
                price: 600
            },
            {
                id: 1,
                slug:'iphone-7',
                name: 'iphone 7',
                price: 450
            }
        ];

        var {match} = this.props;
        var url = match.url;
    
        var result = products.map((product, index) => {
            return (
                <NavLink key={index} to={`${url}/${product.slug}`}>
                    <li className="list-group-item" >
                        {product.id} - {product.name} - {product.price}$
                    </li>
                </NavLink>
            );
        });
        return (
            <div className="container">
                <h1>Danh sách sản phẩm</h1>

                <div className="row">

                    <ul className="list-group">
                        {result}
                    </ul>

                </div>
                
                <div className="row">
                    <Route path="/products/:name" component={Product}/>
                </div>
                
            </div>
        );
    }
}

export default Products;