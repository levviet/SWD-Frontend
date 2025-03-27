import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Disease({data}) {
    const disease = data;
    return (
        <div className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
            <div className="single_team">
                <div className="team_img">
                    <img src={disease.image} alt={disease.name} className="img-fluid w-100" />
                    <div className="team_overlay">
                    </div>
                </div>
                <div className="team_designation none-icon">
                    <h6>{disease.name}</h6>
                    <p>{disease.category}</p>
                    <span>{disease.description}</span>
                    <Link to={`/diseases/${disease.slug}`}><i className="fal fa-plus"></i></Link>
                </div>
            </div>
        </div>
    );
}

Disease.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Disease;