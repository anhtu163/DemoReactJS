import {connect, ConnectedProps} from "react-redux"

import SuccessCheckout from "../Component/Checkout/SuccessCheckout.component";
import {IRootState} from "../Reducer/Reducer";
import {ThunkDispatch} from "redux-thunk";
import {compose} from "redux";

const mapStateToProps = (state: IRootState) => {
    return {
        isLogin: state.SignInReducer.isLogin,
        order: state.CheckoutReducer.order,
    }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<IRootState, any, any>) => {
    return {

    }
}

const connector = connect(
    mapStateToProps,
    mapDispatchToProps,
);

type PropsFromRedux = ConnectedProps<typeof connector>;
export type SuccessCheckoutProps = PropsFromRedux;

const SuccessCheckoutContainer = compose(connector)(SuccessCheckout)

export default SuccessCheckoutContainer;