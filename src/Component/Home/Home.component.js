import React from 'react';

import NavMenu from '../NavMenu.component';
import Banner from "./Banner.component";
import '../../Style/Home/Home.style.css';
import '../../Style/Container.style.css';
import ProductCard from "./ProductCard.component";
import * as data from '../../Constrant/datademo';
import Pagination from '@material-ui/lab/Pagination';





export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.list = [];
    }

    componentDidMount() {
        const st = this.props;
        st.getAllProduct();
    }

    render() {

        const st = this.props;
        return (
            <div className="container">
                <Banner/>
                <div className="line-divide"/>
                <div className="product-list">
                    { st.productsList ?  st.productsList.map(e => <ProductCard data = {e} />) : []}
                </div>
                <div className="page-list">
                    <Pagination className="pages" count={5} variant="outlined" shape="rounded" color="secondary"/>
                </div>
            </div>

        )
    }
}