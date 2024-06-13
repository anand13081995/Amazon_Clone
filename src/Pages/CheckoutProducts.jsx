import "../Css/CheckoutProducts.css";
import { useStateValue } from "./StateProvider";

function CheckoutProducts({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: 'Remove_from_cart',
            id: id,
        });
    };

    return (
        <div className="checkoutProduct">
            <img src={image} alt="pic" className="checkoutProduct__image" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>

                <p className="checkoutProduct__price">
                    <small>Rs</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>&#9733;</p>
                        ))}
                </div>

                <button className="checkoutProduct__removeButton" onClick={removeFromCart}>Delete Item</button>
            </div>
        </div>
    );
}

export default CheckoutProducts;
