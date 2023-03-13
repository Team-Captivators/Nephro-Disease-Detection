import "./Verified.css";
import VerifiedData from "./VerifiedData";

function Verified(){
    return(
        <div className="verified">
            <div className="verifiedcard">
                <div className="firstrow">
                    <VerifiedData
                        // image="<i classname='fa-brands fa-facebook-square'></i>"
                        mainheading="Verified"
                        heading="Medical Report from Home"
                        text="Explore our disease detection workflow that delivers reliable reports using Deep Learning techniques."
                    />
                    <VerifiedData
                        heading="Upload CT Scan"
                        text="
                        Despite the traditional workflow, CT reports are accepted one-per-session with an unlimited attempts."
                    />
                    <VerifiedData
                        heading="Deep Learning"
                        text="The uploaded file would be processed using various types of Deep Learning techniques."
                    />
                </div>
                <div className="secondrow">
                    <VerifiedData
                        heading="Answer Questions"
                        text="An effective way to draw conclusions regarding the detected disease is by answering symptoms related queries."
                    />
                    <VerifiedData
                        heading="Unsupervised Learning"
                        text="Our systems were trained using a large amount of data samples to classify diseases from symptoms."
                    />
                    <VerifiedData
                        heading="Conclusion"
                        text="Evaluate both CT scan report and symptoms report and draw the final conclusion regarding diseases."
                    />
                </div>
            </div>
        </div>
    );
}

export default Verified