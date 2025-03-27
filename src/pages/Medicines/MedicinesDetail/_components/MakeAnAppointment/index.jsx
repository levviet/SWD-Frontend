import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MakeAnAppointment() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        date: "",
        time: "",
        service: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleMakeAnAppointment = (e) => {
        e.preventDefault();

        // Kiểm tra nếu tất cả các trường đều được điền
        if (!formData.name || !formData.email || !formData.date || !formData.time || !formData.service) {
            setError("Vui lòng điền đầy đủ thông tin trước khi đặt lịch hẹn.");
            return;
        }

        // Hiển thị thông báo thành công (hoặc có thể dùng Toastify để thông báo)
        alert("Lịch hẹn của bạn đã được đặt thành công!");

        // Chuyển hướng đến trang thanh toán
        navigate("/payment");
    };

    return (
        <div className="col-lg-4 wow fadeInRight" data-wow-duration="1s">
            <div className="team_details_sidebar" id="sticky_sidebar">
                <form className="team_details_form" onSubmit={handleMakeAnAppointment}>
                    <h5>Make an Appointment</h5>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <div className="row">
                        <div className="col-xx-6 col-md-6 col-lg-12">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-xx-6 col-md-6 col-lg-12">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-xx-6 col-md-6 col-lg-12">
                            <select name="date" className="select_2" value={formData.date} onChange={handleChange}>
                                <option value="">Select Date</option>
                                <option value="Date 1">Date 1</option>
                                <option value="Date 2">Date 2</option>
                                <option value="Date 3">Date 3</option>
                                <option value="Date 4">Date 4</option>
                                <option value="Date 5">Date 5</option>
                            </select>
                        </div>
                        <div className="col-xx-6 col-md-6 col-lg-12">
                            <select name="time" className="reservation_input select_2" value={formData.time} onChange={handleChange}>
                                <option value="">Select Time</option>
                                <option value="10.00 am to 11.00 am">10.00 am to 11.00 am</option>
                                <option value="11.00 am to 12.00 pm">11.00 am to 12.00 pm</option>
                                <option value="3.00 pm to 4.00 pm">3.00 pm to 4.00 pm</option>
                                <option value="4.00 pm to 5.00 pm">4.00 pm to 5.00 pm</option>
                            </select>
                        </div>
                        <div className="col-xl-12">
                            <select name="service" className="reservation_input select_2" value={formData.service} onChange={handleChange}>
                                <option value="">Select Service</option>
                                <option value="Type Of Service 1">Type Of Service 1</option>
                                <option value="Type Of Service 2">Type Of Service 2</option>
                                <option value="Type Of Service 3">Type Of Service 3</option>
                                <option value="Type Of Service 4">Type Of Service 4</option>
                            </select>
                        </div>
                        <div className="col-xl-12">
                            <button type="submit" className="common_btn w-100">
                                Appointment
                            </button>
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
