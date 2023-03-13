import "./Stage.css";
import StageData from "./StageData";

function Stage(){
    return(
        <div className="stage">
            <div className="stagecard">
                <StageData
                    mainheading="Stage 1"
                    heading="DISEASE DETECTION"
                    text="Our disease detection tool is based on advanced AI techniques, including deep learning algorithms that analyze CT scans for nephrological diseases. The tool processes large amounts of medical data and uses complex mathematical models to identify the underlying patterns and make predictions on the report using deep learning. 
                    The result is a highly accurate and fast disease detection tool that provides you with valuable insights into your patients' health. Our commitment to using the latest AI technology ensures that our tool is always at the forefront of medical advancements, providing you with the best possible results. However, it is recommended to consult a medical specialists for treatments. Since the technology is under the research stage, there may be circumstances of innacurate results."
                />
                <StageData
                    mainheading="Future Work"
                    heading="SYMPTOMS ANALYSIS"
                    text="Our symptoms analysis tool will design to provide a comprehensive understanding of your patients' health. The tool collects and analyzes symptoms, using deep learning algorithms to identify patterns and make predictions on the same. The tool is accurate up-to the standards to provide valuable insights and a percentage of possibility for each disease.
                    With our symptoms analysis tool, you can will make informed decisions about your patients' care and provide them with the best possible outcomes. Our commitment to using the latest AI technology ensures that our tool will always at the forefront of medical advancements, providing you with the best possible results. Likewise, it will recommend to consult a medical specialist with the report and it will recommend not to take decisions for yourself."
                />
            </div>
            <div className="stagecardtwo">
                <div className="col1">
                    <h3>99%</h3>
                    <p>Accuracy rate</p>
                </div>
                <div className="col2">
                    <h3>10K+</h3>
                    <p>Downloads</p>
                </div>
                <div className="col3">
                    <h3>1k+</h3>
                    <p>Active users per hour</p>
                </div>
                <div className="col4">
                    <h3>100%</h3>
                    <p>Satisfaction</p>
                </div>
            </div>
        </div>
    );
}

export default Stage