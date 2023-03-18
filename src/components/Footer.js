import "./Footer.css";
import Logo from "../images/Logo.png";

const Footer = () => {
    return(
        <div className="footer">
            <div className="frowone">
                <div className="firstcol">
                    <img src={Logo} alt="Logo.png" className="footer-logo"/>
                    <p>DISCOVERING HEALTH</p>
                </div>
                <div className="secondcol">
                    <h4>SHORT LINKS</h4>
                    <a href="#homeLink">Home</a>
                    <a href="#uploadLink">Detection</a>
                    <a href="#stageLink">Symptoms</a>
                    <a href="#faqLink">FAQ</a>
                    <a href="#contactLink">Contact Us</a>
                </div>
                <div className="thirdcol">
                    <h4>QUICK REFERENCES</h4>   
                    <a href="#contentLink">Advantages</a>
                    <a href="#verifiedLink">Workflow</a>
                    <a href="#reviewLink">Reviews</a>
                </div>
            </div>
            <div className="frowtwo">
                <p>Copyright © 2023 Nephro AI. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer