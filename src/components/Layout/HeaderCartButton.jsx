import { useContext } from 'react';
import CartIcon from '../../components/Cart/CartIcon'
import CartContext from '../../store/cartContext';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton=props=>{
    const cartCtx=useContext(CartContext);

    const numberOfCartItems=cartCtx.items.reduce((acc, item)=>{
        return acc + item.amount
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