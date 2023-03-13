import "./Review.css";
import ReviewData from "./ReviewData";

function Review(){
    return(
        <div className="review">
            <h1>Reviews</h1>
            <div className="reviewcard">
                <ReviewData
                    text="I was diagnosed with Polycystic Kidney Disease and was afraid of the long and complicated process of finding the right treatment. The CT scan tool made it so easy for me to get a clear diagnosis and move forward with my treatment plan. I am so grateful for this tool and highly recommend it to anyone with nephrological concerns."
                    heading="- Jacob Brown"
                />
                <ReviewData
                    text="I was experiencing long-lasting pain in my back and loss of appetite, and wasn't sure what was causing it. The CT scan tool quickly identified Renal Adenoma, and I was able to receive a comprehensive report that helped me understand my condition and the next steps I need to take. I am so thankful for this tool."
                    heading="-  Adriana Williams"
                />
                <ReviewData
                    text="I was skeptical about using an online CT scan tool at first, but I am so glad I did. The results were just as accurate as if I had gone to the doctor, and I was able to receive my report within a matter of minutes. I highly recommend this tool to anyone looking for a convenient and reliable way to diagnose nephrological diseases."
                    heading="- Ethan Tremblay"
                />
            </div>
        </div>
    );
}

export default Review