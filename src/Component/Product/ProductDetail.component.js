import React from 'react';
import '../../Style/Container.style.css';
import productImg from "../../Image/product.PNG";
import '../../Style/DetailComponent.css'
import Button from "@material-ui/core/Button";
import {TextField} from "@material-ui/core";


export default function ProductDetail (props){
    //console.log(props.match.param.id);
    return(
        <div className="container">
            {/*//{props.match.param.id}*/}
            <div className="detail-wrapper">
                <img className="detail-image" src={productImg} alt="product"/>
                <div className="detail-info">
                    <h2>9-layer medical mask</h2>
                    <h3>$950.00</h3>
                    <TextField
                        id="outlined-number"
                        label="Number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <Button style={{color: 'white', backgroundColor: 'orangered',height:'56px'}} >Add to Cart</Button>
                </div>
            </div>
            <div className="detail-description">
                <h4>About this product</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula mauris, auctor ut
                    sollicitudin sed, ullamcorper at purus. Etiam quis lacinia orci. Sed accumsan tempus enim. Nam
                    commodo mauris ac neque fermentum, non bibendum nisi sollicitudin. In fermentum ipsum sed nibh
                    egestas, ut eleifend dui condimentum. Integer ut sapien velit. Curabitur commodo libero eu est
                    commodo, ac ornare nibh suscipit. Nullam tincidunt nec mi a ultricies.</p>
            </div>
        </div>
    )
}