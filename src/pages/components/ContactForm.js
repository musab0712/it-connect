import Image from 'next/image'
import React from 'react'

export default function ContactForm() {
    return (
        <section id="contact-us">
            <div className="we-love">
                <h1>We'd Love to Hear From You</h1>
                <p>Looking to hire a world-className freelancer to get your project done professionally? Let’s discuss transforming your vision into reality.</p>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="contact-us-img">
                            <Image src="/choose-img.png" alt="" width={350} height={400} />
                            <h4>Still Need Help?</h4>
                            <h5>Email ID: <span style={{ fontWeight: "bold" }}>hiredev@gmail.com</span></h5>
                            <h5>Call Now: <span style={{ fontWeight: "bold" }}>+91 - 1234567809</span></h5>
                        </div>
                    </div>
                    <div className="col">
                        <div className="contact-us-form">
                            <form className="row g-3" action="/contact" method="post">
                                <div className="col-12">
                                    <label htmlFor="inputName" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="inputName" name="name" placeholder="Please Enter Your Name" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label">Email Id</label>
                                    <input type="email" className="form-control" id="inputEmail4" name="email4" placeholder="Please Enter Mail Id" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPhoneNum" className="form-label">Phone Number</label>
                                    <input type="tel" className="form-control" id="inputPhoneNum" name="phoneNum" placeholder="Enter Phone Number" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputSubject" className="form-label">Subject</label>
                                    <input type="text" className="form-control" id="inputSubject" name="subject" placeholder="Please Enter Subject" size="" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputMessage" className="form-label">Message</label>
                                    <textarea name="msg" className="form-control" id="inputMessage" placeholder="Please Enter Message" cols="" rows="6"></textarea>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary" name="submit"> Submit </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
