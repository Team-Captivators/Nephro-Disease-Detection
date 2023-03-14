import {Component} from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import {Link} from "react-router-dom";
import Logo from "../images/Logo.png";

class Navbar extends Component{
    state = {clicked : false};
    handleClick = () => {
        this.setState({clicked : !this.state.clicked})
    }

    render(){
        return(
            <nav className="NavbarItems">
                <a href="/" className="navbar-logo-name">Nephro AI</a>
                {/* <a href="/" className="navbar-logo"><img src={Logo} alt="Logo.png"/></a> */}

                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <Link className={item.className} to={item.url}>
                                   {item.title}                 
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        )
    }
} 

export default Navbar;


{/* <i className={item.icon}></i>  */}