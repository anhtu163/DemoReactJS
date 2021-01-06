import {connect, ConnectedProps} from "react-redux"
import ProductCard from "../Component/Home/ProductCard.component";
import {compose} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {IRootState} from "../Reducer/Reducer";

const mapStateToProps = (state : IRootState) =>{
    return{
        productsList: state.HomeReducer.productsList,
    }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<IRootState, any, any>) => {
    return {
    }
}

const connector = connect (
    mapStateToProps,
    mapDispatchToProps,
);

type PropsFromRedux = ConnectedProps<typeof connector>;
export type ProductCardProps = PropsFromRedux;

const ProductCardContainer =  compose(connector)(ProductCard);


export default  ProductCardContainer;