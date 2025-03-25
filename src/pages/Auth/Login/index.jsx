import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const [formErrors, setFormErrors] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setFormErrors({ ...formErrors, name: "" });
    }

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (!formData.email) {
            newErrors.email = "Please enter your email address."
            valid = false;
        }

        if (!formData.password) {
            newErrors.password = "Please enter your password.";
            valid = false;
        } else if (formData.password.length < 6) {
            newErrors.email = "Password must be at least 6 characters.";
            valid = false;
        } else if (formData.password.length > 20) {
            newErrors.email = "Password must be less than 20 characters.";
            valid = false;
        }

        setFormErrors(newErrors);
        return valid;
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                navigate("/");
            }, 1000)
        }
    }

    return (
        <section className="sign_up pt_100 xs_pt_70 pb_100 xs_pb_70">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-5 col-md-9 col-lg-6 wow fadeInUp">
                        <div className="sign_up_form">
                            <Link to="/" className="sign_up_logo">
                                <img src="/assets/images/footer_logo.png" alt="logo" className="img-fluid w-100" />
                            </Link>
                            <form onSubmit={handleLogin}>
                                <div className="mb-3">
                                    <input type="email" placeholder="Email" className="mb-0" name="email" value={formData.email} onChange={handleChange} />
                                    {formErrors.email && <span className="text-danger">{formErrors.email}</span>}
                                </div>
                                <div className="mb-3">
                                    <input type="password" placeholder="Password" className="mb-0" name="password" value={formData.password} onChange={handleChange} />
                                    {formErrors.password && <span className="text-danger">{formErrors.password}</span>}
                                </div>
                                <div className="signup_check_area">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault"> Remember me </label>
                                    </div>
                                    <Link to="">Forget Password?</Link>
                                </div>

                                <button type="submit" className="common_btn w-100 d-flex align-items-center justify-content-center gap-1" disabled={loading}>
                                    {loading && <span className="spinner-border spinner-border-sm text-white"></span>} Login
                                    </button>
                            </form>

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
                            <p className="tf_new_account">Don’t Have An Account? <Link to="/register">Register now</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Login;