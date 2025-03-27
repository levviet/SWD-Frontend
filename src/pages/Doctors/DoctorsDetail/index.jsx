import { useParams } from "react-router-dom";
import Breadcrumb from "@/layouts/Breadcrumb";
import Review from "./_components/Review";
import LeaveReview from "./_components/LeaveReview";
import MakeAnAppointment from "./_components/MakeAnAppointment";

const allDoctors = [
    { id: 1, name: "Dr. John Doe", slug: "dr-john-doe", department: "Cardiology", qualification: "MBBS, MD", image: "assets/images/team-1.jpg" },
    { id: 2, name: "Dr. Sarah Smith", slug: "dr-sarah-smith", department: "Neurology", qualification: "MBBS, PhD", image: "assets/images/team-2.jpg" },
    { id: 3, name: "Dr. Robert Brown", slug: "dr-robert-brown", department: "Dermatology", qualification: "MBBS, MD", image: "assets/images/team-3.jpg" },
    { id: 4, name: "Dr. Emily White", slug: "dr-emily-white", department: "Pediatrics", qualification: "MBBS, MD", image: "assets/images/team-4.jpg" },
    { id: 5, name: "Dr. Michael Johnson", slug: "dr-michael-johnson", department: "Orthopedics", qualification: "MBBS, MS", image: "assets/images/team-3.jpg" },
    { id: 6, name: "Dr. Linda Green", slug: "dr-linda-green", department: "Gynecology", qualification: "MBBS, MS", image: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg" },
    { id: 7, name: "Dr. William Martinez", slug: "dr-william-martinez", department: "Cardiology", qualification: "MBBS, MD", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlIdRGCXzBZGBuE3MzgFyoXT3SfTZSGdKQgA&s" },
    { id: 8, name: "Dr. James Wilson", slug: "dr-james-wilson", department: "ENT", qualification: "MBBS, MS", image: "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg" },
    { id: 9, name: "Dr. Olivia Taylor", slug: "dr-olivia-taylor", department: "Ophthalmology", qualification: "MBBS, MD", image: "https://t3.ftcdn.net/jpg/05/04/25/70/360_F_504257032_jBtwqNdvdMN9Xm6aDT0hcvtxDXPZErrn.jpg" },
    { id: 10, name: "Dr. Benjamin Lee", slug: "dr-benjamin-lee", department: "Psychiatry", qualification: "MBBS, MD", image: "https://i.pinimg.com/736x/2a/0e/8c/2a0e8cb609405d9ca87bc81154b9c443.jpg" },
    { id: 11, name: "Dr. Sophia Clark", slug: "dr-sophia-clark", department: "Pulmonology", qualification: "MBBS, MD", image: "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 12, name: "Dr. Daniel Allen", slug: "dr-daniel-allen", department: "Gastroenterology", qualification: "MBBS, MD", image: "https://snibbs.co/cdn/shop/articles/What_are_the_Challenges_of_Being_a_Doctor.jpg?v=1684314843" },
    { id: 13, name: "Dr. Grace Hill", slug: "dr-grace-hill", department: "Nephrology", qualification: "MBBS, MD", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5XzsHpov1XRSZKMacf1_MUKB-u5br3HP3ug&s" },
    { id: 14, name: "Dr. Henry Scott", slug: "dr-henry-scott", department: "Endocrinology", qualification: "MBBS, MD", image: "https://www.shutterstock.com/image-photo/portrait-asian-female-doctor-wearing-600nw-2502070973.jpg" },
    { id: 15, name: "Dr. Chloe Adams", slug: "dr-chloe-adams", department: "Oncology", qualification: "MBBS, DM", image: "https://plus.unsplash.com/premium_photo-1664475450083-5c9eef17a191?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwZG9jdG9yfGVufDB8fDB8fHww" },
    { id: 16, name: "Dr. Lucas Hall", slug: "dr-lucas-hall", department: "Radiology", qualification: "MBBS, MD", image: "https://media.istockphoto.com/id/523086961/photo/portrait-of-a-smiling-handsome-male-doctor.jpg?s=612x612&w=0&k=20&c=cB3cnru-8TC6iri2J1JDgGiF6e-L50jKghYdckIQqlQ=" },
    { id: 17, name: "Dr. Amelia Young", slug: "dr-amelia-young", department: "Anesthesiology", qualification: "MBBS, MD", image: "https://images.fineartamerica.com/images-medium-large-5/mature-male-doctor-wearing-glasses-science-photo-library.jpg" },
    { id: 18, name: "Dr. Ethan King", slug: "dr-ethan-king", department: "Hematology", qualification: "MBBS, MD", image: "https://t4.ftcdn.net/jpg/02/69/98/99/360_F_269989951_9Gf7PWaRtrpm2EochO3D5WVn22sFZbNZ.jpg" },
    { id: 19, name: "Dr. Ava Walker", slug: "dr-ava-walker", department: "Urology", qualification: "MBBS, MD", image: "https://thumbs.dreamstime.com/b/african-male-doctor-happy-tablet-computer-34481166.jpg" },
    { id: 20, name: "Dr. Nathan Phillips", slug: "dr-nathan-phillips", department: "General Surgery", qualification: "MBBS, MS", image: "https://st4.depositphotos.com/12985790/21800/i/450/depositphotos_218003704-stock-photo-smiling-young-female-doctor-medical.jpg" },
];

function DoctorDetail() {
    const { slug } = useParams();
    const doctor = allDoctors.find((doc) => doc.slug === slug);

    if (!doctor) {
        return <h2 className="text-center mt-5">Bác sĩ không tồn tại</h2>;
    }

    return (
        <>
            <Breadcrumb title={doctor.name} />
            <section className="team_details pt_100 xs_pt_70 pb_100 xs_pb_70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 wow fadeInLeft" data-wow-duration="1s">
                            <div className="row">
                                <div className="col-xl-5 col-md-5 col-lg-5">
                                    <div className="team_details_img">
                                        <img src={doctor.image} alt={doctor.name} className="img-fluid w-100" />
                                    </div>
                                </div>
                                <div className="col-xl-7 col-md-7 col-lg-7">
                                    <div className="team_details_img_text">
                                        <h3>{doctor.name}</h3>
                                        <p>{doctor.qualification}</p>
                                        <p><b>{doctor.department}</b></p>
                                        <p>Reg No: A-36589</p>
                                        <a href="callto:0123456789">Call: +1 (700) 230-0035</a>
                                        <a href="mailto:example@gmail.com">Email: example@gmail.com</a>
                                    </div>
                                </div>
                            </div>

                            <div className="biography">
                                <h3>Biography of {doctor.name}</h3>
                                <div className="biography_text">
                                    <h4 className="mb-3">Educational Background</h4>
                                    <p className="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>

                                    <h4 className="mb-3">Medical Experience & Skills</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
