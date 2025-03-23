function Footer() {
    return (
        <footer
            className="footer_two pt_100 xs_pt_70"
            style={{ backgroundImage: "url('assets/images/footer-2-bg.png')" }}
        >
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-md-4 col-lg-3">
                        <div className="footer_top_left">
                            <img
                                src="assets/images/footer-top-left-image.png"
                                alt=""
                                className="img-fluid w-100"
                            />
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <div className="footer_top_right_text">
                            <h2>We Always <span>Ready For Your Health</span></h2>
                            <a href="#" className="common_btn">Get Appointment</a>
                        </div>
                    </div>
                </div>
                <div className="row mt_100 xs_mt_70">
                    <div className="col-lg-4">
                        <div className="footer_left">
                            <a href="index-2.html" className="tf_footer_logo">
                                <img
                                    src="assets/images/footer-logo-white.png"
                                    alt="MediFax"
                                    className="img-fluid w-100"
                                />
                            </a>
                            <p>
                                There are to popular belie Lorem is Ipsum is not simply random.
                            </p>
                            <div className="footer_mail">
                                <span>Hello to :</span>
                                <a href="#">support@gmail.com</a>
                            </div>
                            <div className="tf_footer_icon d-flex flex-wrap align-items-center">
                                <span>Follow :</span>
                                <ul className="d-flex flex-wrap">
                                    <li>
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-md-4">
                        <div className="quick_link">
                            <h5>Company</h5>
                            <ul>
                                <li><a href="index-2.html">home</a></li>
                                <li><a href="about.html">about us</a></li>
                                <li><a href="service.html">our service</a></li>
                                <li><a href="team.html">our team</a></li>
                                <li><a href="contact.html">contact us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-md-3">
                        <div className="quick_link">
                            <h5>Important</h5>
                            <ul>
                                <li><a href="#">Our Process</a></li>
                                <li><a href="#">Appointment</a></li>
                                <li><a href="faq.html">faq</a></li>
                                <li><a href="privacy.html">Privacy Policy</a></li>
                                <li><a href="terms_condition.html">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-md-3">
                        <div className="quick_link">
                            <h5>Quick Link</h5>
                            <ul>
                                <li><a href="#">Why Choose Us</a></li>
                                <li><a href="priceing.html">Pricing Plan</a></li>
                                <li><a href="blog.html">News & Articles</a></li>
                                <li><a href="sing_up.html">login</a></li>
                                <li><a href="#">Subscribe</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-md-3">
                        <div className="address quick_link">
                            <h5>Official Info</h5>
                            <div className="tf_footer_address">
                                <p>
                                    <i className="fas fa-map-marker-alt"></i>
                                    2767 Sunrise Street, NY 1002, USA
                                </p>
                                <a href="#">
                                    <i className="fas fa-envelope"></i>
                                    company@gmail.com
                                </a>
                                <a href="#">
                                    <i className="fas fa-phone-alt"></i>
                                    +965548547564
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt_70 xs_mt_45 sm_margin">
                    <div className="col-xl-12">
                        <div className="copyright d-flex flex-wrap justify-content-between">
                            <p>2023 MadiFax. All rights reserved.</p>
                            <ul className="d-flex flex-wrap">
                                <li><a href="terms_condition.html">Terms and conditions</a></li>
                                <li><a href="#">Cookies</a></li>
                                <li><a href="privacy.html">Privacy policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;