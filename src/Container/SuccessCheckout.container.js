import {connect} from "react-redux"

import SuccessCheckout from "../Component/Checkout/SuccessCheckout.component";

const mapStateToProps = (state) => {
    return {
        isLogin: state.SignInReducer.isLogin,
        order: state.CheckoutReducer.order,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const SuccessCheckoutContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SuccessCheckout);

export default SuccessCheckoutContainer;