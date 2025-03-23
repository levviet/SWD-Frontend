import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Doctor({data}) {
    const doctor = data;
    return (
        <div className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
            <div className="single_team">
                <div className="team_img">
                    <img src={doctor.image} alt={doctor.name} className="img-fluid w-100" />
                    <div className="team_overlay">
                        <ul className="team_icon">
                            <li>
                                <Link to="!#"><i className="fab fa-facebook-f"></i></Link>
                            </li>
                            <li>
                                <Link to="!#"><i className="fab fa-twitter"></i></Link>
                            </li>
                            <li>
                                <Link to="!#"><i className="fab fa-whatsapp"></i></Link>
                            </li>
                            <li>
                                <Link to="!#"><i className="fab fa-linkedin-in"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="team_designation">
                    <h6>{doctor.name}</h6>
                    <p>{doctor.department}</p>
                    <span>{doctor.qualification}</span>
                    <Link to={`/doctors/${doctor.id}`}><i className="fal fa-plus"></i></Link>
                </div>
            </div>
        </div>
    );
}

Doctor.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Doctor;