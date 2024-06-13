import "../Css/Subtotal.css";
import { useStateValue } from "./StateProvider";

function Subtotal() {
    const [{ basket }] = useStateValue();

    const subtotal = basket.reduce((amount, item) => item.price + amount, 0);
    const formattedSubtotal = subtotal.toFixed(0);

    return (
        <div className="subtotal">
            <p className="subtotal__amount">
                Subtotal ({basket.length} items): <strong>Rs {formattedSubtotal.replace(/\d(?=(\d{3})+\.)/g, '$&,')}</strong>
            </p>
            <button className="subtotal__button">Proceed to checkout</button>
        </div>
    );
}

export default Subtotal;
