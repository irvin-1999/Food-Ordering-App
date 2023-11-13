import mealsImage from "../assets/meals.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton"


const Header =(props) =>{
    return <>
        <header className={classes.header}>
            <h1>Meals</h1>
            <HeaderCartButton onClickk={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="Meals image"/>
        </div>
    </>
}

export default Header;