function BookAppointment() {
    return (
        <section className="appointment_page pt_100 xs_pt_65 pb_100 xs_pb_70">
            <div className="container">
                <div className="appointment_content">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 wow fadeInLeft" data-wow-duration="1s">
                            <div className="appointment_page_img">
                                <img src="/assets/images/appoinment_page_img.png" alt="appointment" className="img-fluid w-100" />
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6 wow fadeInRight" data-wow-duration="1s">
                            <div className="appointment_page_text">
                                <form action="#">
                                    <h2>book appointment</h2>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum quo itaque, officiis voluptatem provident inventore nobis voluptas impedit eligendi, officia asperiores ad
                                        autem ratione quam.
                                    </p>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="appoinment_page_input">
                                                <input type="text" placeholder="Patient Name*" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="appoinment_page_input">
                                                <input type="email" placeholder="Email*" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="appoinment_page_input">
                                                <input type="text" placeholder="Phone*" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="appoinment_page_input">
                                                <select className="select_2">
                                                    <option value="">Select Department</option>
                                                    <option value="">Cardiology</option>
                                                    <option value="">Ophthalmology</option>
                                                    <option value="">Pediatric</option>
                                                    <option value="">Radiology</option>
                                                    <option value="">Urology</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="appoinment_page_input">
                                                <select className="select_2">
                                                    <option value="">Select Doctor</option>
                                                    <option value="">Dr. Hasan Mahamud</option>
                                                    <option value="">Dr. Moinuddin</option>
                                                    <option value="">Dr. Afroja Akter</option>
                                                    <option value="">Dr. Mamunur Rasid</option>
                                                    <option value="">Dr. Abdus Salam</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="appoinment_page_input">
                                                <input type="date" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="appoinment_page_input">
                                                <select className="reservation_input select_2">
                                                    <option value="">Select Time</option>
                                                    <option value="">10.00 am to 11.00 am</option>
                                                    <option value="">11.00 am to 12.00 pm</option>
                                                    <option value="">3.00 pm to 4.00 pm</option>
                                                    <option value="">4.00 pm to 5.00 pm</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="appoinment_page_input">
                                                <textarea rows="5" placeholder="Message"></textarea>
                                                <button className="common_btn">book appoinment</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BookAppointment;