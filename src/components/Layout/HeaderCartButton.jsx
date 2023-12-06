import { useContext, useEffect,useState } from 'react';
import CartIcon from '../../components/Cart/CartIcon'
import CartContext from '../../store/cartContext';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton=props=>{

    const [btnIsHighLighted,setbtnIsHighLighted] = useState(false)

    const cartCtx=useContext(CartContext);

    const {items} = cartCtx

    const numberOfCartItems = items.reduce((acc, item)=>{
        return acc + item.amount
    }, 0);


    const btnClasses = `${classes.button} ${btnIsHighLighted ? classes.bump : ""}`

    useEffect(()=>{
        if(items.length === 0){
            return
        }
        setbtnIsHighLighted(true)

        const timer = setTimeout(()=>{
            setbtnIsHighLighted(false)
        },300)

        return ()=>{
            clearTimeout(timer)
        }
    },[items])

    return <button className={btnClasses} onClick={props.onClickk}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
}

export default HeaderCartButton;