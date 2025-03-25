import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Medicine({data}) {
    const medicine = data;
    return (
        <div className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
            <div className="single_team">
                <div className="team_img">
                    <img src={medicine.image} alt={medicine.name} className="img-fluid w-100" />
                    <div className="team_overlay">
                    </div>
                </div>
                <div className="team_designation none-icon">
                    <h6>{medicine.name}</h6>
                    <p>{medicine.category}</p>
                    <span>{medicine.description}</span>
                    <Link to={`/medicines/${medicine.slug}`}><i className="fal fa-plus"></i></Link>
                </div>
            </div>
        </div>
    );
}

Medicine.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Medicine;