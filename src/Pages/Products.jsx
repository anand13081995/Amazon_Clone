import "../Css/Products.css";
import { useStateValue } from "./StateProvider";
import PropTypes from 'prop-types';

function Products({ id, title, image, price, rating }) {
  const [, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'Add_to_cart',
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image 
      }
    });
  };

  return (
    <div className="product">
      <img src={image} alt="product" className="propic" />
      <div className="proinfo">
        <p>{title}</p>
        <div className="prating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>&#9734;</p>
            ))}
        </div>
        <p className="pprice">
          <small>Rs</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="buttonContainer">
        <button onClick={addToBasket} className="addToCartButton">Add to cart</button>
      </div>
    </div>
  );
}


Products.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired
};


export default Products;
