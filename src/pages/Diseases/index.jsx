import { useState } from "react";
import Breadcrumb from "@/layouts/Breadcrumb";
import Disease from "@/components/Disease";

function Diseases() {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const diseasesPerPage = 8; // Số thuốc hiển thị mỗi trang

    const diseases = [
        { id: 1, name: "Dengue fever", slug: "dengue-fever", category: "Pain Relief", description: "Infectious disease caused by Dengue virus, transmitted by Aedes mosquitoes.", image: "https://mediaen.vietnamplus.vn/images/f579a678cf9e90879541752073c26005a159b72427c31fb6e6b4d3719fc6f49f25c7893cb324efcd69d6d89acb1cbd07d1ed4f641bb03ee63e8a94b3842009d8/1974448.jpg.webp" },
        { id: 2, name: "Flu", slug: "flu", category: "Pain Relief", description: "Infected with influenza virus, causing fever, cough, sore throat, fatigue ... water, rest, use symptom-relieving medication such as paracetamol.", image: "https://rmkh.cdn.jaysoft.asia/wp-content/uploads/2019/10/what-you-need-to-know-about-flu.jpg" },
        { id: 3, name: "Pharyngitis", slug: "pharyngitis", category: "Antibiotic", description: "Bacterial or viral infection that causes sore throat.", image: "https://my.clevelandclinic.org/-/scassets/images/org/health/articles/8274-sore-throat-pharyngitis-signs" },
        { id: 4, name: "Allergy", slug: "allergy", category: "Gastrointestinal", description: "Overreaction of the immune system to allergens such as pollen, food.", image: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/3EBD/production/_91916061_c0302172-urticaria-spl.jpg" },
        { id: 5, name: "Food poisoning", slug: "food-poisoning", category: "Gastrointestinal", description: "Poisoning caused by contaminated food, causing vomiting, diarrhea.", image: "https://cdn.shopify.com/s/files/1/0624/0655/7914/files/Food-Poisoning-scaled_1024x1024.jpg?v=1681046029" },
        { id: 6, name: "Myocardial infarction", slug: "myocardial-infarction", category: "Cardiology", description: "Coronary artery occlusion causes myocardial necrosis, severe chest pain.", image: "https://www.ahajournals.org/cms/10.1161/CIR.0000000000000617/asset/a9239634-3008-4ef8-9d54-c9ee7a72dc8f/assets/graphic/e618fig04.jpg" },
        { id: 7, name: "Hypotension", slug: "hypotension", category: "Pain Relief", description: "Sudden drop in blood pressure causes dizziness, lightheadedness.", image: "https://thumbs.dreamstime.com/z/hypotension-low-blood-pressure-cartoon-illustration-heart-feeling-dizzy-reading-below-mm-hg-87852227.jpg" },
        { id: 8, name: "Arthritis", slug: "arthritis", category: "Respiratory", description: "Inflammation causes joint pain and swelling, limiting movement.", image: "https://kansaspainmanagement.com/wp-content/uploads/2025/02/Arthritis-img-1.png" },
        { id: 9, name: "Diabetes", slug: "diabetes", category: "Endocrinology", description: "Disordered sugar metabolism, causing high blood sugar.", image: "https://vediherbals.com/cdn/shop/articles/How_Does_Diabetes_Affect_the_Body_e1a25462-ab2e-4047-be68-b70bdf46300f.jpg?v=1739776973" },
        { id: 10, name: "Herniated disc", slug: "herniated-disc", category: "Orthopedics", description: "Spinal disc is misaligned, compressing the nerve, causing back pain.", image: "https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2016/11/22/17/38/mcdc7_herniated_disk-8col.jpg" },
        { id: 11, name: "Pneumonia", slug: "pneumonia", category: "Respiratory", description: "Lung infection that causes inflammation, coughing, and difficulty breathing.", image: "https://my.clevelandclinic.org/-/scassets/images/org/health/articles/4471-pneumonia-01" },
        { id: 12, name: "Chickenpox", slug: "chickenpox", category: "Infectious Diseases", description: "Viral infection causing itchy skin rash with red spots.", image: "https://raisingchildren.net.au/__data/assets/image/0022/48532/chickenpoxnarrow.jpg" },
        { id: 13, name: "Tuberculosis", slug: "tuberculosis", category: "Respiratory", description: "Bacterial infection affecting the lungs, causing chronic cough and weight loss.", image: "https://iplungclinic.com/wp-content/uploads/2022/10/Lung-with-TB.png" },
        { id: 14, name: "Asthma", slug: "asthma", category: "Respiratory", description: "Chronic condition causing airway inflammation and difficulty breathing.", image: "https://irp.cdn-website.com/2e75da1a/dms3rep/multi/normal-vs-asthma-lung.png" },
        { id: 15, name: "Stroke", slug: "stroke", category: "Neurology", description: "Brain damage due to interruption of blood supply, causing paralysis and speech issues.", image: "https://www.cdc.gov/stroke/media/images/2024/10/Signs-Symptoms-Stroke.jpg?_=94551" },
        { id: 16, name: "Migraine", slug: "migraine", category: "Neurology", description: "Severe headache with nausea, sensitivity to light and sound.", image: "https://www.advancedheadachecenter.com/wp-content/uploads/2023/02/Hemiplegic-Migraine.jpg.webp" },
        { id: 17, name: "Eczema", slug: "eczema", category: "Dermatology", description: "Chronic skin condition causing itching, redness, and inflammation.", image: "https://banish.com/cdn/shop/articles/cover_photo_7_types_of_eczema.png?v=1575586990&width=2048" },
        { id: 18, name: "Gout", slug: "gout", category: "Rheumatology", description: "Form of arthritis causing severe joint pain due to uric acid buildup.", image: "https://www.footankledc.com/files/ofac/news/auto-1200-any-fit/gout%20blog.png" },
        { id: 19, name: "Hypertension", slug: "hypertension", category: "Cardiology", description: "Chronic high blood pressure increasing risk of heart disease.", image: "https://pulse-cardiology.com/wp-content/uploads/2020/08/Hypertension.jpeg.webp" },
        { id: 20, name: "Anemia", slug: "anemia", category: "Hematology", description: "Low red blood cell count causing fatigue and weakness.", image: "https://www.ferosomcanada.com/cdn/shop/articles/Copy_of_Blog_Images-13.png?v=1667840781&width=1100" }
    ];
    
    
    const filteredDiseases = diseases.filter(disease =>
        disease.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredDiseases.length / diseasesPerPage);

    const indexOfLastDisease = currentPage * diseasesPerPage;
    const indexOfFirstDisease = indexOfLastDisease - diseasesPerPage;
    const currentDiseases = filteredDiseases.slice(indexOfFirstDisease, indexOfLastDisease);

    // Hàm thay đổi trang
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <Breadcrumb title="Diseases" />

            <section className="team_page pt_75 xs_pt_45 pb_100 xs_pb_70">
                <div className="container">
                    {/* Ô tìm kiếm */}
                    <div className="row mb-4">
                        <div className="col-12">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Tìm kiếm loại bệnh..."
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1); 
                                }}
                            />
                        </div>
                    </div>

                    <div className="row">
                        {currentDiseases.length > 0 ? (
                            currentDiseases.map((disease) => (
                                <Disease key={disease.id} data={disease} />
                            ))
                        ) : (
                            <p className="text-center">Không tìm thấy loại bệnh nào.</p>
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

export default Diseases;
