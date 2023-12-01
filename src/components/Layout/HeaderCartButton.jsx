import CartIcon from '../../components/Cart/CartIcon'
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cartContext';
import { useContext } from 'react';

const HeaderCartButton=props=>{
    const cartCtx=useContext(CartContext);

    const { items } = cartCtx;
    const cartItems = items || [];
  
    // Use reduce on the cartItems array
    const numberOfCartItems = cartItems.reduce((curNumber, item) => {
      return curNumber + item.amount;
    }, 0);

    return <button className={classes.button} onClick={props.onClickk}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
}

export default HeaderCartButton;