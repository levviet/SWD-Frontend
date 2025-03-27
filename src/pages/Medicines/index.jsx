import { useState } from "react";
import { useNavigate } from "react-router-dom";

const medicines = [
    { id: 1, name: "Paracetamol", category: "Pain Relief", price: 5000, description: "Used to relieve pain and reduce fever.", image: "https://medshadow.org/wp-content/uploads/2012/11/medicine-883x577.jpeg" },
    { id: 2, name: "Ibuprofen", category: "Pain Relief", price: 10000, description: "A nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain.", image: "https://images.newscientist.com/wp-content/uploads/2019/06/18153152/medicineshutterstock_1421041688.jpg" },
    { id: 3, name: "Amoxicillin", category: "Antibiotic", price: 15000, description: "A widely used antibiotic for treating bacterial infections.", image: "https://drugtodayonline.com/assets/front/images/article_images/th-1712147282.jpeg" },
    { id: 4, name: "Omeprazole", category: "Gastrointestinal", price: 20000, description: "A proton pump inhibitor (PPI) used for acid reflux and ulcers.", image: "https://assets.telegraphindia.com/telegraph/2022/Aug/1661017334_medicine.jpg" },
    { id: 5, name: "Aspirin", category: "Pain Relief", price: 7000, description: "Used to treat pain, fever, and inflammation.", image: "https://wwwnc.cdc.gov/travel/images/travel-with-medicine.jpg" },
    { id: 6, name: "Ciprofloxacin", category: "Antibiotic", price: 18000, description: "An antibiotic used to treat bacterial infections.", image: "https://www.westwimbledonphysio.co.uk/handson/wp-content/uploads/2020/08/Coloured-pills-700x350.jpg" },
    { id: 7, name: "Loratadine", category: "Allergy", price: 12000, description: "An antihistamine used for allergy relief.", image: "https://medicine.nus.edu.sg/medi/images/sub-banners_07.png" },
    { id: 8, name: "Cetirizine", category: "Allergy", price: 13000, description: "Another antihistamine for allergy relief.", image: "https://www.verywellhealth.com/thmb/HXweuW5iQ5_fd0d6Jzoixs_wJAo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/medicine-pills-463594335-ba46b2f34a764be6a9c0e56a308cb938.jpg" },
    { id: 9, name: "Dexamethasone", category: "Steroid", price: 25000, description: "A corticosteroid to reduce inflammation.", image: "https://assets.telegraphindia.com/telegraph/2022/Aug/1661017334_medicine.jpg" },
    { id: 10, name: "Metformin", category: "Diabetes", price: 30000, description: "Used to treat type 2 diabetes.", image: "https://assets.weforum.org/article/image/xho4dHMhp3SOSDIXzgtaTPQjnKG96tY_zEwdcrB7elE.jpg" },
    { id: 11, name: "Atorvastatin", category: "Cholesterol", price: 22000, description: "Used to lower cholesterol levels.", image: "https://medshadow.org/wp-content/uploads/2012/11/medicine-883x577.jpeg" },
    { id: 12, name: "Prednisone", category: "Steroid", price: 20000, description: "A steroid used to suppress the immune system.", image: "https://images.newscientist.com/wp-content/uploads/2019/06/18153152/medicineshutterstock_1421041688.jpg" },
    { id: 13, name: "Losartan", category: "Blood Pressure", price: 17000, description: "Used to treat high blood pressure.", image: "https://images.theconversation.com/files/256057/original/file-20190129-108364-17hlc1x.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip" },
    { id: 14, name: "Furosemide", category: "Diuretic", price: 14000, description: "A diuretic used to treat fluid retention.", image: "https://medlineplus.gov/images/Medicines_share.jpg" },
    { id: 15, name: "Gabapentin", category: "Neuropathy", price: 28000, description: "Used to treat nerve pain.", image: "https://resources.perkinelmer.com/lab-solutions/resources/images_for_resize/512x288_009961_01.jpg" },
    { id: 16, name: "Levothyroxine", category: "Thyroid", price: 16000, description: "A thyroid hormone replacement.", image: "https://www.aentassociates.com/wp-content/uploads/2022/04/ImekY94hR0sPPBCqTRDSXHZU6rM3UTfY1648659832.jpg" },
    { id: 17, name: "Ranitidine", category: "Gastrointestinal", price: 19000, description: "Used for stomach acid reduction.", image: "https://allpetsvet.com.au/uploads/assets/uploads/tablets.jpg" },
    { id: 18, name: "Amlodipine", category: "Blood Pressure", price: 21000, description: "A medication for high blood pressure.", image: "https://magnoliarecoverycare.com/wp-content/uploads/2022/12/prescription-and-over-the-counter-drugs.jpg" },
    { id: 19, name: "Clopidogrel", category: "Blood Thinner", price: 23000, description: "Used to prevent blood clots.", image: "https://myoms.org/wp-content/uploads/2021/02/shutterstock_59850859-1.jpg" },
    { id: 20, name: "Insulin", category: "Diabetes", price: 40000, description: "Used for diabetes management.", image: "https://i.guim.co.uk/img/media/20491572b80293361199ca2fc95e49dfd85e1f42/0_236_5157_3094/master/5157.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=80ea7ebecd3f10fe721bd781e02184c3" },
];

function MedicineList() {
    const [cart, setCart] = useState([]);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    const itemsPerPage = 5;

    const filteredMedicines = medicines.filter((medicine) =>
        medicine.name.toLowerCase().includes(search.toLowerCase())
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentMedicines = filteredMedicines.slice(indexOfFirstItem, indexOfLastItem);

    const addToCart = (medicine) => {
        setCart([...cart, medicine]);
    };

    const handleCheckout = () => {
        navigate("/payment", { state: { cart } });
    };

    return (
        <div className="p-4">
            {/* Ô tìm kiếm */}
            <input 
                type="text"
                placeholder="Tìm kiếm thuốc..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border p-2 w-full mb-4"
            />

            {/* Danh sách thuốc */}
            <div className="grid grid-cols-4 gap-4">
                {currentMedicines.map((medicine) => (
                    <div key={medicine.id} className="bg-black rounded-lg shadow p-4">
                        <h2 className="text-lg font-bold">{medicine.name}</h2>
                        <p className="text-gray-500">{medicine.category}</p>
                        <p className="text-gray-700">{medicine.description}</p>
                        <p className="font-semibold text-blue-600">{medicine.price} VND</p>
                        <img src={medicine.image} alt={medicine.name} className="w-full h-32 object-cover rounded-md my-2" />
                        <button 
                            onClick={() => addToCart(medicine)} 
                            className="bg-blue-800 text-black px-4 py-2 rounded mt-2 w-full">
                            + Thêm vào giỏ
                        </button>
                    </div>
                ))}
            </div>

            {/* Phân trang */}
            <div className="flex justify-center space-x-2 mt-4">
                {Array.from({ length: Math.ceil(filteredMedicines.length / itemsPerPage) }, (_, index) => (
                    <button 
                        key={index} 
                        onClick={() => setCurrentPage(index + 1)} 
                        className={`px-4 py-2 ${currentPage === index + 1 ? "bg-blue-600 text-black" : "bg-gray-300"}`}>
                        {index + 1}
                    </button>
                ))}
            </div>

            {/* Nút Thanh Toán */}
            {cart.length > 0 && (
                <button onClick={handleCheckout} className="bg-green-800 text-black px-8 py-4 rounded mt-6 w-full text-xl">
                    Thanh toán ({cart.length} sản phẩm)
                </button>
            )}
        </div>
    );
}

export default MedicineList;
