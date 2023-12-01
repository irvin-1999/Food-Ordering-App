import CartIcon from '../../components/Cart/CartIcon'
import classes from './HeaderCartButton.module.css';

const HeaderCartButton=props=>{

    return <button className={classes.button} onClick={props.onClickk}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
}

export default HeaderCartButton;