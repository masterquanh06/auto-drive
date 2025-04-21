import { useState } from "react";
import CarsImg from "../../assets/images/Cars.png";


function Listings() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All Types');
  const cars = [
    {
      id: 1,
      name: '2022 Tesla Model S',
      type: 'Electric',
      details: 'Automatic • 20,000 km',
      price: '$75,000',
      image: 'https://via.placeholder.com/400x250'
    },
    {
      id: 2,
      name: '2021 BMW X5',
      type: 'SUV',
      details: 'Automatic • 30,000 km',
      price: '$60,000',
      image: 'https://via.placeholder.com/400x250'
    },
    {
      id: 3,
      name: '2020 Toyota Corolla',
      type: 'Sedan',
      details: 'Manual • 40,000 km',
      price: '$20,000',
      image: 'https://via.placeholder.com/400x250'
    },
    {
      id: 4,
      name: '2023 Tesla Model S',
      type: 'Electric',
      details: 'Automatic • 20,000 km',
      price: '$75,000',
      image: 'https://via.placeholder.com/400x250'
    },
    {
      id: 5,
      name: '2022 BMW Model S',
      type: 'Electric',
      details: 'Automatic • 20,000 km',
      price: '$75,000',
      image: 'https://via.placeholder.com/400x250'
    },
    {
      id: 6,
      name: '2022 Toyota Model S',
      type: 'Electric',
      details: 'Automatic • 20,000 km',
      price: '$75,000',
      image: 'https://via.placeholder.com/400x250'
    },
    {
      id: 7,
      name: '2022 Mer Model S',
      type: 'Electric',
      details: 'Automatic • 20,000 km',
      price: '$75,000',
      image: 'https://via.placeholder.com/400x250'
    },
    {
      id: 8,
      name: '2022 Bul Model S',
      type: 'Electric',
      details: 'Automatic • 20,000 km',
      price: '$75,000',
      image: 'https://via.placeholder.com/400x250'
    },
    {
      id: 9,
      name: '2022 ZZ Model S',
      type: 'Electric',
      details: 'Automatic • 20,000 km',
      price: '$75,000',
      image: 'https://via.placeholder.com/400x250'
    },
    {
      id: 10,
      name: '2022 KK Model S',
      type: 'Electric',
      details: 'Automatic • 20,000 km',
      price: '$75,000',
      image: 'https://via.placeholder.com/400x250'
    },
    {
      id: 11,
      name: ' Tesla Model S',
      type: 'Electric',
      details: 'Automatic • 20,000 km',
      price: '$75,000',
      image: 'https://via.placeholder.com/400x250'
    },
    {
      id: 12,
      name: '2022 Vin Model S',
      type: 'Electric',
      details: 'Automatic • 20,000 km',
      price: '$75,000',
      image: 'https://via.placeholder.com/400x250'
    },
    {
      id: 13,
      name: '2022 LLL Model S',
      type: 'Electric',
      details: 'Automatic • 20,000 km',
      price: '$75,000',
      image: 'https://via.placeholder.com/400x250'
    },
    {
      id: 14,
      name: '2022 ZZZ Model S',
      type: 'Electric',
      details: 'Automatic • 20,000 km',
      price: '$75,000',
      image: 'https://via.placeholder.com/400x250'
    },
    {
      id: 15,
      name: ' Model S',
      type: 'Electric',
      details: 'Automatic • 20,000 km',
      price: '$75,000',
      image: 'https://via.placeholder.com/400x250'
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
            className="p-2 border rounded"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCars.map((car) => (
            <div key={car.id} className="bg-white rounded-lg shadow p-4">
              <img
                src={car.image}
                alt={car.name}
                className="rounded mb-3 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold">{car.name}</h3>
              <p className="text-gray-600">{car.details}</p>
              <div className="mt-2 text-blue-600 font-bold text-lg">{car.price}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Listings;
