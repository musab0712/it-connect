import Image from 'next/image'
import { useState } from 'react';

export default function ContactForm() {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [number, setNumber] = useState('');
    // const [subject, setSubject] = useState('');
    // const [msg, setMsg] = useState('');

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const response = await fetch('/api/posts', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ name, email, number, subject, msg }),
    //         });

    //         if (response.ok) {
    //             console.log('Post created successfully');
    //         } else {
    //             console.error('Failed to create post');
    //         }
    //     } catch (error) {
    //         console.error('An error occurred', error);
    //     }

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <section id="contact-us">
            <div className="we-love">
                <h1>We Love to Hear From You</h1>
                <p>Looking to hire world class developer to get your project done professionally Let discuss transforming your vision into reality.</p>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="contact-us-img">
                            <Image src="/choose-img.png" alt="" width={350} height={400} />
                            <h3>Still Need Help...</h3>
                            <h5>Email ID: <span style={{ fontWeight: "bold" }}>info@itconnectindia.com</span></h5>
                            <h5>Call Now: <span style={{ fontWeight: "bold" }}>+91 - 7352817229</span></h5>
                        </div>
                    </div>
                    <div className="col">
                        <div className="contact-us-form">
                            <form onSubmit={handleSubmit} className="row g-3" >
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
                                    <textarea name="msg" className="form-control" id="inputMessage" placeholder="Please Enter Message" cols="" rows="6" />
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="button" name="submit"> Submit </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
