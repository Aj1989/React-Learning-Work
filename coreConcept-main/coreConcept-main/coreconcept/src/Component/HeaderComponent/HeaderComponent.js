import calculatorLogo from '../../assets/IClogo.png'
import './HeaderComponent.css'
const HeaderComponent = function(){
    return <>
    <img src={calculatorLogo} alt='Company logo'></img>
    <h4>Calculator for Investment</h4>
    </>
}

export default HeaderComponent;