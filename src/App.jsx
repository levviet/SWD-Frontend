function App() {

  return (
    <div className="home_2">
  <nav className="navbar navbar-expand-lg main_menu main_menu_2">
    <div className="container">
      <a className="navbar-brand" href="index_2.html"
        ><img src="assets/images/Logo_2.png" alt="logo" className="img-fluid w-100"
      /></a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars bar_icon"></i>
        <i className="far fa-times close_icon"></i>
      </button>
      <div
        className="collapse navbar-collapse justify-content-between"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" href="#"
              >Home <i className="far fa-plus"></i
            ></a>
            <ul className="dropdown">
              <li><a href="index-2.html">Home Style 01</a></li>
              <li><a className="active" href="index_2.html">Home Style 02</a></li>
              <li><a href="index_3.html">Home Style 03</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about.html">about</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="service.html">services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">pages <i className="far fa-plus"></i></a>
            <ul className="dropdown">
              <li><a href="become_doctor.html">become a doctor</a></li>
              <li><a href="blog_details.html">Blog Details</a></li>
              <li><a href="service_details.html">Services Details</a></li>
              <li><a href="doctor.html">doctor</a></li>
              <li><a href="doctor_details.html">doctor details</a></li>
              <li><a href="gallary.html">Gallery</a></li>
              <li><a href="pricing.html">Pricing Plan</a></li>
              <li><a href="payment.html">Payment</a></li>
              <li><a href="dashboard.html">dashboard</a></li>
              <li><a href="error.html">Error/404</a></li>
              <li><a href="faq.html">FAQ’s</a></li>
              <li><a href="sign_in.html">Sign In</a></li>
              <li><a href="sing_up.html">Sign Up</a></li>
              <li><a href="forgot_password.html">Forgot Password</a></li>
              <li><a href="privacy_policy.html">Privacy Policy</a></li>
              <li><a href="terms_condition.html">Terms And Condition</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="blog.html">blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact.html">contact</a>
          </li>
        </ul>
        <ul className="menu_btn menu_btn_2 d-flex flex-wrap align-items-center">
          <li><a href="#" className="menu_sign_in">Sign in</a></li>
          <li><a href="appointment.html" className="common_btn">Let’s talk</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <section
    className="home_two_banner"
    style={{ backgroundImage: "url('assets/images/home_tow_banner_bg.jpg')" }}
  >
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-md-6 col-xl-5 wow fadeInLeft" data-wow-duration="1s">
          <div className="banner_text">
            <h1>Protect Your Health And Take Care <span>Your Health</span></h1>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text
              It has roots in a piece of classical.
            </p>
            <a href="appointment.html" className="common_btn">Get Appointment</a>
          </div>
        </div>
        <div className="col-md-5 col-xl-6 wow fadeInRight" data-wow-duration="1s">
          <div className="banner_img_tow">
            <img
              src="assets/images/home-banner-tow.png"
              alt="img"
              className="img-fluid w-100"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="home_two_categories pt_100 xs_pt_70 pb_100 xs_pb_70">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="common_heading home_tow_heading mb_25">
            <h5>Categories</h5>
            <h2>Browser By Categories</h2>
          </div>
        </div>
      </div>
      <div className="row categories_slider">
        <div className="col-lg-2 wow fadeInUp" data-wow-duration="1s">
          <a href="#" className="categories_wraper">
            <div className="categories_icon">
              <img
                src="assets/images/categories-icon-1.png"
                alt="categories-icon-1"
                className="img-fluid w-100"
              />
            </div>
            <h4>Urology</h4>
            <p>(32 Doctors)</p>
          </a>
        </div>
        <div className="col-lg-2 wow fadeInUp" data-wow-duration="1s">
          <a href="#" className="categories_wraper">
            <div className="categories_icon">
              <img
                src="assets/images/categories-icon-2.png"
                alt="categories-icon-1"
                className="img-fluid w-100"
              />
            </div>
            <h4>Dentist</h4>
            <p>(52 Doctors)</p>
          </a>
        </div>
        <div className="col-lg-2 wow fadeInUp" data-wow-duration="1s">
          <a href="#" className="categories_wraper">
            <div className="categories_icon">
              <img
                src="assets/images/categories-icon-3.png"
                alt="categories-icon-1"
                className="img-fluid w-100"
              />
            </div>
            <h4>Medicine</h4>
            <p>(24 Doctors)</p>
          </a>
        </div>
        <div className="col-lg-2 wow fadeInUp" data-wow-duration="1s">
          <a href="#" className="categories_wraper">
            <div className="categories_icon">
              <img
                src="assets/images/categories-icon-4.png"
                alt="categories-icon-1"
                className="img-fluid w-100"
              />
            </div>
            <h4>Child Care</h4>
            <p>(32 Doctors)</p>
          </a>
        </div>
        <div className="col-lg-2 wow fadeInUp" data-wow-duration="1s">
          <a href="#" className="categories_wraper">
            <div className="categories_icon">
              <img
                src="assets/images/categories-icon-6.png"
                alt="categories-icon-1"
                className="img-fluid w-100"
              />
            </div>
            <h4>Skin</h4>
            <p>(25 Doctors)</p>
          </a>
        </div>
        <div className="col-lg-2 wow fadeInUp" data-wow-duration="1s">
          <a href="#" className="categories_wraper">
            <div className="categories_icon">
              <img
                src="assets/images/categories-icon-5.png"
                alt="categories-icon-1"
                className="img-fluid w-100"
              />
            </div>
            <h4>Cancer</h4>
            <p>(12 Doctors)</p>
          </a>
        </div>
        <div className="col-lg-2 wow fadeInUp" data-wow-duration="1s">
          <a href="#" className="categories_wraper">
            <div className="categories_icon">
              <img
                src="assets/images/categories-icon-6.png"
                alt="categories-icon-1"
                className="img-fluid w-100"
              />
            </div>
            <h4>Skin</h4>
            <p>(25 Doctors)</p>
          </a>
        </div>
      </div>
    </div>
  </section>

  <section className="appoinment_home_2 pb_100 xs_pb_70">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 wow fadeInLeft" data-wow-duration="1s">
          <div className="appoinment_wraper">
            <div className="appoinment_form">
              <div className="common_heading home_tow_heading mb_25">
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
        </div>
        <div className="col-lg-4 wow fadeInRight" data-wow-duration="1s">
          <div className="appoinment_contact">
            <div className="icon_text_wraper">
              <div className="appoinment_icon">
                <img
                  src="assets/images/appointment-man-icon.png"
                  alt="appointment-man-icon"
                />
              </div>
              <div className="appoinment_text">
                <p>Give Us a Call</p>
                <a href="#">+880 13556 56585</a>
              </div>
            </div>
            <p>
              We use as filler text for layouts, non-readability is of great
              importance but because those who do not know how to pursue
              pleasure rationally encounter consequ.
            </p>
            <a href="contact.html" className="common_btn app_button"
              >Contact Us Now</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="about_2 pt_100 xs_pt_70 pb_100 xs_pb_70">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 wow fadeInLeft" data-wow-duration="1s">
          <div className="about_2_img">
            <img src="assets/images/about-our-company.png" alt="" />
          </div>
        </div>
        <div className="col-lg-6 wow fadeInRight" data-wow-duration="1s">
          <div className="about_2_text">
            <div className="common_heading home_tow_heading">
              <h5>Who We Are</h5>
              <h2>About Our Company <span>Since 1998</span></h2>
              <p>
                We use as filler text for layouts, non-readability is of great
                importance but because those who do not know how to pursue
                pleasure rationally encounter consequences that are extremely
                painful. Nor again is there anyone who loves or pursues or
                desires to obtain.
              </p>
              <p>
                when our power of choice is untrammeled and when nothing
                prevents our being able to do what we like best, every pleasure
                is to be welcomed and every pain avoided. But in certain
                circumstances
              </p>
            </div>
            <h4>Max Conversion</h4>
            <div className="about_us_signature">
              <img
                src="assets/images/signature.png"
                alt="img"
                className="img-fluid w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    className="service_2 pt_100 xs_pt_70 pb_100 xs_pb_70"
    style={{ backgroundImage: "url('assets/images/medical-service-bg.jpg')" }}

  >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="common_heading home_tow_heading mb_15">
            <h5>our service</h5>
            <h2>our madical service</h2>
          </div>
        </div>
      </div>
      <div className="row medical_service_slider">
        <div className="col-lg-3 wow fadeInUp" data-wow-duration="1s">
          <div className="single_service_2">
            <div className="item_img">
              <img src="assets/images/our-medical-service-item-one.jpg" alt="" />
              <div className="icon">
                <img
                  className="img-fluid w-100"
                  src="assets/images/medical-service-icon-one.png"
                  alt=""
                />
              </div>
            </div>
            <div className="item_text">
              <a href="#" className="heading">Online Monitoring</a>
              <p>
                Lorem ipsum dolor sit amet conse adipiscelit, sed do eiusmod
                tempo didunt ut labore.
              </p>
              <a href="#" className="link">read more</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 wow fadeInUp" data-wow-duration="1s">
          <div className="single_service_2">
            <div className="item_img">
              <img src="assets/images/our-medical-service-item-two.jpg" alt="" />
              <div className="icon">
                <img
                  className="img-fluid w-100"
                  src="assets/images/medical-service-icon-two.png"
                  alt=""
                />
              </div>
            </div>
            <div className="item_text">
              <a href="#" className="heading">Holter Heart Surgery</a>
              <p>
                Lorem ipsum dolor sit amet conse adipiscelit, sed do eiusmod
                tempo didunt ut labore.
              </p>
              <a href="#" className="link">read more</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 wow fadeInUp" data-wow-duration="1s">
          <div className="single_service_2">
            <div className="item_img">
              <img src="assets/images/our-medical-service-item-three.jpg" alt="" />
              <div className="icon">
                <img
                  className="img-fluid w-100"
                  src="assets/images/medical-service-icon-three.png"
                  alt=""
                />
              </div>
            </div>
            <div className="item_text">
              <a href="#" className="heading">Diagnose & Research</a>
              <p>
                Lorem ipsum dolor sit amet conse adipiscelit, sed do eiusmod
                tempo didunt ut labore.
              </p>
              <a href="#" className="link">read more</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 wow fadeInUp" data-wow-duration="1s">
          <div className="single_service_2">
            <div className="item_img">
              <img src="assets/images/our-medical-service-item-four.jpg" alt="" />
              <div className="icon">
                <img
                  className="img-fluid w-100"
                  src="assets/images/medical-service-icon-one.png"
                  alt=""
                />
              </div>
            </div>
            <div className="item_text">
              <a href="#" className="heading">X-Ray Imaging</a>
              <p>
                Lorem ipsum dolor sit amet conse adipiscelit, sed do eiusmod
                tempo didunt ut labore.
              </p>
              <a href="#" className="link">read more</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 wow fadeInUp" data-wow-duration="1s">
          <div className="single_service_2">
            <div className="item_img">
              <img src="assets/images/our-medical-service-item-three.jpg" alt="" />
              <div className="icon">
                <img
                  className="img-fluid w-100"
                  src="assets/images/medical-service-icon-three.png"
                  alt=""
                />
              </div>
            </div>
            <div className="item_text">
              <a href="#" className="heading">Online Monitoring</a>
              <p>
                Lorem ipsum dolor sit amet conse adipiscelit, sed do eiusmod
                tempo didunt ut labore.
              </p>
              <a href="#" className="link">read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="project_area pt_100 xs_pt_70 pb_100 xs_pb_70">
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-xl-6">
          <div className="common_heading home_tow_heading mb_15">
            <h5>Our Project</h5>
            <h2>Great Work We Done</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-6 wow fadeInUp" data-wow-duration="1s">
          <div className="single_project">
            <img src="assets/images/project-one.jpg" alt="" />
            <div className="text">
              <h3>Scientist medical laboratory</h3>
              <p>Operation Theater</p>
            </div>
            <div className="icon"><img src="assets/images/Vecto-plusr.png" alt="" /></div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-duration="1s">
          <div className="single_project">
            <img src="assets/images/project-tow.jpg" alt="" />
            <div className="text">
              <h3>Scientist medical laboratory</h3>
              <p>Operation Theater</p>
            </div>
            <div className="icon"><img src="assets/images/Vecto-plusr.png" alt="" /></div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-duration="1s">
          <div className="single_project">
            <img src="assets/images/project-three.jpg" alt="" />
            <div className="text">
              <h3>Scientist medical laboratory</h3>
              <p>Operation Theater</p>
            </div>
            <div className="icon"><img src="assets/images/Vecto-plusr.png" alt="" /></div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-duration="1s">
          <div className="single_project">
            <img src="assets/images/project-four.jpg" alt="" />
            <div className="text">
              <h3>Scientist medical laboratory</h3>
              <p>Operation Theater</p>
            </div>
            <div className="icon"><img src="assets/images/Vecto-plusr.png" alt="" /></div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-duration="1s">
          <div className="single_project">
            <img src="assets/images/project-five.jpg" alt="" />
            <div className="text">
              <h3>Scientist medical laboratory</h3>
              <p>Operation Theater</p>
            </div>
            <div className="icon"><img src="assets/images/Vecto-plusr.png" alt="" /></div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 wow fadeInUp" data-wow-duration="1s">
          <div className="single_project">
            <img src="assets/images/project-six.jpg" alt="" />
            <div className="text">
              <h3>Scientist medical laboratory</h3>
              <p>Operation Theater</p>
            </div>
            <div className="icon"><img src="assets/images/Vecto-plusr.png" alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    className="testimonial_2 pt_100 xs_pt_70 pb_100 xs_pb_70"
    style={{ backgroundImage: "url('assets/images/testimonial-bg.jpg')" }}
  >
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-xl-6">
          <div className="common_heading home_tow_heading mb_40">
            <h5>Testimonial</h5>
            <h2>What Our Patients Said</h2>
          </div>
        </div>
      </div>
      <div className="row testimonail_slider">
        <div className="col-lg-3 wow fadeInUp" data-wow-duration="1s">
          <div className="single_testimonial_2">
            <img src="assets/images/testimonial-one.png" alt="" />
          </div>
        </div>
        <div className="col-lg-3 wow fadeInUp" data-wow-duration="1s">
          <div className="single_testimonial_2">
            <img src="assets/images/testimonial-two.png" alt="" />
          </div>
        </div>
        <div className="col-lg-3 wow fadeInUp" data-wow-duration="1s">
          <div className="single_testimonial_2">
            <img src="assets/images/testimonial-three.png" alt="" />
          </div>
        </div>
        <div className="col-lg-3 wow fadeInUp" data-wow-duration="1s">
          <div className="single_testimonial_2">
            <img src="assets/images/testimonial-one.png" alt="" />
          </div>
        </div>
        <div className="col-lg-3 wow fadeInUp" data-wow-duration="1s">
          <div className="single_testimonial_2">
            <img src="assets/images/testimonial-one.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="team team_2 pt_100 xs_pt_70 pb_100 xs_pb_70">
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-xl-6">
          <div className="common_heading home_tow_heading mb_15">
            <h5>Our Team</h5>
            <h2>Meet Our Team Member</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-duration="1s"
        >
          <div className="single_team_2">
            <div className="image_wraper">
              <img src="assets/images/team-one.png" alt="" />
            </div>
            <div className="team_2_text">
              <a className="title" href="doctor_details.html">Dr. Jon Miller</a>
              <p>Cancer Special</p>
              <div className="social_media">
                <ul>
                  <li>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-pinterest"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-facebook"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-duration="1s"
        >
          <div className="single_team_2">
            <div className="image_wraper">
              <img src="assets/images/team-two.png" alt="" />
            </div>
            <div className="team_2_text">
              <a className="title" href="doctor_details.html">Dr. Jeni Rover</a>
              <p>Gynecologist</p>
              <div className="social_media">
                <ul>
                  <li>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-pinterest"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-facebook"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-duration="1s"
        >
          <div className="single_team_2">
            <div className="image_wraper">
              <img src="assets/images/team-three.png" alt="" />
            </div>
            <div className="team_2_text">
              <a className="title" href="doctor_details.html">Dr. Sohan Deo</a>
              <p>Dentist Speacial</p>
              <div className="social_media">
                <ul>
                  <li>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-pinterest"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-facebook"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-duration="1s"
        >
          <div className="single_team_2">
            <div className="image_wraper">
              <img src="assets/images/team-four.png" alt="" />
            </div>
            <div className="team_2_text">
              <a className="title" href="doctor_details.html">Dr. Sabrina Khan</a>
              <p>Skin Special</p>
              <div className="social_media">
                <ul>
                  <li>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-pinterest"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-facebook"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    className="get_touch_2 pt_100 xs_pt_70 pb_100 xs_pb_70"
    style={{ backgroundImage: "url('assets/images/appointment_bg_2.jpg')" }}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-6 wow fadeInLeft" data-wow-duration="1s">
          <div className="common_heading home_tow_heading mb_15">
            <h5>Get In Touch</h5>
            <h2>Best Medical & Health Care Near Your City</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incid idunt ut labore et dolore.
            </p>
            <a href="#" className="common_btn">Get Appointment</a>
            <a href="#" className="common_btn get_touch_2_btn">Explore More</a>
          </div>
        </div>
        <div className="col-lg-6 wow fadeInRight" data-wow-duration="1s">
          <div className="video_box">
            <img src="assets/images/madifax-logo.png" alt="" className="img-fluid w-100" />
            <a
              className="play_btn venobox vbox-item"
              data-autoplay="true"
              data-vbtype="video"
              href="https://youtu.be/nqye02H_H6I"
            >
              <i className="fas fa-play" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="blog blog_2 pt_100 xs_pt_70 pb_100 xs_pb_70">
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-xl-6">
          <div className="common_heading home_tow_heading mb_20">
            <h5>Latest News</h5>
            <h2>See Our Latest Blog</h2>
          </div>
        </div>
      </div>

      <div className="row">
        <div
          className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp"
          data-wow-duration="1s"
        >
          <div className="single_blog">
            <div className="blog_img">
              <a href="#" className="category">Medical</a>
              <img
                src="assets/images/blog-8.jpg"
                alt="blog img"
                className="img-fluid w-100"
              />
            </div>
            <div className="blog_text">
              <ul className="d-flex flex-wrap blog_date">
                <li><i className="fas fa-user"></i>Admin</li>
                <li><i className="fas fa-calendar-alt"></i>22 june 2023</li>
              </ul>
              <a href="blog_details.html" className="blog_heading"
                >Telehealth Services Are Ready To Help Your Family</a
              >
              <div className="blog_text_icon">
                <a className="blog_link" href="blog_details.html">read more</a>
                <ul className="d-flex flex-wrap blog_react">
                  <li><i className="fas fa-comment-lines"></i>5</li>
                  <li><i className="fas fa-heart"></i>20</li>
                  <li><i className="fas fa-share-alt"></i>15</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp"
          data-wow-duration="1s"
        >
          <div className="single_blog">
            <div className="blog_img">
              <a href="#" className="category blue">Hospital</a>
              <img
                src="assets/images/blog-9.jpg"
                alt="blog img"
                className="img-fluid w-100"
              />
            </div>
            <div className="blog_text">
              <ul className="d-flex flex-wrap blog_date">
                <li><i className="fas fa-user"></i>Admin</li>
                <li><i className="fas fa-calendar-alt"></i>22 june 2023</li>
              </ul>
              <a href="blog_details.html" className="blog_heading"
                >Doccure – Making your clinic painless visit</a
              >
              <div className="blog_text_icon">
                <a className="blog_link" href="blog_details.html">read more</a>
                <ul className="d-flex flex-wrap blog_react">
                  <li><i className="fas fa-comment-lines"></i>5</li>
                  <li><i className="fas fa-heart"></i>20</li>
                  <li><i className="fas fa-share-alt"></i>15</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp"
          data-wow-duration="1s"
        >
          <div className="single_blog">
            <div className="blog_img">
              <a href="#" className="category red">Doctor</a>
              <img
                src="assets/images/blog-10.jpg"
                alt="blog img"
                className="img-fluid w-100"
              />
            </div>
            <div className="blog_text">
              <ul className="d-flex flex-wrap blog_date">
                <li><i className="fas fa-user"></i>Admin</li>
                <li><i className="fas fa-calendar-alt"></i>22 june 2023</li>
              </ul>
              <a href="blog_details.html" className="blog_heading"
                >What are the benefits of Online Doctor Booking</a
              >
              <div className="blog_text_icon">
                <a className="blog_link" href="blog_details.html">read more</a>
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
  </section>

  <section className="company pb_100 xs_pb_50">
    <div className="container">
      <div className="row">
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 wow fadeInUp"
          data-wow-duration="1s"
        >
          <div className="company_img">
            <img src="assets/images/company-one.png" alt="" className="img-fluid w-100" />
          </div>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 wow fadeInUp"
          data-wow-duration="1s"
        >
          <div className="company_img">
            <img src="assets/images/company-two.png" alt="" className="img-fluid w-100" />
          </div>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 wow fadeInUp"
          data-wow-duration="1s"
        >
          <div className="company_img">
            <img
              src="assets/images/company-three.png"
              alt=""
              className="img-fluid w-100"
            />
          </div>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 wow fadeInUp"
          data-wow-duration="1s"
        >
          <div className="company_img">
            <img src="assets/images/company-four.png" alt="" className="img-fluid w-100" />
          </div>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 wow fadeInUp"
          data-wow-duration="1s"
        >
          <div className="company_img">
            <img src="assets/images/company-five.png" alt="" className="img-fluid w-100" />
          </div>
        </div>
        <div
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 wow fadeInUp"
          data-wow-duration="1s"
        >
          <div className="company_img">
            <img src="assets/images/company-one.png" alt="" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </div>
  </section>

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

  <div className="scroll_btn">
    <span><i className="fas fa-arrow-alt-up"></i></span>
  </div>
</div>

  )
}

export default App
