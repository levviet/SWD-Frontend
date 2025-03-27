import { useParams } from "react-router-dom";
import Breadcrumb from "@/layouts/Breadcrumb";
import Review from "./_components/Review";
import LeaveReview from "./_components/LeaveReview";
import MakeAnAppointment from "./_components/MakeAnAppointment";

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
    { id: 11, name: "Pneumonia", slug: "pneumonia", category: "Respiratory", description: "Lung infection that causes inflammation, coughing, and difficulty breathing.", image: "https://www.verywellhealth.com/thmb/8hsaRu5A9XShADdStDKPHF-gwv8=/500x350/filters:no_upscale()/Pneumonia-56a7d99a3df78cf7729b55d6.jpg" },
    { id: 12, name: "Chickenpox", slug: "chickenpox", category: "Infectious Diseases", description: "Viral infection causing itchy skin rash with red spots.", image: "https://www.cdc.gov/chickenpox/images/chickenpox-disease.jpg" },
    { id: 13, name: "Tuberculosis", slug: "tuberculosis", category: "Respiratory", description: "Bacterial infection affecting the lungs, causing chronic cough and weight loss.", image: "https://www.cdc.gov/tb/topic/basics/images/infographic_latenttbtb.png" },
    { id: 14, name: "Asthma", slug: "asthma", category: "Respiratory", description: "Chronic condition causing airway inflammation and difficulty breathing.", image: "https://www.verywellhealth.com/thmb/Lqlxuq6L7p8RaSRJftlYobEL6gg=/500x350/filters:no_upscale()/asthmaattacks-56a7d99c3df78cf7729b55d7.jpg" },
    { id: 15, name: "Stroke", slug: "stroke", category: "Neurology", description: "Brain damage due to interruption of blood supply, causing paralysis and speech issues.", image: "https://www.stroke.org/-/media/Stroke-Images/What-is-Stroke/Stroke-Explainer.jpg" },
    { id: 16, name: "Migraine", slug: "migraine", category: "Neurology", description: "Severe headache with nausea, sensitivity to light and sound.", image: "https://www.verywellhealth.com/thmb/ZRHkP1VgPMhR9jzGTUzhtTnQ_24=/500x350/filters:no_upscale()/Migraines-and-Headaches-56a7d99b3df78cf7729b55d8.jpg" },
    { id: 17, name: "Eczema", slug: "eczema", category: "Dermatology", description: "Chronic skin condition causing itching, redness, and inflammation.", image: "https://www.aad.org/sites/default/files/styles/500x350/public/aad_eczema_faqs.jpg" },
    { id: 18, name: "Gout", slug: "gout", category: "Rheumatology", description: "Form of arthritis causing severe joint pain due to uric acid buildup.", image: "https://www.verywellhealth.com/thmb/U5iyF3AcMRpW0O1WmTxxMq_WBNU=/500x350/filters:no_upscale()/Gout-56a7d99b3df78cf7729b55da.jpg" },
    { id: 19, name: "Hypertension", slug: "hypertension", category: "Cardiology", description: "Chronic high blood pressure increasing risk of heart disease.", image: "https://www.verywellhealth.com/thmb/mM9bmKmM9JXZkB5eMIpFqPjKVoQ=/500x350/filters:no_upscale()/high-blood-pressure-56a7d99b3df78cf7729b55db.jpg" },
    { id: 20, name: "Anemia", slug: "anemia", category: "Hematology", description: "Low red blood cell count causing fatigue and weakness.", image: "https://www.verywellhealth.com/thmb/WddOTFwU8BNd9IpLrFzWiPqKfAY=/500x350/filters:no_upscale()/anemia-56a7d99b3df78cf7729b55dc.jpg" }
];


function DiseasesDetail() {
    const { slug } = useParams();
    const disease = diseases.find(d => d.slug === slug);

    if (!disease) {
        return <h2 className="text-center">Disease not found</h2>;
    }

    return (
        <>
            <Breadcrumb title={disease.name} />
            <section className="team_details pt_100 xs_pt_70 pb_100 xs_pb_70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 wow fadeInLeft" data-wow-duration="1s">
                            <div className="row">
                                <div className="col-xl-5 col-md-5 col-lg-5">
                                    <div className="team_details_img">
                                        <img src={disease.image} alt={disease.name} className="img-fluid w-100" />
                                    </div>
                                </div>
                                <div className="col-xl-7 col-md-7 col-lg-7">
                                    <div className="team_details_img_text">
                                        <h3>{disease.name}</h3>
                                        <p><b>Category:</b> {disease.category}</p>
                                        <p>{disease.description}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="biography">
                                <h3>About {disease.name}</h3>
                                <p>{disease.description}</p>
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

export default DiseasesDetail;
