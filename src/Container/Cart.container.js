import { connect } from "react-redux"
import Cart from "../Component/Cart/Cart.component";

const mapStateToProps = (state) =>{
    return{
        isLogin: state.SignInReducer.isLogin
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const CartContainer = connect (
    mapStateToProps,
    mapDispatchToProps,
)(Cart);

export default CartContainer;