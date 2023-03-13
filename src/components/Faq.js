import "./Faq.css";
import FaqData from "./FaqData";

function Faq(){
    return(
        <div className="faq">
            <h1>FAQs</h1>
            <div className="faqcard">
                <div className="firstrow">
                    <FaqData
                        heading="Is a CT scan safe for everyone?"
                        text="While CT scans are generally considered safe, there are some precautions that need to be taken for certain individuals. Pregnant women and individuals with kidney problems should consult with their doctor before undergoing a CT scan."
                    />
                    <FaqData
                        heading="How long does the system take?"
                        text="The time it takes to receive the report from the CT scan tool may vary based on the volume of submissions. However, our goal is to provide the report as quickly as possible while maintaining the highest level of accuracy."
                    />
                    <FaqData
                        heading="What file formats are accepted for CT?"
                        text="Our tool accepts JPEG, JPG, and PNG file formats for the CT scan results. However, it is inevitable to mention that do not upload an invalid file which may cause the system to predict an invalid result."
                    />
                </div>
                <div className="secondrow">
                    <FaqData
                        heading="Is a prescription from a doctor required for the CT scan?"
                        text="Yes, your doctor must give you a referral (prescription) in order for you to receive a computed tomography (CT) imaging examination. However, symptoms analysis does not require any pre-requisites to undergo the analysis. Please make sure the file is in the acceptable format."
                    />
                    <FaqData
                        heading="Can the system detect all types of nephrological diseases?"
                        text="The CT scan tool is designed to detect a variety of nephrological diseases, including Polycystic Kidney Disease (PKD), Renal Adenoma, and Nephrolithiasis. However, the accuracy of the tool may be limited in detecting some rare or complex nephrological diseases."
                    />
                    <FaqData
                        heading="Do you suggest any treatment options to undergo?"
                        text="No.  If the CT scan tool and symptoms analysis tool detects a potential nephrological disease, the patient will be informed through the generated report. The patient should then follow up with their doctor to discuss further steps and potential treatment options."
                    />
                </div>
            </div>
        </div>
    );
}

export default Faq