import Image from "next/image";
import { useState } from "react";

export default function Devlopement({ title, content }) {

    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        num: "",
        subject: "",
        msg: ""
    })

    const handleSubmit = async (e) => {

        let body = JSON.stringify(formValues)
        console.log("first", body);

        // await fetch('http://localhost:3000/api/posts', {
        await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({
                name: formValues.name,
                email: formValues.email,
                num: formValues.num,
                subject: formValues.subject,
                msg: formValues.msg,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then(function (response) {
            const reader = response.body.getReader();
            console.log("red", reader)

            if (response.ok) {
                return response.json();
            }
            return Promise.reject(response);
        }).then(function (data) {
            console.log("kkkkk", data);
        }).catch(function (error) {
            console.warn('Something went wrong.', error);
        });
        e.preventDefault();
    };

    return (
        <section id="devlopement">
            <div className="row">
                <div className="col">
                    <div className="devlopment-img">
                        <Image src='/hero-3.jpg' width={6000} height={400} responsive="true" alt='hero image' className="dev-img" />
                    </div>
                    <div className="devlopment-content">
                        <h1>{title}</h1>
                        <p>{content}</p>
                    </div>
                </div>
                <div className="col">
                    <div className="contact-us-form dev-form">
                        <h1>Enquiry Now</h1>
                        <form onSubmit={handleSubmit} className="row g-3" >
                            <div className="col-12">
                                {/* <label htmlFor="inputName" className="form-label">Name</label> */}
                                <input type="text" className="form-control" id="inputName" name="name" placeholder="Please Enter Your Name" onChange={(e) => setFormValues({
                                    ...formValues,
                                    name: e.target.value
                                })} />
                            </div>
                            <div className="col-md-6">
                                {/* <label htmlFor="inputEmail4" className="form-label">Email Id</label> */}
                                <input type="email" className="form-control" id="inputEmail4" name="email4" placeholder="Please Enter Mail Id"
                                    onChange={(e) => setFormValues({
                                        ...formValues,
                                        email: e.target.value
                                    })} />
                            </div>
                            <div className="col-md-6">
                                {/* <label htmlFor="inputPhoneNum" className="form-label">Phone Number</label> */}
                                <input type="tel" className="form-control" id="inputPhoneNum" name="phoneNum" placeholder="Enter Phone Number"
                                    onChange={(e) => setFormValues({
                                        ...formValues,
                                        num: e.target.value
                                    })} />
                            </div>
                            <div className="col-12">
                                {/* <label htmlFor="inputSubject" className="form-label">Subject</label> */}
                                <input type="text" className="form-control" id="inputSubject" name="subject" placeholder="Please Enter Subject" size="" onChange={(e) => setFormValues({
                                    ...formValues,
                                    subject: e.target.value
                                })} />
                            </div>
                            <div className="col-12">
                                {/* <label htmlFor="inputMessage" className="form-label">Message</label> */}
                                <textarea name="msg" className="form-control" id="inputMessage" placeholder="Please Enter Message" cols="" rows="6" onChange={(e) => setFormValues({
                                    ...formValues,
                                    msg: e.target.value
                                })} />
                            </div>
                            <div className="col-12">
                                <button type="submit" className="button" name="submit"> Submit </button>
                            </div>
                        </form>
                    </div>
                    {/* <div className="delopement-contact">
                        <h4>Conatct Info</h4>
                        <h6>+ 91-7352817229/+ 91-9625715568 <span></span> </h6>
                        <h6>info@itconnectindia.com <span></span> </h6>
                        <h6>Live chat with experts <span></span> </h6>

                    </div> */}
                </div>
            </div>
        </section>
    )
}
