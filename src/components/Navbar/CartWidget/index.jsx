//carrito de compras
import "./styles.css"
import Cart from "../../../assets/icon/cart.png"

function CartWidget() {
    return (
        <div className="cart">
            <img src={Cart} alt="cart" className="cart-icon" />
            <span> 8</span>
        </div>
    );
}

export default CartWidget;