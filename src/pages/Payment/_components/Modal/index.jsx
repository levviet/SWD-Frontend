function PaymentModal() {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do isus modsels is mpor incididunt ut labore et dolore magna aliqua. Ut en nim ad minim on there There are many
                        variations of passages of Lorem Ipsum available, but the major adipiscing elit veniam.
                    </p>

                    <ul className="modal_iteam">
                        <li>One popular belief, Lorem Ipsum is not simply random.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>To popular belief, Lorem Ipsum is not simply random.</li>
                        <li>Contrary to popular belief, Lorem Ipsum is not simply random.</li>
                    </ul>

                    <form className="modal_form">
                        <div className="single_form">
                            <label>Enter Something</label>
                            <input type="text" placeholder="Enter Something" />
                        </div>
                        <div className="single_form">
                            <label>Enter Something</label>
                            <textarea rows="3" placeholder="Enter Something"></textarea>
                        </div>
                        <div className="single_form">
                            <label>select Something</label>
                            <select className="select_2">
                                <option value="">Select Something</option>
                                <option value="">Something 1</option>
                                <option value="">Something 2</option>
                                <option value="">Something 3</option>
                                <option value="">Something 4</option>
                            </select>
                        </div>
                    </form>

                    <div className="modal-footer">
                        <button type="button" className="modal_closs_btn" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="common_btn">submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentModal;