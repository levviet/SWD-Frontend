function Helpline() {
    return (
        <section className="helpline pt_100 xs_pt_70 pb_100 xs_pb_70">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xxl-6 col-lg-6 col-xl-6 wow fadeInLeft" data-wow-duration="1s">
                        <div className="common_heading">
                            <h5>Emergency helpline</h5>
                            <h2>Need Emergency Contact</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum susp endisse ultrices gravida tempor
                                incididu ut labore.
                            </p>
                        </div>
                        <ul className="helpline_iteam">
                            <li>24/7 Contact Our Hospital.</li>
                            <li>24 hours Open Our Hospital.</li>
                            <li>Emergency Contact Our Phone Number.</li>
                        </ul>

                        <ul className="d-flex flex-wrap helpline_contact">
                            <li>
                                <span><i className="fas fa-phone-alt"></i></span>
                                <div className="helpline_contact_text">
                                    <p>Phone Number</p>
                                    <a href="callto:123456789">+880 13 2525 065</a>
                                </div>
                            </li>
                            <li>
                                <span><i className="fas fa-comment-alt-lines"></i></span>
                                <div className="helpline_contact_text">
                                    <p>Quick Your Email</p>
                                    <a href="mailto:example@gmail.com">help.info@gmail.com</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xxl-5 col-lg-6 col-xl-6 wow fadeInRight" data-wow-duration="1s">
                        <div className="helpline_img">
                            <img src="/assets/images/helpline_img.png" alt="help img" className="img-fluid w-100" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Helpline;