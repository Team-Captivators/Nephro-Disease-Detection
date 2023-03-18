import "./HeroStyles.css";

function Hero(props) {
    return(<>
    <div className={props.cName} id="homeLink">
        <img alt="HeropImg" src={props.heroImg}/>
        <div className="hero-text">
            <h1>{props.title1}</h1>
            <h2>{props.title2}</h2>
            <p>{props.text}</p>
            <a href={props.href} className={props.btnClass}>
                {props.buttonText}
            </a>
        </div>
    </div>
    </>);
}

export default Hero;