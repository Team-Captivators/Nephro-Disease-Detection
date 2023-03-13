import "./Stage.css";

function StageData(props){
    return(
        <div className="t-card">
            <h4>{props.mainheading}</h4>
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
    )
}

export default StageData
 