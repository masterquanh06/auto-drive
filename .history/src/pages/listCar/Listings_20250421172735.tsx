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

function Listings() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All Types');
  const cars = [
    {
      id: 1,
      name: "Ford Transit - 2021",
      price: '$22000',
      des: "4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate",
      specs: { mileage: "40,300 Miles", fuel: "Diesel", transmission: "Manual" },
      tag: "Great Price",
      status: "used",
      image: Car1,
    },
    {
      id: 2,
      name: "New GLC - 2023",
      price: 95000,
      image: Car2,
      des: "4.0 D5 PowerPulse Momentum 5dr AW… Geartronic Estate",
      specs: { mileage: "50 Miles", fuel: "Petrol", transmission: "Automatic" },
      tag: "Low Mileage",
      status: "new",
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
  const filteredCars = cars.filter(car => {
    const matchesName = car.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All Types' || car.type === selectedType;
    return matchesName && matchesType;
  });

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
            <option>SUV</option>
            <option>Sedan</option>
            <option>Electric</option>
          </select>


          <input
            type="text"
            placeholder="Search by model..."
            className="p-2 border rounded flex-1"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />


        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {filteredCars.map((car) => (
            <div key={car.id} className="bg-white rounded-lg shadow ">
              <img
                src={car.image}
                alt={car.name}
                className="rounded mb-3 w-full h-48 object-cover"
              />
              <div className="p-2">
                <h3 className="text-xl font-semibold">{car.name}</h3>
                <p className="text-gray-600">{car.details}</p>
                <div className="flex items-center justify-between">
                  <div className="mt-2 text-blue-600 font-bold text-lg">{car.price}</div>
                  <button className=" text-black px-3 py-1 rounded cursor-pointer hover:bg-gray-600">
                    Learn More
                  </button>
                </div >
              </div>

            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Listings;
