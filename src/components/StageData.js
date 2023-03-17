import "./Stage.css";

function StageData(props){
    return(
        <div className="stagedata-card">
            <h4><i className={props.icon}></i>{props.mainheading}</h4>
            <h1>{props.heading}</h1>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
        </div>  
    )
}

export default StageData
 