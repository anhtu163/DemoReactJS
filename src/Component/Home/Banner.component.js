import React from 'react';
import '../../Style/Home/Banner.style.css';
import  '../../Style/Container.style.css';

export default class Banner extends React.Component{
    constructor(props) {
        super(props);
        this.listImg = ["https://cf.shopee.vn/file/b41b936d9796f84dae6a0e0f35edc389", "https://cf.shopee.vn/file/b2ae90e909680eccf27344fb8f2d57f9", "https://cf.shopee.vn/file/db967f3d3c48290131a6b4835c45817e"]
        this.state = {
            current: 0,
        }
    }
    tick() {
        if(this.state.current === 2){
            this.setState(state => ({
                current: 0
            }));
        }
        this.setState(state => ({
            current: state.current + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 2000);
    }
    render() {
        return(

                <div className="banner">
                    <div className="bannerLeft">
                        <img alt="slide promotion" src={this.listImg[this.state.current]}/>
                    </div>
                    <div className="bannerRight">
                        <div><img alt="promotion" src="https://cf.shopee.vn/file/eaba2f3f50d58fb66d1b9711a02a8dd8_xhdpi"/></div>
                        <div><img alt="promotion" src="https://cf.shopee.vn/file/c157289c4d2323cadbb3c2aa5b2b24ce_xhdpi"/></div>
                    </div>
                </div>
        )
    }
}