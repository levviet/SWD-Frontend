import Breadcrumb from "@/layouts/Breadcrumb";
import Review from "./_components/Review";
import LeaveReview from "./_components/LeaveReview";
import MakeAnAppointment from "./_components/MakeAnAppointment";

function DoctorDetail() {
    return (
        <>
            <Breadcrumb title="Dr. Sabrina Khan" />
            <section className="team_details pt_100 xs_pt_70 pb_100 xs_pb_70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 wow fadeInLeft" data-wow-duration="1s">
                            <div className="row">
                                <div className="col-xl-5 col-md-5 col-lg-5">
                                    <div className="team_details_img">
                                        <img src="/assets/images/team-2.jpg" alt="team" className="img-fluid w-100" />
                                    </div>
                                </div>
                                <div className="col-xl-7 col-md-7 col-lg-7">
                                    <div className="team_details_img_text">
                                        <h3>Dr. Sabrina Khan</h3>
                                        <p>MBBS (University of Wyoming).</p>
                                        <p>M.D. of Medicine (Netherland Medical College).</p>
                                        <p><b>Senior Prof. (MBBS, M.D)</b> Netherland Medical College.</p>
                                        <p>Reg No: A-36589</p>
                                        <a href="callto:0123456789">Call: +1 (700) 230-0035</a>
                                        <a href="mailto:example@gmail.com">Email: example@gmail.com</a>
                                    </div>
                                </div>
                            </div>

                            <div className="biography">
                                <h3>Biography of Dr. Sabrina Khan</h3>
                                <div className="biography_text">
                                    <h4 className="mb-3">Educational Background</h4>
                                    <p className="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolor magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>

                                    <h4 className="mb-3">Medical Experience & Skills</h4>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolor magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>

                            <Review />

                            <LeaveReview />
                        </div>
                        <MakeAnAppointment />
                    </div>
                </div>
            </section>
        </>
    );
}

export default DoctorDetail;