import { useState } from "react";

function PaymentModal() {
    const [successMessage, setSuccessMessage] = useState("");

    const handlePayment = () => {
        setSuccessMessage("Thanh toán thành công!");

        // Đóng modal sau 2 giây
        setTimeout(() => {
            setSuccessMessage("");
            document.getElementById("closeModalBtn").click();
        }, 2000);
    };

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <ul className="modal_iteam">
                        <li>One popular belief, Lorem Ipsum is not simply random.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>To popular belief, Lorem Ipsum is not simply random.</li>
                        <li>Contrary to popular belief, Lorem Ipsum is not simply random.</li>
                    </ul>

                    <form className="modal_form">
                        <div className="single_form">
                            <label>Enter Here</label>
                            <input type="text" placeholder="Enter Here" />
                        </div>
                        <div className="single_form">
                            <label>Enter Here</label>
                            <textarea rows="3" placeholder="Enter Here"></textarea>
                        </div>
                        <div className="single_form">
                            <label>Select Here</label>
                            <select className="select_2">
                                <option value="">Select here</option>
                                <option value="1">Something 1</option>
                                <option value="2">Something 2</option>
                                <option value="3">Something 3</option>
                                <option value="4">Something 4</option>
                            </select>
                        </div>
                    </form>

                    {/* Thông báo thanh toán thành công với chữ lớn hơn */}
                    {successMessage && (
                        <p style={{ 
                            color: "green", 
                            textAlign: "center", 
                            fontWeight: "bold", 
                            fontSize: "24px" // Chữ to hơn
                        }}>
                            {successMessage}
                        </p>
                    )}

                    <div className="modal-footer">
                        <button id="closeModalBtn" type="button" className="modal_closs_btn" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="common_btn" onClick={handlePayment}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentModal;
