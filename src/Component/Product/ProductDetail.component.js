import React from 'react';
import '../../Style/Container.style.css';
import '../../Style/Product/ProductDetail.style.css';
import * as data from '../../Constrant/datademo';
import {Button, Typography, TextField, Chip} from "@material-ui/core";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CheckIcon from "@material-ui/icons/Check";
import Rating from '@material-ui/lab/Rating';
import Coupon from "./Coupon.component";

export default class ProductDetail extends React.Component{
    constructor(props) {
        super(props);
        const prs = this.props;
        this.id = prs.match.params.id;
        this.state = {
            count: 0,
            value: 2,
        }
        this.data = {}
    }

    componentDidMount() {
        const st = this.props;
        st.getDetailProduct(this.id);
    }

    render() {
        //const data = this.list.filter (e => e.id === parseInt(this.id,10))[0];
        const st = this.props;
        return(
            <div className="container">
                <div className="bg">
                    <div className="grid-1">
                        <div className="image">
                            <img src={st.dataDetail.image}/>
                        </div>
                        <div className="info">
                            <Typography variant="h5" component="h2">
                                <Chip
                                icon={<CheckIcon style={{color: "white"}}/>}
                                label="Bán chạy"
                                style={{backgroundColor: "orangered", color: "white", marginRight: "20px"}}/>
                                {st.dataDetail.name}
                            </Typography>
                            <div style={{display: "flex"}}>
                                <Rating
                                    style={{marginTop: "10px"}}
                                    name="simple-controlled"
                                    value={this.state.value}
                                    onChange={(event, newValue) => {
                                        this.setState({value: newValue});
                                    }}
                                />
                                <p style={{marginLeft: "20px", marginTop: "11px"}}>{this.state.value} lượt đánh giá</p>
                            </div>
                            <div className="line-divide"/>
                            <Typography style={{marginTop: "20px", marginBottom: "20px"}} variant="h4" component="h2" color="secondary">₫{st.dataDetail.price}</Typography>
                            <div className="product-number">

                                <ButtonGroup color="primary" aria-label="outlined primary button group">
                                    <Button  onClick={()=> { this.setState({count: this.state.count - 1 })}}><h2>-</h2></Button>
                                    <Button>{this.state.count}</Button>
                                    <Button onClick={()=> { this.setState({count: this.state.count + 1 })}}><h2>+</h2></Button>
                                </ButtonGroup>
                            </div>
                            <Button variant="contained"
                                    style={{backgroundColor: "orangered", color: "white", marginRight: "20px"}}>Add to
                                Cart</Button>
                            <Button variant="contained" color="primary">Buy now</Button>
                        </div>
                    </div>
                    <div className="grid-2">
                        <div style={{marginRight: "25px"}}>
                            <div className="detail">

                                <Typography variant="h5" component="h2">Detail:</Typography>
                                <div className="line-divide"/>
                                <p>Quý Khách vui lòng đọc kỹ Thông Tin Sản Phẩm trước khi đặt hàng, tránh đặt rồi hủy hàng nhé,
                                    hoặc
                                    có hủy thì hủy sớm trước khi đơn hàng đưa vận chuyển nhé. Vì sau khi đặt hàng, hàng sẽ được
                                    Shop
                                    gói và gửi đi liền trong ngày hoặc ngày hôm sau. Vì thế việc hủy hàng sẽ gây nhiều khó khăn
                                    cho
                                    Shop. Rất mong Quý Khách cảm thông và đắn đo giúp Shop!!!</p>
                                <p>Theo quy định của Shopee Khách hàng sẽ KHÔNG ĐƯỢC XEM HÀNG trước khi thanh toán nhưng được
                                    đổi
                                    trả sau 24h nếu sản phẩm bị lỗi tính từ thời điểm nhận được hàng. Hãy chắc chắn nhận hàng và
                                    để
                                    thông tin chính xác khi ấn Mua hàng tránh trường hợp giao đi rồi lại quay về.</p>
                                <p>Hàng sẽ được Shop giao cho vận chuyển trong 1 ngày kể từ khi đặt hàng. Vì vậy, nếu có yêu cầu
                                    hủy
                                    đơn hàng vui lòng inbox Shop và quyết định trước khi shop giao cho vận chuyển. Vận chuyển
                                    của
                                    Shopee sẽ liên hệ quý khách để giao hàng. (Nội thành HCM HN 1-2 ngày, Ngoại thành và các
                                    Tỉnh TP
                                    khác 3-5 ngày)</p>

                            </div>

                            <div className="description">
                                <Typography variant="h5" component="h2">Description:</Typography>
                                <div className="line-divide"/>
                                <p>Quý Khách vui lòng đọc kỹ Thông Tin Sản Phẩm trước khi đặt hàng, tránh đặt rồi hủy hàng nhé,
                                    hoặc
                                    có hủy thì hủy sớm trước khi đơn hàng đưa vận chuyển nhé. Vì sau khi đặt hàng, hàng sẽ được
                                    Shop
                                    gói và gửi đi liền trong ngày hoặc ngày hôm sau. Vì thế việc hủy hàng sẽ gây nhiều khó khăn
                                    cho
                                    Shop. Rất mong Quý Khách cảm thông và đắn đo giúp Shop!!!</p>
                                <p>Theo quy định của Shopee Khách hàng sẽ KHÔNG ĐƯỢC XEM HÀNG trước khi thanh toán nhưng được
                                    đổi
                                    trả sau 24h nếu sản phẩm bị lỗi tính từ thời điểm nhận được hàng. Hãy chắc chắn nhận hàng và
                                    để
                                    thông tin chính xác khi ấn Mua hàng tránh trường hợp giao đi rồi lại quay về.</p>
                                <p>Hàng sẽ được Shop giao cho vận chuyển trong 1 ngày kể từ khi đặt hàng. Vì vậy, nếu có yêu cầu
                                    hủy
                                    đơn hàng vui lòng inbox Shop và quyết định trước khi shop giao cho vận chuyển. Vận chuyển
                                    của
                                    Shopee sẽ liên hệ quý khách để giao hàng. (Nội thành HCM HN 1-2 ngày, Ngoại thành và các
                                    Tỉnh TP
                                    khác 3-5 ngày)</p>
                            </div>
                        </div>
                        <div className="coupon">
                            <Typography variant="h5" component="h2">Coupon:</Typography>
                            <div className="line-divide"/>
                            <Coupon />
                            <Coupon />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}