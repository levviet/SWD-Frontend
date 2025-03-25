import Breadcrumb from "@/layouts/Breadcrumb";
import Medicine from "@/components/Medicine";

function Medicines() {
    // Thay data o day
    const medicines = [
        {
            id: 1,
            name: "Paracetamol (Acetaminophen)",
            slug: "dr.john-doe",
            category: "Cardiology",
            description: "Used to relieve pain and reduce fever. Commonly used for headaches, muscle aches, colds, and fevers.",
            image: "https://medshadow.org/wp-content/uploads/2012/11/medicine-883x577.jpeg",
        },
        {
            id: 2,
            name: "Ibuprofen",
            slug: "dr.john-doe",
            category: "Cardiology",
            description: "A nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain, inflammation, and fever. Often used for arthritis, menstrual cramps, and injuries.",
            image: "https://images.newscientist.com/wp-content/uploads/2019/06/18153152/medicineshutterstock_1421041688.jpg",
        },
        {
            id: 3,
            name: "Amoxicillin",
            slug: "dr.john-doe",
            category: "Cardiology",
            description: "A widely used antibiotic for treating bacterial infections, such as ear infections, pneumonia, and urinary tract infections.",
            image: "https://drugtodayonline.com/assets/front/images/article_images/th-1712147282.jpeg",
        },
        {
            id: 4,
            name: "Omeprazole",
            slug: "dr.john-doe",
            category: "Cardiology",
            description: "A proton pump inhibitor (PPI) that reduces stomach acid production, used to treat acid reflux and ulcers.",
            image: "https://assets.telegraphindia.com/telegraph/2022/Aug/1661017334_medicine.jpg",
        },
        {
            id: 5,
            name: "Metformin",
            slug: "dr.john-doe",
            category: "Cardiology",
            description: "A medication used to manage type 2 diabetes by helping control blood sugar levels.",
            image: "https://wwwnc.cdc.gov/travel/images/travel-with-medicine.jpg",
        },
        {
            id: 6,
            name: "Losartan",
            slug: "dr.john-doe",
            category: "Cardiology",
            description: "An angiotensin receptor blocker (ARB) used to treat high blood pressure and protect kidney function in diabetic patients.",
            image: "https://www.westwimbledonphysio.co.uk/handson/wp-content/uploads/2020/08/Coloured-pills-700x350.jpg",
        },
    ]
    return (
        <>
            <Breadcrumb title="Medicines" />

            <section className="team_page pt_75 xs_pt_45 pb_100 xs_pb_70">
                <div className="container">
                    <div className="row">
                       {medicines.map((medicine) => (
                           <Medicine key={medicine.id} data={medicine} />
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

export default Medicines;