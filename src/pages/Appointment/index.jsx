import { Link } from "react-router-dom";
import Doctor from "@/components/Doctor";
import Helpline from "./_components/Helpline";
import Breadcrumb from '@/layouts/Breadcrumb';
import BookAppointment from "./_components/BookAppointment";

function Appointment() {
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
        
    ]
    return (
        <>
            <Breadcrumb title="Appointment" />

            <BookAppointment />

           <Helpline />

            <section className="team pt_100 xs_pt_70 pb_100 xs_pb_70">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="common_heading center_heading mb_25">
                                <h5>our team</h5>
                                <h2>Meet Our expert doctor</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {doctors.map((doctor) => (
                                                   <Doctor key={doctor.id} data={doctor} />
                                               ))}
                        <div className="col-12 text-center mt_40">
                            <Link to="" className="common_btn">view more</Link>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Appointment;