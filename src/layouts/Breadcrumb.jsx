import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Breadcrumb({title}) {
    return ( 
        <section className="breadcrumb">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb_text">
                                <h1>{title}</h1>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li>{title}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
     );
}

Breadcrumb.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Breadcrumb;