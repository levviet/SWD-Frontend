import { Link } from "react-router-dom";

function Register() {
    return ( 
        <section className="sign_up pt_100 xs_pt_70 pb_100 xs_pb_70">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-xl-5 col-md-9 col-lg-6 wow fadeInUp" data-wow-duration="1s">
                <div className="sign_up_form">
                    <Link to="/" className="sign_up_logo">
                        <img src="/assets/images/footer_logo.png" alt="logo" className="img-fluid w-100" />
                    </Link>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <button className="common_btn w-100">Register Now</button>

                    <p className="or">or</p>

                    <ul className="sign_option d-flex flex-wrap">
                        <li>
                            <Link to=""><img src="/assets/images/Facebook-img.jpg" alt="others login" className="img-fluid w-100" /></Link>
                        </li>
                        <li>
                            <Link to=""><img src="/assets/images/twtter-img.jpg" alt="others login" className="img-fluid w-100" /></Link>
                        </li>
                        <li>
                            <Link to=""><img src="/assets/images/Google-img.jpg" alt="others login" className="img-fluid w-100" /></Link>
                        </li>
                    </ul>
                    <p className="tf_new_account">Have An Account? <Link to="/login">Login now</Link></p>
                </div>
            </div>
        </div>
    </div>
</section>

     );
}

export default Register;