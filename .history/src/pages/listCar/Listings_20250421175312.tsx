import { useState } from "react";
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
import JampIcon from "../../components/icons/JampIcon";
import MilesIcon from "../../components/icons/MilesIcon";
import { FuelIcon } from "lucide-react";

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
      type: 'Electric',
      details: 'Automatic • 30,000 km',
      price: '$45000',
      image: Car2,
    },
    {
      id: 3,
      name: "New GLC - 2023",
      type: 'Sedan',
      details: 'Manual • 40,000 km',
      price: '$95000',
      image: Car3,
    },
    {
      id: 4,
      name: "Audi A6 3.5 - New",
      type: 'Sedan',
      details: 'Automatic • 40,000 km',
      price: '$58000',
      image: Car4,
    },
    {
      id: 5,
      name: "BMW M4",
      type: 'SUV',
      details: 'Automatic • 40,000 km',
      price: '$80000',
      image: Car5,
    },
    {
      id: 6,
      name: 'VinFast VF 9',
      type: 'Electric',
      details: 'Automatic • 20,000 km',
      price: '$25,000',
      image: Car6
    },
    {
      id: 7,
      name: 'Ford F-150 Lightning 2024',
      type: 'Electric',
      details: 'Automatic • 20,000 km',
      price: '$35,000',
      image: Car7,
    },
    {
      id: 8,
      name: 'BMW 8 Series',
      type: 'Sedan',
      details: 'Automatic • 60,000 km',
      price: '$85,000',
      image: Car8,
    },
    {
      id: 9,
      name: 'Mercedes-Benz',
      type: 'SUV',
      details: 'Automatic • 20,000 km',
      price: '$52,000',
      image: Car9,
    },
    {
      id: 10,
      name: '2025 Audi RS6',
      type: 'SUV',
      details: 'Automatic • 20,000 km',
      price: '$32,000',
      image: Car10,
    },
    {
      id: 11,
      name: ' peugeot 408',
      type: 'Sedan',
      details: 'Automatic • 20,000 km',
      price: '$21,000',
      image: Car11,
    },
    {
      id: 12,
      name: 'Peugeot 3008 Hybrid4',
      type: 'Electric',
      details: 'Automatic • 20,000 km',
      price: '$19,000',
      image: Car12,
    },
    {
      id: 13,
      name: 'Mercedes Maybach S680 V12',
      type: 'SUV',
      details: 'Automatic • 20,000 km',
      price: '$85,000',
      image: Car13,
    },
    {
      id: 14,
      name: 'Honda Civic 2024',
      type: 'SUV',
      details: 'Automatic • 20,000 km',
      price: '$15,000',
      image: Car14,
    },
    {
      id: 15,
      name: ' BMW X5 2025',
      type: 'Sedan',
      details: 'Automatic • 20,000 km',
      price: '$68,000',
      image: Car15,
    },

  ];
  const [filter, setFilter] = useState("inStock");
  const [filteredVehicles, setFilteredVehicles] = useState(vehiclesData);
  const handleFilter = (type: string) => {
    setFilter(type);
    if (type === "Typecars") {
      setFilteredVehicles(vehiclesData);
    } else if (type === "newCars") {
      setFilteredVehicles(vehiclesData.filter((vehicle) => vehicle.type === "new"));
    } else if (type === "usedCars") {
      setFilteredVehicles(vehiclesData.filter((vehicle) => vehicle.type === "used"));
    }
  };
  return (
    <div className="bg-gray-100 min-h-screen">
      <div
        className="w-full h-screen bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${CarsImg})` }}
      >

      </div>
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold mb-6">Available Cars</h2>

        <div className="flex flex-wrap gap-4 mb-6">
          <select
            className=" border rounded"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-6">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-lg border border-gray-200 overflow relative"
            >
              {vehicle.tag && (
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  {vehicle.tag}
                </span>
              )}
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {vehicle.name}
                </h3>
                <p className="truncate text-gray-700">
                  {vehicle.des}
                </p>
                <JampIcon />
                <div className="flex justify-between text-sm text-gray-600 mb-2 mt-3">
                  <div className="flex flex-col justify-center items-center">
                    <MilesIcon />
                    <span className="mt-1">{vehicle.specs.mileage}</span>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <FuelIcon />
                    <span className="mt-1">{vehicle.specs.fuel}</span>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <ManualIcon />
                    <span className="mt-1">{vehicle.specs.transmission}</span>
                  </div>
                </div>
                <JampIcon />
                <div className="flex w-full justify-between mt-2">
                  <p className="text-xl font-bold text-black mt-1">
                    ${vehicle.price.toLocaleString()}
                  </p>
                  <ViewMore />

                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Listings;
