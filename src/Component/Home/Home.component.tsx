import React from 'react';

import Banner from "./Banner.component";
import '../../Style/Home/Home.style.css';
import '../../Style/Container.style.css';
import ProductCard from "./ProductCard.component";
import Pagination from '@material-ui/lab/Pagination';
import {HomeProps} from "../../Container/Home.container";
import ProductCardContainer from "../../Container/ProductCard.container";





export default class Home extends React.Component<HomeProps> {
    private list : any;

    constructor(props: HomeProps) {
        super(props);
        this.list = [];

    }

    componentDidMount() {
        const st = this.props;
        st.getAllProduct();
        st.getCartItems();
    }

    render() {


        const st = this.props;
        return (
            <div className="container">
                <Banner/>
                <div className="line-divide"/>
                <div className="product-list">
                    { st.productsList ?  st.productsList.map(e => <ProductCardContainer key={e.id} st={st} data = {e} />) : []}
                </div>
                <div className="page-list">
                    <Pagination className="pages" count={5} variant="outlined" shape="rounded" color="secondary"/>
                </div>
            </div>

        )
    }
}