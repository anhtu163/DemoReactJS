import React from 'react';

import NavMenu from './Menu.component';
import Banner from "./Banner.component";
import '../../Style/Home.style.css';
import ProductCard from "./ProductCard.component";





export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.list = [1,2,3,4,5,6,7,8]
    }

    render() {

        return (
            <div className="container">
                <NavMenu/>
                <div className="product-list">
                    {/*<Banner/>*/}
                    {this.list.map(e => <ProductCard />)}
                </div>

            </div>

        )
    }
}