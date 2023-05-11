import Image from "next/image";
import { useState } from "react";

export default function ContactForm() {

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

        <section id="contact-us">
            <div className="we-love">
                <h1>We Love to Hear From You</h1>
                <p>
                    Looking to hire world class developer to get your project done
                    professionally Let discuss transforming your vision into reality.
                </p>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="contact-us-img">
                            <Image src="/choose-img.png" alt="" width={350} height={400} />
                            <h3>Still Need Help...</h3>
                            <h5>
                                Email ID:{" "}
                                <span style={{ fontWeight: "bold" }}>
                                    info@itconnectindia.com
                                </span>
                            </h5>
                            <h5>
                                Call Now:{" "}
                                <span style={{ fontWeight: "bold" }}>+91 - 7352817229</span>
                            </h5>
                        </div>
                    </div>
                    <div className="col">
                        <div className="contact-us-form">
                            <form onSubmit={handleSubmit} className="row g-3">
                                <div className="col-12">
                                    <label htmlFor="inputName" className="form-label">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputName"
                                        name="name"
                                        value={formValues.name}
                                        //onChange={handleInputChange}
                                        onChange={(e) => setFormValues({
                                            ...formValues,
                                            name: e.target.value
                                        })}
                                        placeholder="Please Enter Your Name"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label">
                                        Email Id
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="inputEmail4"
                                        name="email"
                                        value={formValues.email}
                                        //onChange={handleInputChange}
                                        placeholder="Please Enter Mail Id"
                                        onChange={(e) => setFormValues({
                                            ...formValues,
                                            email: e.target.value
                                        })}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPhoneNum" className="form-label">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="inputPhoneNum"
                                        name="phoneNum"
                                        placeholder="Enter Phone Number"
                                        value={formValues.phoneNum}
                                        // onChange={handleInputChange}
                                        onChange={(e) => setFormValues({
                                            ...formValues,
                                            num: e.target.value
                                        })}
                                    />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputSubject" className="form-label">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputSubject"
                                        name="subject"
                                        value={formValues.subject}
                                        // onChange={handleInputChange}
                                        placeholder="Please Enter Subject"
                                        size=""
                                        onChange={(e) => setFormValues({
                                            ...formValues,
                                            subject: e.target.value
                                        })}
                                    />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputMessage" className="form-label">
                                        Message
                                    </label>
                                    <textarea
                                        name="msg"
                                        className="form-control"
                                        id="inputMessage"
                                        placeholder="Please Enter Message"
                                        cols=""
                                        rows="6"
                                        value={formValues.msg}
                                        //  onChange={handleInputChange}
                                        onChange={(e) => setFormValues({
                                            ...formValues,
                                            msg
                                                : e.target.value
                                        })}
                                    />
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="button" name="submit">

                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
