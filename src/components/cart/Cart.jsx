
import PropTypes from 'prop-types';
const Cart = ({cart}) => {
    return (
        <div>
           <li>{cart.title}</li>
        </div>
    );
};

Cart.propTypes = {
cart: PropTypes.object
}
export default Cart;