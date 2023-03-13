import "./Footer.css";
import Logo from "../images/Logo.png";

const Footer = () => {
    return(
        <div className="footer">
            <div className="firstcol">
                {/* {Logo}  */}
                <p>DISCOVERING HEALTH</p>
            </div>
            <div className="secondcol">
                <h4>SHORT LINKS</h4>
                <a href="/">Home</a>
                <a href="/">Detection</a>
                <a href="/">Symptoms</a>
                <a href="/">FAQ</a>
                <a href="/">Contact Us</a>
            </div>
            <div className="thirdcol">
                <h4>QUICK REFERENCES</h4>   
                <a href="/">Advantages</a>
                <a href="/">Workflow</a>
                <a href="/">Reviews</a>
            </div>
            <div className="copyright">
                <p>Copyright © 2023 Nephro AI. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer