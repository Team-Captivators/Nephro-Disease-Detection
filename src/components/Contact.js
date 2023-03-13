import "./Contact.css";

function Contact(){
    return(
        <div className="form-container">
            <h1>CONTACT US</h1>
            <h3>Email us, we would love to hear form you</h3>
            <form action="mailto:nephroai@gmail.com" method="post" enctype="text/plain">
                <input type="text" placeholder="Name" required/>
                <input type="email" placeholder="Email" required/>
                <textarea placeholder="Message" rows="4"></textarea>
                <button >Send Message</button>
            </form>
        </div>
    )
}

export default Contact; 