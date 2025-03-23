import { Link } from 'react-router-dom';
import Breadcrumb from '@/layouts/Breadcrumb';
import Doctor from "@/components/Doctor";
function About() {
        const doctors = [
        {
            id: 1,
            name: "Dr. John Doe",
            department: "Cardiology",
            qualification: "MBBS, MD",
            image: "assets/images/team-1.jpg",
        },
        {
            id: 2,
            name: "Dr. John Doe",
            department: "Cardiology",
            qualification: "MBBS, MD",
            image: "assets/images/team-2.jpg",
        },
        {
            id: 3,
            name: "Dr. John Doe",
            department: "Cardiology",
            qualification: "MBBS, MD",
            image: "assets/images/team-3.jpg",
        },
        {
            id: 4,
            name: "Dr. John Doe",
            department: "Cardiology",
            qualification: "MBBS, MD",
            image: "assets/images/team-4.jpg",
        },
    ]

    return (
        <>
            <Breadcrumb title="About Us" />

            <section className="about_page">
                <div className="about pt_100 xs_pt_70 pb_100 xs_pb_70">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-sm-9 col-lg-5 col-md-7 wow fadeInLeft" data-wow-duration="1s">
                                <div className="about_img">
                                    <div className="about_img_1">
                                        <img src="/assets/images/about-img1.jpg" alt="about img" className="img-fluid w-100" />
                                    </div>
                                    <div className="about_img_2">
                                        <img src="/assets/images/about_img2.jpg" alt="about img" className="img-fluid w-100" />
                                        <a className="play_btn venobox" data-autoplay="true" data-vbtype="video" href="https://youtu.be/nqye02H_H6I">
                                            <i className="fas fa-play" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-sm-12 col-lg-7 wow fadeInRight" data-wow-duration="1s">
                                <div className="common_heading">
                                    <h5>about us</h5>
                                    <h2>The Great Place of Medical Hospital Center.</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum susp endisse ultrices gravida tempor
                                        incididu ut labore et dolore magna aliqua. Quis ipsum susp endisse ultrices gravida.
                                    </p>
                                </div>

                                <ul className="about_iteam d-flex flex-wrap">
                                    <li>Ambulance Services</li>
                                    <li>Oxizen on Wheel</li>
                                    <li>Pharmacy on Clinic</li>
                                    <li>On duty Doctors</li>
                                    <li>24/7 Medical Emergency</li>
                                </ul>
                                <a href="about.html" className="common_btn">Discover More</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about_counter">
                    <div className="container">
                        <div className="about_counter_bg" style={{ background: 'url(/assets/images/counter_bg.jpg)' }}>
                            <div className="row">
                                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-duration="1s">
                                    <div className="single_counter">
                                        <span className="counter_icon">
                                            <i className="fas fa-users"></i>
                                        </span>
                                        <h4 className="counter">950</h4>
                                        <p>Happy Patients</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-duration="1s">
                                    <div className="single_counter">
                                        <span className="counter_icon icon2">
                                            <i className="fas fa-user-md"></i>
                                        </span>
                                        <h4 className="counter">256</h4>
                                        <p>Expert Doctors</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-duration="1s">
                                    <div className="single_counter">
                                        <span className="counter_icon icon3">
                                            <i className="fas fa-trophy-alt"></i>
                                        </span>
                                        <h4 className="counter">90</h4>
                                        <p>Award Wining</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-duration="1s">
                                    <div className="single_counter last_counter">
                                        <span className="counter_icon icon4">
                                            <i className="far fa-stars"></i>
                                        </span>
                                        <h4 className="counter">4.9</h4>
                                        <p>Average Rating</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="appoinment pt_185 xs_pt_70 pb_100 xs_pb_70">
                    <div className="container">
                      <div className="appoinment_bg" style={{ backgroundImage: 'url(/assets/images/appointment_bg.jpg)' }}>

                            <div className="appoinment_overlay">
                                <div className="row">
                                    <div className="col-xl-7 col-lg-7 wow fadeInLeft" data-wow-duration="1s">
                                        <div className="appoinment_form">
                                            <div className="common_heading mb_30">
                                                <h5>Appointment</h5>
                                                <h2>Apply For Free Now</h2>
                                            </div>
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <div className="appoinment_form_input">
                                                            <input type="text" placeholder="Patient Name*" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-sm-6">
                                                        <div className="appoinment_form_input">
                                                            <input type="email" placeholder="Email*" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-sm-6">
                                                        <div className="appoinment_form_input">
                                                            <input type="email" placeholder="Email Address*" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-sm-6">
                                                        <div className="appoinment_form_input">
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
                                                    <div className="col-lg-6 col-sm-6">
                                                        <div className="appoinment_form_input">
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
                                                    <div className="col-lg-6 col-sm-6">
                                                        <div className="appoinment_form_input">
                                                            <input type="date" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-sm-6">
                                                        <div className="appoinment_form_input">
                                                            <select className="reservation_input select_2">
                                                                <option value="">Select Time</option>
                                                                <option value="">10.00 am to 11.00 am</option>
                                                                <option value="">11.00 am to 12.00 pm</option>
                                                                <option value="">3.00 pm to 4.00 pm</option>
                                                                <option value="">4.00 pm to 5.00 pm</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-sm-6">
                                                        <div className="appoinment_form_input">
                                                            <button className="common_btn">book appoinment</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-xl-4">
                                        <div className="appoinment_img">
                                            <img src="/assets/images/appoinment_img.png" alt="appointment" className="img-fluid w-100" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

               <div className="process pt_100 xs_pt_70 pb_95 xs_pb_65" style={{ background: 'url(/assets/images/work_bg.jpg)' }}>

                    <div className="container process_shape">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="common_heading center_heading mb_25">
                                    <h5>How We Work</h5>
                                    <h2>Our Working Process</h2>
                                </div>
                            </div>
                        </div>
                        <div className="work_process_area">
                            <div className="row">
                                <div className="col-xl-3 col-sm-6 col-lg-3 wow fadeInUp" data-wow-duration="1s">
                                    <div className="single_process">
                                        <span className="process_number num1">01</span>
                                        <h4>fill the form</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur ipsam adipisicing elit. Rem quia officia quaerat ipsam!</p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 col-lg-3 wow fadeInUp" data-wow-duration="1s">
                                    <div className="single_process">
                                        <span className="process_number num2">02</span>
                                        <h4>Book an Appointment</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur ipsam adipisicing elit. Rem quia officia quaerat ipsam!</p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 col-lg-3 wow fadeInUp" data-wow-duration="1s">
                                    <div className="single_process">
                                        <span className="process_number num3">03</span>
                                        <h4>Check-Ups</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur ipsam adipisicing elit. Rem quia officia quaerat ipsam!</p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 col-lg-3 wow fadeInUp" data-wow-duration="1s">
                                    <div className="single_process">
                                        <span className="process_number num4">04</span>
                                        <h4>Get Reports</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur ipsam adipisicing elit. Rem quia officia quaerat ipsam!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="team pt_100 xs_pt_70 pb_100 xs_pb_70">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="common_heading center_heading mb_25">
                                    <h5>our team</h5>
                                    <h2>Meet Our expert doctor</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                           {doctors.map((doctor) => (
                                                      <Doctor key={doctor.id} data={doctor} />
                                                  ))}
                            <div className="col-12 text-center mt_40">
                                <Link to="" className="common_btn">view more</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="helpline pt_100 xs_pt_70 pb_100 xs_pb_70">
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
                </div>

                <div className="blog pt_100 xs_pt_70 pb_100 xs_pb_70">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="common_heading center_heading mb_15">
                                    <h5>Latest News</h5>
                                    <h2>Latest Post & Articles</h2>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
                                <div className="single_blog">
                                    <div className="blog_img">
                                        <a href="#" className="category">Medical</a>
                                        <img src="/assets/images/blog-1.jpg" alt="blog img" className="img-fluid w-100" />
                                    </div>
                                    <div className="blog_text">
                                        <ul className="d-flex flex-wrap blog_date">
                                            <li><i className="fas fa-user"></i>Admin</li>
                                            <li><i className="fas fa-calendar-alt"></i>22 june 2023</li>
                                        </ul>
                                        <a href="blog_details.html" className="blog_heading">Telehealth Services Are Ready To Help Your Family</a>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing. Veritatis consectetur ipsum.</p>
                                        <div className="blog_text_icon">
                                            <a className="blog_link" href="blog_details.html">read more <i className="far fa-long-arrow-right"></i></a>
                                            <ul className="d-flex flex-wrap blog_react">
                                                <li><i className="fas fa-comment-lines"></i>5</li>
                                                <li><i className="fas fa-heart"></i>20</li>
                                                <li><i className="fas fa-share-alt"></i>15</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
                                <div className="single_blog">
                                    <div className="blog_img">
                                        <a href="#" className="category blue">Hospital</a>
                                        <img src="/assets/images/blog-2.jpg" alt="blog img" className="img-fluid w-100" />
                                    </div>
                                    <div className="blog_text">
                                        <ul className="d-flex flex-wrap blog_date">
                                            <li><i className="fas fa-user"></i>Admin</li>
                                            <li><i className="fas fa-calendar-alt"></i>22 june 2023</li>
                                        </ul>
                                        <a href="blog_details.html" className="blog_heading">Doccure – Making your clinic painless visit</a>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing. Veritatis consectetur amet.</p>
                                        <div className="blog_text_icon">
                                            <a className="blog_link" href="blog_details.html">read more <i className="far fa-long-arrow-right"></i></a>
                                            <ul className="d-flex flex-wrap blog_react">
                                                <li><i className="fas fa-comment-lines"></i>5</li>
                                                <li><i className="fas fa-heart"></i>20</li>
                                                <li><i className="fas fa-share-alt"></i>15</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
                                <div className="single_blog">
                                    <div className="blog_img">
                                        <a href="#" className="category red">Doctor</a>
                                        <img src="/assets/images/blog-3.jpg" alt="blog img" className="img-fluid w-100" />
                                    </div>
                                    <div className="blog_text">
                                        <ul className="d-flex flex-wrap blog_date">
                                            <li><i className="fas fa-user"></i>Admin</li>
                                            <li><i className="fas fa-calendar-alt"></i>22 june 2023</li>
                                        </ul>
                                        <a href="blog_details.html" className="blog_heading">What are the benefits of Online Doctor Booking</a>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing. Veritatis consectetur.</p>
                                        <div className="blog_text_icon">
                                            <a className="blog_link" href="blog_details.html">read more <i className="far fa-long-arrow-right"></i></a>
                                            <ul className="d-flex flex-wrap blog_react">
                                                <li><i className="fas fa-comment-lines"></i>5</li>
                                                <li><i className="fas fa-heart"></i>20</li>
                                                <li><i className="fas fa-share-alt"></i>15</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section></>

    );
}

export default About;