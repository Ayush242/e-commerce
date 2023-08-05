import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import BalanceIcon from '@mui/icons-material/Balance'
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addTocart } from "../../redux/cartReducer";

function Product() {
    const id = useParams().id
    const [selectedImg, setSelectedImg] = useState("img")
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()

    const queryString = `/products/${id}?populate=*`;

    const { data, loading, error } = useFetch(queryString);

    const REACT_APP_UPLOAD_URL = import.meta.env.VITE_REACT_APP_UPLOAD_URL

    return <div className="product">
        {loading ? "loading..." :
            <>
                <div className="left">
                    <div className="images">
                        <img src={REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} alt="" onClick={e => setSelectedImg("img")} />
                        <img src={REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={e => setSelectedImg("img2")} />
                    </div>
                    <div className="mainImg">
                        <img src={REACT_APP_UPLOAD_URL + data?.attributes[selectedImg]?.data?.attributes?.url} alt="" />
                    </div>
                </div>
                <div className="right">
                    <h1>{data?.attributes?.title}</h1>
                    <span className="price">${data?.attributes?.price}</span>
                    <p>{data?.attributes?.desc}</p>
                    <div className="quantity">
                        <button onClick={e => setQuantity(prev => prev === 1 ? 1 : prev - 1)}> - </button>
                        {quantity}
                        <button onClick={e => setQuantity(prev => (prev + 1))}> + </button>
                    </div>
                    <button className="add" onClick={() => dispatch(addTocart({
                        id: data.id,
                        title: data.attributes.title,
                        desc: data.attributes.desc,
                        img: REACT_APP_UPLOAD_URL + data.attributes.img.data.attributes.url,
                        price: data.attributes.price,
                        quantity
                    }))}>
                        <AddShoppingCartIcon />
                        Add to Cart
                    </button>
                    <div className="links">
                        <div className="item">
                            <FavoriteBorderIcon /> Add to Wishlist
                        </div>
                        <div className="item">
                            <BalanceIcon /> Add to compare
                        </div>
                    </div>
                    <div className="info">
                        <span>Vendor: Polo</span>
                        <span>Product Type: T-Shirt</span>
                        <span>Tag: T-Shirt, Women, Top</span>
                    </div>
                    <hr />
                    <div className="info">
                        <span>DESCRIPTION</span>
                        <hr />
                        <span>ADDITIONAL INFORMATION</span>
                        <hr />
                        <span>FAQ</span>
                    </div>
                </div>
            </>
        }
    </div>;
}

export default Product;
