function LeaveReview() {
    return (
        <form className="comment_input_area">
            <h2>Leave a Review</h2>
            <p>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </p>
            <div className="row">
                <div className="col-xl-6">
                    <input type="text" placeholder="Name..." required />
                </div>
                <div className="col-xl-6">
                    <input type="text" placeholder="Email..." required />
                </div>
                <div className="col-xl-12 mt-4 mb-4">
                    <textarea rows="4" placeholder="Write A Comment..."></textarea>
                </div>
                <div className="col-xl-12">
                    <button type="submit" className="common_btn">Submit Now</button>
                </div>
            </div>
        </form>
    );
}

export default LeaveReview;