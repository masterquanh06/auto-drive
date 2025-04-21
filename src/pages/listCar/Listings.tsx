import { useEffect, useState } from "react";
import CarsImg from "../../assets/images/Cars.png";
import Car1 from "../../assets/images/Ford_Transit_2021.png";
import Car2 from "../../assets/images/Corolla2023.png";
import Car3 from "../../assets/images/GLC_2023.jpg";
import Car4 from "../../assets/images/Audi_A6.png";
import Car5 from "../../assets/images/BMW_M4.jpg";
import Car6 from "../../assets/images/VF9.jpg";
import Car7 from "../../assets/images/Ford_F_150.jpg";
import Car8 from "../../assets/images/BMW_8.jpg";
import Car9 from "../../assets/images/Mercedes_Benz.jpg";
import Car10 from "../../assets/images/Audi_RS6.avif";
import Car11 from "../../assets/images/Peugeot_408.jpg";
import Car12 from "../../assets/images/Peugeot_3008.jpg";
import Car13 from "../../assets/images/Maybach_S680.jpg";
import Car14 from "../../assets/images/Honda.jpg";
import Car15 from "../../assets/images/BMW_X5.webp";

import JampIcon from "../../Components/Icons/JampIcon";
import MilesIcon from "../../Components/Icons/MilesIcon";
import { FuelIcon } from "lucide-react";
import ManualIcon from "../../Components/Icons/ManualIcon";
import ViewMore from "../../Components/Icons/ViewMore";
import { Pagination } from "antd";
function Listings() {
  const vehiclesData = [
    {
      id: 1,
      name: "Ford Transit - 2021",
      price: 22000,
      image: Car1,
      des: "4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate",
      specs: { mileage: "40,300 Miles", fuel: "Diesel", transmission: "Manual" },
      tag: "Great Price",
      type: "used",
    },
    {
      id: 2,
      name: "Corolla Altis - 2023",
      price: 45000,
      image: Car2,
      des: "4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate",
      specs: { mileage: "15,000 Miles", fuel: "Petrol", transmission: "CVT" },
      type: "used",
    },
    {
      id: 3,
      name: "New GLC - 2023",
      price: 95000,
      image: Car3,
      des: "4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate",
      specs: { mileage: "50 Miles", fuel: "Petrol", transmission: "Automatic" },
      tag: "Low Mileage",
      type: "new",
    },
    {
      id: 4,
      name: "Audi A6 3.5 - New",
      price: 58000,
      image: Car4,
      des: "4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate",
      specs: { mileage: "5,000 Miles", fuel: "Petrol", transmission: "Automatic" },
      type: "new",
    },
    {
      id: 5,
      name: "BMW M4",
      price: 80000,
      image: Car5,
      des: "4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate",
      specs: { mileage: "10 Miles", fuel: "Diesel", transmission: "Automatic" },
      tag: "Great Price",
      type: "new",
    },
    {
      id: 6,
      name: 'VinFast VF 9',
      price: 63000,
      image: Car6,
      des: "4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate",
      specs: { mileage: "10 Miles", fuel: "Diesel", transmission: "Automatic" },
      tag: "Great Price",
      type: "new",
    },
    {
      id: 7,
      name: 'Ford F-150 Lightning 2024',
      price: 35000,
      image: Car7,
      des: "4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate",
      specs: { mileage: "10 Miles", fuel: "Diesel", transmission: "Automatic" },
      tag: "Great Price",
      type: "new",
    },
    {
      id: 8,
      name: 'BMW 8 Series',
      price: 85000,
      image: Car8,
      des: "4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate",
      specs: { mileage: "10 Miles", fuel: "Diesel", transmission: "Automatic" },
      tag: "Great Price",
      type: "new",
    },
    {
      id: 9,
      name: 'Mercedes-Benz',
      price: 52000,
      image: Car9,
      des: "4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate",
      specs: { mileage: "10 Miles", fuel: "Diesel", transmission: "Automatic" },
      tag: "Great Price",
      type: "new",
    },
    {
      id: 10,
      name: '2025 Audi RS6',
      price: 32000,
      image: Car10,
      des: "4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate",
      specs: { mileage: "10 Miles", fuel: "Diesel", transmission: "Automatic" },
      tag: "Great Price",
      type: "new",
    },
    {
      id: 11,
      name: 'Peugeot 408',
      price: 21000,
      image: Car11,
      des: "4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate",
      specs: { mileage: "10 Miles", fuel: "Diesel", transmission: "Automatic" },
      tag: "Great Price",
      type: "new",
    },
    {
      id: 12,
      name: 'Peugeot 3008 Hybrid4',
      price: 19000,
      image: Car12,
      des: "4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate",
      specs: { mileage: "10 Miles", fuel: "Diesel", transmission: "Automatic" },
      tag: "Great Price",
      type: "new",
    },
    {
      id: 13,
      name: 'Mercedes Maybach S680 V12',
      price: 85000,
      image: Car13,
      des: "4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate",
      specs: { mileage: "10 Miles", fuel: "Diesel", transmission: "Automatic" },
      tag: "Great Price",
      type: "new",
    },
    {
      id: 14,
      name: 'Honda Civic 2024',
      price: 15000,
      image: Car14,
      des: "4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate",
      specs: { mileage: "10 Miles", fuel: "Diesel", transmission: "Automatic" },
      tag: "Great Price",
      type: "new",
    },
    {
      id: 15,
      name: 'BMW X5 2025',
      price: 68000,
      image: Car15,
      des: "4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate",
      specs: { mileage: "10 Miles", fuel: "Diesel", transmission: "Automatic" },
      tag: "Great Price",
      type: "new",
    },
  ];

  const [filter, setFilter] = useState("Typecars");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All Types");
  const [filteredVehicles, setFilteredVehicles] = useState(vehiclesData);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  useEffect(() => {
    let filtered = [...vehiclesData];

    if (filter === "newCars") {
      filtered = filtered.filter((v) => v.type === "new");
    } else if (filter === "usedCars") {
      filtered = filtered.filter((v) => v.type === "used");
    }

    if (selectedType !== "All Types") {
      filtered = filtered.filter(
        (v) => v.type?.toLowerCase() === selectedType.toLowerCase()
      );
    }

    if (searchTerm.trim()) {
      filtered = filtered.filter((v) =>
        v.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredVehicles(filtered);
    setCurrentPage(1); 
  }, [filter, selectedType, searchTerm]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredVehicles.slice(startIndex, endIndex);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div
        className="w-full h-screen bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${CarsImg})` }}
      />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold mb-6">Available Cars</h2>

        <div className="flex flex-wrap gap-4 mb-6">
          <select
            className="border rounded p-2"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option>All Types</option>
            <option>New</option>
            <option>Used</option>
          </select>

          <input
            type="text"
            placeholder="Search by model..."
            className="p-2 border rounded flex-1"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {currentItems.map((vehicle) => (
            <div key={vehicle.id} className="bg-white rounded-lg border border-gray-200 relative">
              {vehicle.tag && (
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  {vehicle.tag}
                </span>
              )}
              <img src={vehicle.image} alt={vehicle.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{vehicle.name}</h3>
                <p className="truncate text-gray-700">{vehicle.des}</p>
                <JampIcon />
                <div className="flex justify-between text-sm text-gray-600 mb-2 mt-3">
                  <div className="flex flex-col items-center">
                    <MilesIcon />
                    <span className="mt-1">{vehicle.specs?.mileage || "N/A"}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <FuelIcon />
                    <span className="mt-1">{vehicle.specs?.fuel || "N/A"}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <ManualIcon />
                    <span className="mt-1">{vehicle.specs?.transmission || "N/A"}</span>
                  </div>
                </div>
                <JampIcon />
                <div className="flex justify-between mt-2">
                  <p className="text-xl font-bold text-black mt-1">
                    ${vehicle.price.toLocaleString()}
                  </p>
                  <ViewMore />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-10">
          <Pagination
            current={currentPage}
            total={filteredVehicles.length}
            pageSize={itemsPerPage}
            onChange={(page) => setCurrentPage(page)}
            showSizeChanger={false}
          />
        </div>
      </main>
    </div>
  );
}

export default Listings;