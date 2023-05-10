import Image from "next/image";

export default function Devlopement() {
    const handleSubmit = async (e) => {
        e.preventDefault();
    };
    return (
        <section id="devlopement">
            <div className="row">
                <div className="col">
                    <div className="devlopment-img">
                        <Image src='/contact-1.jpg' width={310} height={350} />
                    </div>
                    <div className="devlopment-content">
                        <h1>Customized Software</h1>
                        <p>Many businesses need customized software to manage their operations effectively. These businesses can vary from small departmental stores to large corporations and manufacturing industries. Automation is the need of the hour. Keeping this in mind, we are offering custom software development where we understand your business requirements in detail and accordingly design, develop and deploy a fully-customized software that meets your business requirements and is robust and secure. To know more about how custom software can help your business, kindly get in touch and we will be happy to consult you.</p>
                    </div>
                </div>
                <div className="col">
                    <div className="contact-us-form">
                        <form onSubmit={handleSubmit} className="row g-3" >
                            <div className="col-12">
                                {/* <label htmlFor="inputName" className="form-label">Name</label> */}
                                <input type="text" className="form-control" id="inputName" name="name" placeholder="Please Enter Your Name" />
                            </div>
                            <div className="col-md-6">
                                {/* <label htmlFor="inputEmail4" className="form-label">Email Id</label> */}
                                <input type="email" className="form-control" id="inputEmail4" name="email4" placeholder="Please Enter Mail Id" />
                            </div>
                            <div className="col-md-6">
                                {/* <label htmlFor="inputPhoneNum" className="form-label">Phone Number</label> */}
                                <input type="tel" className="form-control" id="inputPhoneNum" name="phoneNum" placeholder="Enter Phone Number" />
                            </div>
                            <div className="col-12">
                                {/* <label htmlFor="inputSubject" className="form-label">Subject</label> */}
                                <input type="text" className="form-control" id="inputSubject" name="subject" placeholder="Please Enter Subject" size="" />
                            </div>
                            <div className="col-12">
                                {/* <label htmlFor="inputMessage" className="form-label">Message</label> */}
                                <textarea name="msg" className="form-control" id="inputMessage" placeholder="Please Enter Message" cols="" rows="6" />
                            </div>
                            <div className="col-12">
                                <button type="submit" className="button" name="submit"> Submit </button>
                            </div>
                        </form>
                    </div>
                    <div className="delopement-contact">
                        <h4>Conatct Info</h4>
                        <h6>+ 91-7352817229/+ 91-9625715568 <span></span> </h6>
                        <h6>info@itconnectindia.com <span></span> </h6>
                        <h6>Live chat with experts <span></span> </h6>

                    </div>
                </div>
            </div>
        </section>
    )
}
