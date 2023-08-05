import React, { Profiler } from "react";
import './Cart.scss'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutline'
import { useDispatch, useSelector } from "react-redux";
import { removItem, resetCart } from "../../redux/cartReducer";

const Cart = () => {

    const REACT_APP_UPLOAD_URL = import.meta.env.VITE_REACT_APP_UPLOAD_URL
    const products = useSelector(state => state.cart.products)
    const dispatch = useDispatch()

    const totalPrice = () => {
        let total = 0
        products.map(item => total += item.quantity * item.price)
        return total.toFixed(2)
    }
    return <div className="cart">
        <h1>Products in your cart</h1>
        {products?.map(item => (
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0, 100)}</p>
                    <div className="price">{item.quantity} x ${item.price}</div>
                </div>
                <DeleteOutlinedIcon className="delete" onClick={() => dispatch(removItem(item.id))} />
            </div>
        ))}
        <div className="total">
            <span>subtotal</span>
            <span>${totalPrice()}</span>
        </div>
        <button>proceed to checkout</button>
        <span className="reset" onClick={() => dispatch(resetCart())}>Reset Cart</span>
    </div>;
};

export default Cart;
