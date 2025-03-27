import { Link } from "react-router-dom";

function Review() {
    return (
        <div className="comment_area">
            <h2>Total Review (04)</h2>
            <div className="single_comment">
                <div className="comment_img">
                    <img src="/assets/images/comment-1.png" alt="review" className="img-fluid w-100" />
                </div>
                <div className="comment_text">
                    <h4>
                        Robert Smith <span><i className="fal fa-clock"></i>4 hour ago</span>
                    </h4>
                    <span className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </span>
                    <p>But the majority have suffered alteration in some form, by injected humour, or randomi sed its wordsn look even slightly believable.</p>
                    <Link to=""><i className="fal fa-reply-all"></i>reply</Link>
                </div>
            </div>
            <div className="single_comment commant_reply">
                <div className="comment_img">
                    <img src="/assets/images/comment-2.png" alt="review" className="img-fluid w-100" />
                </div>
                <div className="comment_text">
                    <h4>
                        Steven Smith <span><i className="fal fa-clock" aria-hidden="true"></i>1 hour ago</span>
                    </h4>
                    <span className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </span>
                    <p>But the majority have suffered alteration in some form, by injected humour, or randomi sed its wordsn look even slightly believable.</p>
                    <Link to=""><i className="fal fa-reply-all"></i>reply</Link>
                </div>
            </div>
            <div className="single_comment">
                <div className="comment_img">
                    <img src="/assets/images/comment-3.png" alt="review" className="img-fluid w-100" />
                </div>
                <div className="comment_text">
                    <h4>
                        Deni Rover<span><i className="fal fa-clock" aria-hidden="true"></i> 6 hour ago</span>
                    </h4>
                    <span className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </span>
                    <p>But the majority have suffered alteration in some form, by injected humour, or randomi sed its wordsn look even slightly believable.</p>
                    <Link to=""><i className="fal fa-reply-all"></i>reply</Link>
                </div>
            </div>
            <div className="single_comment">
                <div className="comment_img">
                    <img src="/assets/images/comment-1.png" alt="review" className="img-fluid w-100" />
                </div>
                <div className="comment_text">
                    <h4>
                        Robert Smith <span><i className="fal fa-clock" aria-hidden="true"></i>4 hour ago</span>
                    </h4>
                    <span className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </span>
                    <p>But the majority have suffered alteration in some form, by injected humour, or randomi sed its wordsn look even slightly believable.</p>
                    <Link to=""><i className="fal fa-reply-all"></i>reply</Link>
                </div>
            </div>
        </div>
    );
}

export default Review;