import { useNavigate } from "react-router-dom";

function MakeAnAppointment() {
    const navigate = useNavigate();
    const handleMakeAnAppointment = () => {
        navigate("/payment");
    }
    return (
        <div className="col-lg-4 wow fadeInRight" data-wow-duration="1s">
            <div className="team_details_sidebar" id="sticky_sidebar">
                <form className="team_details_form">
                    <h5>Make an Appointment</h5>
                    <div className="row">
                        <div className="col-xx-6 col-md-6 col-lg-12">
                            <input type="text" placeholder="Name" />
                        </div>
                        <div className="col-xx-6 col-md-6 col-lg-12">
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="col-xx-6 col-md-6 col-lg-12">
                            <select className="select_2">
                                <option value="">Select Date</option>
                                <option value="">Date 1</option>
                                <option value="">Date 2</option>
                                <option value="">Date 3</option>
                                <option value="">Date 4</option>
                                <option value="">Date 5</option>
                            </select>
                        </div>
                        <div className="col-xx-6 col-md-6 col-lg-12">
                            <select className="reservation_input select_2">
                                <option value="">Select Time</option>
                                <option value="">10.00 am to 11.00 am</option>
                                <option value="">11.00 am to 12.00 pm</option>
                                <option value="">3.00 pm to 4.00 pm</option>
                                <option value="">4.00 pm to 5.00 pm</option>
                            </select>
                        </div>
                        <div className="col-xl-12">
                            <select className="reservation_input select_2">
                                <option value="">Select Time</option>
                                <option value="">Type Of Service</option>
                                <option value="">Type Of Service</option>
                                <option value="">Type Of Service</option>
                                <option value="">Type Of Service</option>
                            </select>
                        </div>
                        <div className="col-xl-12">
                            <button onClick={handleMakeAnAppointment} className="common_btn w-100">Appointment</button>
                        </div>
                    </div>
                </form>
                <div className="team_details_timeing">
                    <h5>Opening Time</h5>
                    <p className="d-flex justify-content-between">Friday - Saturday <span>7.30 am - 4.00 pm</span></p>
                    <p className="d-flex justify-content-between">Sunday - Monday<span>10.30 am - 12.00 pm</span></p>
                    <p className="d-flex justify-content-between">Tuesday<span>Closed</span></p>
                    <p className="d-flex justify-content-between">Wednesday<span>8.30 am - 5.00 pm</span></p>
                    <p className="last_date d-flex justify-content-between">Thursday<span>7.30 am - 4.00 pm</span></p>
                </div>
            </div>
        </div>
    );
}

export default MakeAnAppointment;