import CheckoutProducts from "../Pages/CheckoutProducts.jsx";
import { useStateValue } from "../Pages/StateProvider.jsx";
import "../Css/Checkout.css";
import Subtotal from "../Pages/Subtotal.jsx";

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Cart Is Empty</h2>
                        <p>You have no items in your cart. To buy one or more items, click "Add to cart" next to the item.</p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title">Your Shopping Cart</h2>
                        {basket.map(item => (
                            <CheckoutProducts
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    );
}

export default Checkout;
