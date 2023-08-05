import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import axios from "axios";
import useFetch from "../../hooks/useFetch";



const FeaturedProducts = ({ type }) => {
    // const data = [
    //     {
    //         id: 1,
    //         img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         img2: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         title: "T-shirt",
    //         isNew: true,
    //         oldPrice: 19,
    //         price: 12
    //     },
    //     {
    //         id: 2,
    //         img: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         title: "Trousers",
    //         isNew: true,
    //         oldPrice: 19,
    //         price: 12
    //     },
    //     {
    //         id: 3,
    //         img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         title: "Shirt",
    //         isNew: true,
    //         oldPrice: 19,
    //         price: 12
    //     },
    // ];


    const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq] =${type}`)
    // dont add space after last = sign and $

    return (
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. A deleniti
                    pariatur, officiis eos eveniet voluptas atque explicabo consequuntur
                    optio aliquam nesciunt voluptatem! Aspernatur pariatur quisquam
                    perspiciatis, adipisci id vel voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae, omnis corrupti, eos vero earum id fugit facilis quam eius mollitia hic ipsa sit assumenda aperiam quia, asperiores quaerat ut!
                </p>
            </div>
            <div className="bottom">
                {error ? "Something went wrong" : loading ? "loading..." : data?.map((item) => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
}

export default FeaturedProducts;
