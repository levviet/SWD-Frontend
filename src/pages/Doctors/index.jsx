import Doctor from "@/components/Doctor";
import Breadcrumb from "@/layouts/Breadcrumb";

function Doctors() {
    const doctors = [
        {
            id: 1,
            name: "Dr. John Doe",
            department: "Cardiology",
            qualification: "MBBS, MD",
            image: "assets/images/team-1.jpg",
        },
        {
            id: 2,
            name: "Dr. John Doe",
            department: "Cardiology",
            qualification: "MBBS, MD",
            image: "assets/images/team-2.jpg",
        },
        {
            id: 3,
            name: "Dr. John Doe",
            department: "Cardiology",
            qualification: "MBBS, MD",
            image: "assets/images/team-3.jpg",
        },
        {
            id: 4,
            name: "Dr. John Doe",
            department: "Cardiology",
            qualification: "MBBS, MD",
            image: "assets/images/team-4.jpg",
        },
        {
            id: 5,
            name: "Dr. John Doe",
            department: "Cardiology",
            qualification: "MBBS, MD",
            image: "assets/images/team-3.jpg",
        },
        {
            id: 6,
            name: "Dr. John Doe",
            department: "Cardiology",
            qualification: "MBBS, MD",
            image: "assets/images/team-4.jpg",
        },
    ]
    return (
        <>
            <Breadcrumb title="Doctors" />

            <section className="team_page pt_75 xs_pt_45 pb_100 xs_pb_70">
                <div className="container">
                    <div className="row">
                       {doctors.map((doctor) => (
                           <Doctor key={doctor.id} data={doctor} />
                       ))}
                    </div>
                    <div className="row mt_60">
                        <div className="col-12">
                            <div id="pagination">
                                <nav aria-label="...">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item">
                                            <a className="page-link" href="#"><i className="far fa-angle-double-left"></i></a>
                                        </li>
                                        <li className="page-item"><a className="page-link active" href="#">01</a></li>
                                        <li className="page-item"><a className="page-link" href="#">02</a></li>
                                        <li className="page-item"><a className="page-link" href="#">03</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#"><i className="far fa-angle-double-right"></i></a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Doctors;