import "./Verified.css";
import VerifiedData from "./VerifiedData";

function Verified(){
    return(
        <div className="verified">
            <h1>Verified</h1>
            <div className="firstrow">
                <VerifiedData
                    heading="Medical Report from Home"
                    icon="fa-sharp fa-solid fa-house"
                    text="Explore our disease detection workflow that delivers reliable reports using Deep Learning techniques."
                />
                <VerifiedData
                    heading="Upload CT Scan"
                    icon="fa-solid fa-cloud-arrow-up"
                    text="Despite the traditional workflow, CT reports are accepted one-per-session with an unlimited attempts."
                />
                <VerifiedData
                    heading="Deep Learning"
                    icon="fa-solid fa-brain"
                    text="The uploaded file would be processed using various types of Deep Learning techniques."
                />
            </div>
            <div className="secondrow">
                <VerifiedData
                    heading="Answer Questions"
                    icon="fa-solid fa-circle-question"
                    text="An effective way to draw conclusions regarding the detected disease is by answering symptoms related queries."
                />
                <VerifiedData
                    heading="Unsupervised Learning"
                    icon="fa-sharp fa-solid fa-magnifying-glass-chart"
                    text="Our systems were trained using a large amount of data samples to classify diseases from symptoms."
                />
                <VerifiedData
                    heading="Conclusion"
                    icon="fa-solid fa-handshake"
                    text="Evaluate both CT scan report and symptoms report and draw the final conclusion regarding diseases."
                />
            </div>
        </div>
    );
}

export default Verified