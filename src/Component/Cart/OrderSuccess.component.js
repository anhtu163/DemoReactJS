import React from 'react';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import '../../Style/OrderSuccessComponent.css'

export default class OrderSuccess extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="order-success">
                    <h3>
                        <CheckCircleOutlineIcon/>
                        Success. Your order and payment has been accepted!
                    </h3>
            </div>
        )
    }
}