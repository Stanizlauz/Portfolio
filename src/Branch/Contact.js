import  React from 'react'
import  emailjs from '@emailjs/browser';

export default function Contact() {
    // const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_6u1ppsf', 'template_kh9sg39', e.target, 'user_3Qmrr6MR0vYHh7GiRvOW9')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };


// export default function Contact() {

   

    return (
        <>
            {/* Contact */}
            <div id="contact" className="form-1 bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Contact details</h2>
                            <p className="p-heading">For any type of online project please don't hesitate to get in touch with me. The fastest way is to send me your message using the following email <a className="blue no-line" href="#your-link">contact@domain.com</a></p>
                        </div> {/* end of col */}
                    </div> {/* end of row */}
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Contact Form */}
                            <form id="contactForm" onSubmit={sendEmail}>
                                <div className="form-group">
                                    <input type="text" className="form-control-input" name="name" required />
                                    <label className="label-control" htmlFor="name">Name</label>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control-input" name="user_email" required />
                                    <label className="label-control" htmlFor="email">Email</label>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control-textarea" name="message" required defaultValue={""} />
                                    <label className="label-control" htmlFor="message">Project details</label>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="form-control-submit-button">Submit</button>
                                </div>
                            </form>
                            {/* end of contact form */}
                        </div> {/* end of col */}
                    </div> {/* end of row */}
                </div> {/* end of container */}
            </div> {/* end of form-1 */}
            {/* end of contact */}

        </>
    )
}
