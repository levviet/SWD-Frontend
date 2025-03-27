import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookAppointment() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        department: "",
        doctor: "",
        date: "",
        time: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name) newErrors.name = "Vui lòng nhập họ tên!";
        if (!formData.email) newErrors.email = "Vui lòng nhập email!";
        if (!formData.phone) newErrors.phone = "Vui lòng nhập số điện thoại!";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setSuccessMessage("Lịch hẹn của bạn đã được đặt thành công!");
            setTimeout(() => navigate("/payment"), 2000); // Chuyển hướng sau 2 giây
        }
    };

    return (
        <section className="appointment_page pt_100 xs_pt_65 pb_100 xs_pb_70">
            <div className="container">
                <div className="appointment_content">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 wow fadeInLeft" data-wow-duration="1s">
                            <div className="appointment_page_img">
                                <img
                                    src="/assets/images/appoinment_page_img.png"
                                    alt="appointment"
                                    className="img-fluid w-100"
                                />
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6 wow fadeInRight" data-wow-duration="1s">
                            <div className="appointment_page_text">
                                <form onSubmit={handleSubmit}>
                                    <h2>Book Appointment</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quo itaque, officiis voluptatem
                                        provident inventore nobis voluptas impedit eligendi.
                                    </p>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="appoinment_page_input">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Patient Name*"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                                {errors.name && <p className="error-text">{errors.name}</p>}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="appoinment_page_input">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email*"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                                {errors.email && <p className="error-text">{errors.email}</p>}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="appoinment_page_input">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    placeholder="Phone*"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                                {errors.phone && <p className="error-text">{errors.phone}</p>}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="appoinment_page_input">
                                                <select name="department" className="select_2" value={formData.department} onChange={handleChange}>
                                                    <option value="">Select Department</option>
                                                    <option value="Cardiology">Cardiology</option>
                                                    <option value="Ophthalmology">Ophthalmology</option>
                                                    <option value="Pediatric">Pediatric</option>
                                                    <option value="Radiology">Radiology</option>
                                                    <option value="Urology">Urology</option>
                                                </select>
                                                {errors.department && <p className="error-text">{errors.department}</p>}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="appoinment_page_input">
                                                <select name="doctor" className="select_2" value={formData.doctor} onChange={handleChange}>
                                                    <option value="">Select Doctor</option>
                                                    <option value="Dr. Hasan Mahamud">Dr. Hasan Mahamud</option>
                                                    <option value="Dr. Moinuddin">Dr. Moinuddin</option>
                                                    <option value="Dr. Afroja Akter">Dr. Afroja Akter</option>
                                                    <option value="Dr. Mamunur Rasid">Dr. Mamunur Rasid</option>
                                                    <option value="Dr. Abdus Salam">Dr. Abdus Salam</option>
                                                </select>
                                                {errors.doctor && <p className="error-text">{errors.doctor}</p>}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="appoinment_page_input">
                                                <input
                                                    type="date"
                                                    name="date"
                                                    value={formData.date}
                                                    onChange={handleChange}
                                                />
                                                {errors.date && <p className="error-text">{errors.date}</p>}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="appoinment_page_input">
                                                <select name="time" className="select_2" value={formData.time} onChange={handleChange}>
                                                    <option value="">Select Time</option>
                                                    <option value="10.00 am to 11.00 am">10.00 am to 11.00 am</option>
                                                    <option value="11.00 am to 12.00 pm">11.00 am to 12.00 pm</option>
                                                    <option value="3.00 pm to 4.00 pm">3.00 pm to 4.00 pm</option>
                                                    <option value="4.00 pm to 5.00 pm">4.00 pm to 5.00 pm</option>
                                                </select>
                                                {errors.time && <p className="error-text">{errors.time}</p>}
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="appoinment_page_input">
                                                <textarea
                                                    rows="5"
                                                    name="message"
                                                    placeholder="Message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                />
                                                <button type="submit" className="common_btn">Book Appointment</button>
                                            </div>
                                        </div>
                                    </div>
                                    {successMessage && <p className="success-text">{successMessage}</p>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BookAppointment;
