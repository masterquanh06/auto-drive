import { Breadcrumb, Pagination } from 'antd';
import React from 'react';
import { Link } from 'react-router';
import CarsImg from "../../assets/images/Cars.png";
import Blog1 from "../../assets/images/blog1.png";
import Blog2 from "../../assets/images/blog2.png";
import Blog3 from "../../assets/images/blog3.png";
import Blog4 from "../../assets/images/blog4.png";
import Blog5 from "../../assets/images/blog5.png";
import Blog6 from "../../assets/images/blog6.png";
import Blog7 from "../../assets/images/blog7.png";
export default function Blog() {
  type BlogPost = {
    id: number;
    title: string;
    date: string;
    image: string;
    description: string;
    status: string;
  };

  const posts: BlogPost[] = [
    {
      id: 1,
      title: 'Top 10 Electric Cars in 2025',
      date: 'April 12, 2025',
      description: 'Explore the most popular electric cars coming out this year, their features, and why they matter.',
      image: Blog1,
      status: "Sound"
    },
    {
      id: 2,
      title: 'Tips for First-Time Car Buyers',
      date: 'March 30, 2025',
      description: 'A helpful guide to buying your first car—what to look for, what to avoid, and how to budget.',
      image: Blog2,
      status: "Accessories"
    },
    {
      id: 3,
      title: 'Why SUVs are Dominating the Market',
      date: 'March 15, 2025',
      description: 'Learn about the rise of SUVs and why more people are choosing them for their everyday drives.',
      image: Blog3,
      status: "Exterior"
    },
    {
      id: 4,
      title: 'Why SUVs are Dominating the Market',
      date: 'March 15, 2025',
      description: 'Learn about the rise of SUVs and why more people are choosing them for their everyday drives.',
      image: Blog4,
      status: "Body Kit"
    },
    {
      id: 5,
      title: 'Why SUVs are Dominating the Market',
      date: 'March 15, 2025',
      description: 'Learn about the rise of SUVs and why more people are choosing them for their everyday drives.',
      image: Blog5,
      status: "Fuel System"
    },
    {
      id: 6,
      title: 'Why SUVs are Dominating the Market',
      date: 'March 15, 2025',
      description: 'Learn about the rise of SUVs and why more people are choosing them for their everyday drives.',
      image: Blog6,
      status: "Sound"
    },
    {
      id: 7,
      title: 'Why SUVs are Dominating the Market',
      date: 'March 15, 2025',
      description: 'Learn about the rise of SUVs and why more people are choosing them for their everyday drives.',
      image: Blog7,
      status: "Oil & Filters"
    },
    // {
    //   id: 8,
    //   title: 'Why SUVs are Dominating the Market',
    //   date: 'March 15, 2025',
    //   description: 'Learn about the rise of SUVs and why more people are choosing them for their everyday drives.',
    //   image: 'https://via.placeholder.com/400x250',
    //   status: "Sound"
    // },
  ];

  const [selectedType, setSelectedType] = React.useState("All Types");
  const [selectedCatetory, setSelectedCatetory] = React.useState("All Type");
  const [selectedPrice, setSelectedPrice] = React.useState("All Price");

  return (
    <div className=" min-h-screen ">

      <div
        className="w-full h-screen bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${CarsImg})` }}
      >
        <div className=" pt-24 py-6 relative z-10 pb-24">
          <div className="container mx-auto text-center">
            <span className="text-white  text-[16px]">Find car for sale and for rent near you</span>
            <h1 className="text-6xl font-semibold text-white mb-[60px] mt-8">Find Your Perfect Car</h1>
            <div className="flex justify-center max-w-3xl mx-auto rounded-xl p-4 gap-3 flex-wrap">
              <select className="flex-1 min-w-[120px] bg-gray-600 text-white text-base md:text-lg py-3 px-4 rounded-lg transition-all duration-300 hover:bg-gray-600"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option>All Type</option>
                <option>New</option>
                <option>Used</option>
              </select>
              <select className="flex-1 min-w-[120px] bg-gray-600 text-white text-base md:text-lg py-3 px-4 rounded-lg transition-all duration-300 hover:bg-gray-600"
                value={selectedCatetory}
                onChange={(e) => setSelectedCatetory(e.target.value)}
              >
                <option>All Type</option>
                <option>SUV</option>
                <option>Sedan</option>
                <option>Hatchback</option>
                <option>Coupe</option>
                <option>Hybrid</option>
              </select>
              <select className="flex-1 min-w-[120px] bg-gray-600 text-white text-base md:text-lg py-3 px-4 rounded-lg transition-all duration-300 hover:bg-gray-600"
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
              >
                <option>All price</option>
                <option>From low to high price</option>
                <option>From high to low price</option>
              </select>
              <button
                className="flex-1 min-w-[100px] bg-gradient-to-r from-blue-500 to-blue-700 text-white text-base md:text-lg font-semibold py-3 px-6 rounded-xl shadow-lg hover:from-blue-600 hover:to-blue-800 hover:shadow-xl transition-all  ease-in-out "
              >
                Search
              </button>
            </div>
          </div>




        </div>

      </div>
      <Breadcrumb style={{ padding: 30 }}
        items={[

          {
            title: <Link to="/">Home</Link>,
          },
          {
            title: <div><p className='text-amber-600'>Blog</p></div>,
          },

        ]}
      />
      <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-10">
        {posts.map((post) => (

          <div key={post.id} className="bg-white rounded-lg  overflow-hidden relative pb-6   border-[#E9E9E9]">
            <div className="absolute top-4 left-4 bg-white text-gray-700 text-sm px-3 py-2 rounded-full font-semibold">{post.status}</div>
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-80 object-fit rounded-lg"
            />
            <div className="text-gray-700 text-sm mt-4 text-start">{post.date}</div>
            <div className="text-lg font-semibold text-gray-800 mt-2 text-start hover:text-blue-800 cursor-pointer">{post.title}</div>
          </div>
        ))}

      </div>
      <div className="container mx-auto flex justify-center px-10 my-10"><Pagination defaultCurrent={1} total={1} /></div>
    </div >
  )
}
