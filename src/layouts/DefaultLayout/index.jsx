import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
            <div className="scroll_btn">
                <span><i className="fas fa-arrow-alt-up"></i></span>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default DefaultLayout;