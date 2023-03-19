import Content from "../components/Content";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Stage from "../components/Stage";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Review from "../components/Review";
import Verified from "../components/Verified";
import Faq from "../components/Faq";
import FileUpload from "../components/FileUpload";
import "./Home.css";

function Home(){
    return(
        <>
            <Navbar />
            <Hero
            cName="hero" 
            heroImg="https://img.freepik.com/free-vector/man-doctor-professional-medic-hospital-building_107791-13651.jpg?w=1380&t=st=1678859156~exp=1678859756~hmac=880be979a3d63ef0813e9802e82620bc127c9fdafb54ed774027f86fc2da15ba"
            title1="NEPHROLOGICAL"
            title2="DISEASE DETECTION"
            text="Revolutionize your nephrological disease diagnosis with our cutting-edge AI technology. Our deep learning algorithms accurately detect multiple diseases in real-time, providing you with fast and reliable results. Experience the future of medicine with our AI-powered solution, and give your patients the care they deserve."
            buttonText="Get Started"
            href="#contentLink"
            btnClass="show"
            />
            <Content />
            <Stage />
            <FileUpload />
            <Verified />
            <Faq />
            <Review />
            <Contact />
            <Footer />
        </>
    );
}

export default Home;