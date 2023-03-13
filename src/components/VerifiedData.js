import "./Verified";

function FaqData(props){
    return(
        <div className="t-card">
            <h3>{props.mainheading}</h3>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            <i>{props.image}</i>
        </div>
    )
}

export default FaqData
 