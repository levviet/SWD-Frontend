import { useState } from "react";
import Breadcrumb from "@/layouts/Breadcrumb";
import Medicine from "@/components/Medicine";

function Medicines() {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const medicinesPerPage = 8; // Số thuốc hiển thị mỗi trang

    const medicines = [
        { id: 1, name: "Paracetamol (Acetaminophen)", slug: "paracetamol", category: "Pain Relief", description: "Used to relieve pain and reduce fever.", image: "https://medshadow.org/wp-content/uploads/2012/11/medicine-883x577.jpeg" },
        { id: 2, name: "Ibuprofen", slug: "ibuprofen", category: "Pain Relief", description: "A nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain.", image: "https://images.newscientist.com/wp-content/uploads/2019/06/18153152/medicineshutterstock_1421041688.jpg" },
        { id: 3, name: "Amoxicillin", slug: "amoxicillin", category: "Antibiotic", description: "A widely used antibiotic for treating bacterial infections.", image: "https://drugtodayonline.com/assets/front/images/article_images/th-1712147282.jpeg" },
        { id: 4, name: "Omeprazole", slug: "omeprazole", category: "Gastrointestinal", description: "A proton pump inhibitor (PPI) used for acid reflux and ulcers.", image: "https://assets.telegraphindia.com/telegraph/2022/Aug/1661017334_medicine.jpg" },
        { id: 5, name: "Metformin", slug: "metformin", category: "Diabetes", description: "Used to manage type 2 diabetes by controlling blood sugar levels.", image: "https://wwwnc.cdc.gov/travel/images/travel-with-medicine.jpg" },
        { id: 6, name: "Losartan", slug: "losartan", category: "Cardiology", description: "Used to treat high blood pressure and kidney protection in diabetics.", image: "https://www.westwimbledonphysio.co.uk/handson/wp-content/uploads/2020/08/Coloured-pills-700x350.jpg" },
        { id: 7, name: "Aspirin", slug: "aspirin", category: "Pain Relief", description: "Used as a pain reliever, blood thinner, and anti-inflammatory drug.", image: "https://medicine.nus.edu.sg/medi/images/sub-banners_07.png" },
        { id: 8, name: "Salbutamol (Albuterol)", slug: "salbutamol", category: "Respiratory", description: "A bronchodilator used for asthma and other breathing disorders.", image: "https://www.verywellhealth.com/thmb/HXweuW5iQ5_fd0d6Jzoixs_wJAo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/medicine-pills-463594335-ba46b2f34a764be6a9c0e56a308cb938.jpg" },
        { id: 9, name: "Atorvastatin", slug: "atorvastatin", category: "Cardiology", description: "Used to lower cholesterol and reduce risk of heart disease.", image: "https://assets.telegraphindia.com/telegraph/2022/Aug/1661017334_medicine.jpg"},
        { id: 10, name: "Ciprofloxacin", slug: "ciprofloxacin", category: "Antibiotic", description: "A fluoroquinolone antibiotic used to treat bacterial infections.", image: "https://assets.weforum.org/article/image/xho4dHMhp3SOSDIXzgtaTPQjnKG96tY_zEwdcrB7elE.jpg"},
        { id: 11, name: "Doxycycline", slug: "doxycycline", category: "Antibiotic", description: "A tetracycline antibiotic used for infections like acne and respiratory infections.", image: "https://medshadow.org/wp-content/uploads/2012/11/medicine-883x577.jpeg"},
        { id: 12, name: "Loratadine", slug: "loratadine", category: "Allergy", description: "An antihistamine used to treat allergic reactions and hay fever.", image: "https://images.newscientist.com/wp-content/uploads/2019/06/18153152/medicineshutterstock_1421041688.jpg"},
        { id: 13, name: "Cetirizine", slug: "cetirizine", category: "Allergy", description: "A second-generation antihistamine used for allergies and hay fever.", image: "https://images.theconversation.com/files/256057/original/file-20190129-108364-17hlc1x.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip"},
        { id: 14, name: "Furosemide", slug: "furosemide", category: "Diuretic", description: "A loop diuretic used to treat fluid retention and high blood pressure.", image: "https://medlineplus.gov/images/Medicines_share.jpg"},
        { id: 15, name: "Prednisolone", slug: "prednisolone", category: "Corticosteroid", description: "A steroid used to reduce inflammation in conditions like arthritis and asthma.", image: "https://resources.perkinelmer.com/lab-solutions/resources/images_for_resize/512x288_009961_01.jpg"},
        { id: 16, name: "Hydrochlorothiazide", slug: "hydrochlorothiazide", category: "Diuretic", description: "A thiazide diuretic used to treat high blood pressure and fluid retention.", image: "https://www.aentassociates.com/wp-content/uploads/2022/04/ImekY94hR0sPPBCqTRDSXHZU6rM3UTfY1648659832.jpg"},
        { id: 17, name: "Gabapentin", slug: "gabapentin", category: "Neurology", description: "Used to treat nerve pain, seizures, and restless leg syndrome.", image: "https://allpetsvet.com.au/uploads/assets/uploads/tablets.jpg"},
        { id: 18, name: "Clopidogrel", slug: "clopidogrel", category: "Cardiology", description: "An antiplatelet medication used to prevent blood clots and strokes.", image: "https://magnoliarecoverycare.com/wp-content/uploads/2022/12/prescription-and-over-the-counter-drugs.jpg"},
        { id: 19, name: "Warfarin", slug: "warfarin", category: "Anticoagulant", description: "A blood thinner used to prevent blood clots and strokes.", image: "https://myoms.org/wp-content/uploads/2021/02/shutterstock_59850859-1.jpg"},
        { id: 20, name: "Ranitidine", slug: "ranitidine", category: "Gastrointestinal", description: "A histamine-2 blocker used to reduce stomach acid and treat ulcers.", image: "https://i.guim.co.uk/img/media/20491572b80293361199ca2fc95e49dfd85e1f42/0_236_5157_3094/master/5157.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=80ea7ebecd3f10fe721bd781e02184c3"}
    ];
    

    // Lọc danh sách thuốc theo từ khóa tìm kiếm
    const filteredMedicines = medicines.filter(medicine =>
        medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Tính tổng số trang
    const totalPages = Math.ceil(filteredMedicines.length / medicinesPerPage);

    // Lấy danh sách thuốc theo trang hiện tại
    const indexOfLastMedicine = currentPage * medicinesPerPage;
    const indexOfFirstMedicine = indexOfLastMedicine - medicinesPerPage;
    const currentMedicines = filteredMedicines.slice(indexOfFirstMedicine, indexOfLastMedicine);

    // Hàm thay đổi trang
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <Breadcrumb title="Medicines" />

            <section className="team_page pt_75 xs_pt_45 pb_100 xs_pb_70">
                <div className="container">
                    {/* Ô tìm kiếm */}
                    <div className="row mb-4">
                        <div className="col-12">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Tìm kiếm thuốc..."
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1); // Reset về trang 1 khi tìm kiếm
                                }}
                            />
                        </div>
                    </div>

                    {/* Danh sách thuốc */}
                    <div className="row">
                        {currentMedicines.length > 0 ? (
                            currentMedicines.map((medicine) => (
                                <Medicine key={medicine.id} data={medicine} />
                            ))
                        ) : (
                            <p className="text-center">Không tìm thấy thuốc nào.</p>
                        )}
                    </div>

                    {/* Phân trang */}
                    {totalPages > 1 && (
                        <div className="row mt_60">
                            <div className="col-12">
                                <div id="pagination">
                                    <nav aria-label="Pagination">
                                        <ul className="pagination justify-content-center">
                                            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                                                <button className="page-link" onClick={() => paginate(1)}>
                                                    <i className="far fa-angle-double-left"></i>
                                                </button>
                                            </li>

                                            {[...Array(totalPages)].map((_, index) => (
                                                <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                                                    <button className="page-link" onClick={() => paginate(index + 1)}>
                                                        {index + 1}
                                                    </button>
                                                </li>
                                            ))}

                                            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                                                <button className="page-link" onClick={() => paginate(totalPages)}>
                                                    <i className="far fa-angle-double-right"></i>
                                                </button>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default Medicines;
