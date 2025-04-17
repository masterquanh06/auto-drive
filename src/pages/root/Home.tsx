import { Input } from "antd";
import Audi from "../../assets/images/Audi_A6.png";
import Background_RR from "../../assets/images/Background_RR.jpg";
import Blog_1 from "../../assets/images/blog1.png";
import Blog_2 from "../../assets/images/blog2.png";
import Blog_3 from "../../assets/images/blog3.png";
import Corolla from "../../assets/images/Corolla2023.png";
import Ford_2023 from "../../assets/images/Ford_2023.png";
import Transit_2021 from "../../assets/images/Ford_Transit_2021.png";
import HomeBackGround from "../../assets/images/HomeBackGround.jpg";
import LogoAudi from "../../assets/images/logoAudi.png";
import LogoBMW from "../../assets/images/logoBmw.png";
import LogoFord from "../../assets/images/logoFord.png";
import LogoMer from "../../assets/images/logoMer.png";
import LogoPeugeot from "../../assets/images/logoPeugeot.png";
import LogoVolkswagen from "../../assets/images/logoVolkswagen.png";
import NewGLC from "../../assets/images/NewGLC.png";
import AutomaticIcon from "../../components/icons/AutomaticIcon";
import CoupeIcon from "../../components/icons/CoupeIcon";
import FuelIcon from "../../components/icons/FuelIcon";
import HatchbackIcon from "../../components/icons/HatchbackIcon";
import HybridIcon from "../../components/icons/HybridIcon";
import MilesIcon from "../../components/icons/MilesIcon";
import SedanIcon from "../../components/icons/SedanIcon";
import SuvIcon from "../../components/icons/SuvIcon";
import ViewAll from "../../components/icons/ViewAll";
import ViewMore from "../../components/icons/ViewMore";
function Home() {

    return (
        <nav className=" bg-white shadow-md  relative z-10">

            <div
                className="w-full h-[900px] bg-cover bg-center bg-no-repeat -z-10"
                style={{ backgroundImage: `url(${HomeBackGround})` }}
            >
                <div className=" pt-24 py-6 relative z-10 pb-24">
                    <div className="container mx-auto text-center">
                        <span className="text-white  text-[16px]">Find car for sale and for rent near you</span>
                        <h1 className="text-6xl font-semibold text-white mb-[60px] mt-8">Find Your Perfect Car</h1>
                        <Input placeholder="Find your favourite car" size="large" style={{ width: 900, height: 50, borderRadius: 99, marginBottom: 65 }} />;
                        <br />
                        <span className="text-white  text-[16px]">Or Browser Featured Model</span>
                        <div className="mt-10 flex justify-center gap-4">
                            <button className="flex items-center space-x-2 bg-gray-600 opacity-60 text-white px-10 py-1 rounded-full hover:opacity-100 transition cursor-pointer">
                                <SuvIcon />
                                <span className="">SUV</span>
                            </button>
                            <button className="flex items-center space-x-2 bg-gray-600 opacity-60 text-white px-10 py-1 rounded-full hover:opacity-100 transition cursor-pointer">
                                <SedanIcon />
                                <span className="">Sedan</span>
                            </button>
                            <button className="flex items-center space-x-2 bg-gray-600 opacity-60 text-white px-10 py-1 rounded-full hover:opacity-100 transition cursor-pointer">
                                <HatchbackIcon />
                                <span className="">Hatchback</span>
                            </button>
                            <button className="flex items-center space-x-2 bg-gray-600 opacity-60 text-white px-10 py-1 rounded-full hover:opacity-100 transition cursor-pointer">
                                <CoupeIcon />
                                <span className="">Coupe</span>
                            </button>
                            <button className="flex items-center space-x-2 bg-gray-600 opacity-60 text-white px-10 py-1 rounded-full hover:opacity-100 transition cursor-pointer">
                                <HybridIcon />
                                <span className="">Hybrid</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <section className="w-full py-12 ">
                <div className="container mx-auto px-10">
                    <div className="flex justify-between items-center px-2">
                        <h3 className="text-3xl font-semibold text-gray-800">
                            Explore Our Premium Brands
                        </h3>

                        <ViewAll />
                    </div>
                    <div className="container mx-auto mt-10">

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

                            <div className="rounded-lg  p-6 flex flex-col items-center justify-center border border-[#E9E9E9]">


                                <img
                                    src={LogoAudi}
                                    className="h-23 object-cover"
                                />
                                <p className="mt-2 text-center text-gray-700 font-semibold">Audi</p>
                            </div>
                            <div className="rounded-lg  p-6 flex flex-col items-center justify-center border border-[#E9E9E9]">


                                <img
                                    src={LogoBMW}
                                    className="h-23 object-cover"
                                />
                                <p className="mt-2 text-center text-gray-700 font-semibold">BMW</p>
                            </div>
                            <div className="rounded-lg  p-6 flex flex-col items-center justify-center border border-[#E9E9E9]">


                                <img
                                    src={LogoFord}
                                    className="h-23 object-cover"
                                />
                                <p className="mt-2 text-center text-gray-700 font-semibold">Ford</p>
                            </div>
                            <div className="rounded-lg  p-6 flex flex-col items-center justify-center border border-[#E9E9E9]">


                                <img
                                    src={LogoMer}
                                    className="h-23 object-cover"
                                />
                                <p className="mt-2 text-center text-gray-700 font-semibold">Mercedes Benz</p>
                            </div>
                            <div className="rounded-lg  p-6 flex flex-col items-center justify-center border border-[#E9E9E9]">


                                <img
                                    src={LogoPeugeot}
                                    className="h-23 object-cover"
                                />
                                <p className="mt-2 text-center text-gray-700 font-semibold">Peugeot</p>
                            </div>
                            <div className="rounded-lg  p-6 flex flex-col items-center justify-center border border-[#E9E9E9]">


                                <img
                                    src={LogoVolkswagen}
                                    className="h-23 object-cover"
                                />
                                <p className="mt-2 text-center text-gray-700 font-semibold">Volkswagen</p>
                            </div>

                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-24 w-full  mx-auto">
                        <h3 className="text-3xl font-semibold text-gray-800">
                            Explore All Vehicles
                        </h3>

                        <ViewMore />
                    </div>
                    <div className="flex space-x-6 mt-4">
                        <span className="text-gray-700 font-semibold cursor-pointer hover:text-blue-500">
                            In Stock
                        </span>
                        <span className="text-gray-700 font-semibold cursor-pointer hover:text-blue-500">
                            New Cars
                        </span>
                        <span className="text-gray-700 font-semibold cursor-pointer hover:text-blue-500">
                            Used Cars
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6 ">
                        {/* Card 1 */}
                        <div className="rounded-2xl overflow-hidden shadow-md relative bg-white mh-80">
                            <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-md">
                                Great Price
                            </span>
                            <img
                                src={Transit_2021}
                                alt="Ford Transit"
                                className="w-full h-[214px] object-cover"
                            />

                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-1">Ford Transit – 2021</h3>
                                <p className="text-sm text-gray-500 mb-3">
                                    4.0 D5 PowerPulse Momentum 5dr AWD
                                </p>
                                <div className="flex justify-between text-sm text-gray-600 mb-2">
                                    <div className="flex flex-col items-center gap-1">
                                        <MilesIcon />
                                        <span>2500 Miles</span>
                                    </div>

                                    <div className="flex flex-col items-center gap-1">
                                        <FuelIcon />
                                        <span>Diesel</span>
                                    </div>

                                    <div className="flex flex-col items-center gap-1">
                                        <AutomaticIcon />
                                        <span>Manual</span>
                                    </div>

                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-xl font-bold">$22,000</span>
                                    <a href="#" className="text-blue-600 text-sm hover:underline">
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="rounded-2xl overflow-hidden shadow-md relative bg-white">
                            <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-md">
                                Low Mileage
                            </span>
                            <img
                                src={NewGLC}
                                alt="New GLC"
                                className="w-full h-[214px] object-cover"
                            />
                            <div className="absolute top-2 right-2 text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 fill-white stroke-black"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 3v18l7-5 7 5V3z" />
                                </svg>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-1">New GLC – 2023</h3>
                                <p className="text-sm text-gray-500 mb-3">
                                    4.0 D5 PowerPulse Momentum 5dr AWD
                                </p>
                                <div className="flex justify-between text-sm text-gray-600 mb-2">
                                    <div className="flex flex-col items-center gap-1">
                                        <MilesIcon />
                                        <span>50 Miles</span>
                                    </div>

                                    <div className="flex flex-col items-center gap-1">
                                        <FuelIcon />
                                        <span>Petrol</span>
                                    </div>

                                    <div className="flex flex-col items-center gap-1">
                                        <AutomaticIcon />
                                        <span>Automatic</span>
                                    </div>

                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-xl font-bold">$95,000</span>
                                    <a href="#" className="text-blue-600 text-sm hover:underline">
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="rounded-2xl overflow-hidden shadow-md relative bg-white">
                            <img
                                src={Audi}
                                alt="Audi A6"
                                className="w-full h-[214px] object-cover"
                            />
                            <div className="absolute top-2 right-2 text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 fill-white stroke-black"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 3v18l7-5 7 5V3z" />
                                </svg>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-1">Audi A6 3.5 – New</h3>
                                <p className="text-sm text-gray-500 mb-3">
                                    3.5 D5 PowerPulse Momentum 5dr AWD
                                </p>
                                <div className="flex justify-between text-sm text-gray-600 mb-2">
                                    <div className="flex flex-col items-center gap-1">
                                        <MilesIcon />
                                        <span>100 Miles</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <FuelIcon />
                                        <span>Petrol</span>
                                    </div>

                                    <div className="flex flex-col items-center gap-1">
                                        <AutomaticIcon />
                                        <span>Automatic</span>
                                    </div>

                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-xl font-bold">$58,000</span>
                                    <a href="#" className="text-blue-600 text-sm hover:underline">
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="rounded-2xl overflow-hidden shadow-md relative bg-white">
                            <img
                                src={Corolla}
                                alt="Corolla Altis"
                                className="w-full h-[214px] object-cover"
                            />
                            <div className="absolute top-2 right-2 text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 fill-white stroke-black"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 3v18l7-5 7 5V3z" />
                                </svg>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-1">Corolla Altis – 2023</h3>
                                <p className="text-sm text-gray-500 mb-3">
                                    3.5 D5 PowerPulse Momentum 5dr AWD
                                </p>
                                <div className="flex justify-between  text-gray-600 mb-2 ">
                                    <div className="flex flex-col items-center gap-1 ">
                                        <MilesIcon />
                                        <span>150 Miles</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <FuelIcon />
                                        <span>Petrol</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <AutomaticIcon />
                                        <span>CVT</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center ">
                                    <span className="text-xl font-bold">$45,000</span>
                                    <a href="#" className="text-blue-600 text-sm hover:underline">
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="rounded-2xl overflow-hidden shadow-md relative bg-white">
                            <img
                                src={Ford_2023}
                                alt="Ford Explorer 2023"
                                className="w-full h-[214px] object-cover"
                            />
                            <div className="absolute top-2 right-2 text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 fill-white stroke-black"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 3v18l7-5 7 5V3z" />
                                </svg>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-1">Ford Explorer 2023</h3>
                                <p className="text-sm text-gray-500 mb-3">
                                    3.5 D5 PowerPulse Momentum 5dr AWD
                                </p>
                                <div className="flex justify-between text-sm text-gray-600 mb-2">
                                    <div className="flex flex-col items-center gap-1">
                                        <MilesIcon />

                                        <span>10 Miles</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <FuelIcon />
                                        <span>Diesel</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <AutomaticIcon />
                                        <span>Automatic</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-xl font-bold">$35,000</span>
                                    <a href="#" className="text-blue-600 text-sm hover:underline">
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center space-x-4 mt-10">
                        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition">
                            &lt;
                        </button>
                        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition">
                            &gt;
                        </button>
                    </div>

                    <div className="container mx-auto flex flex-col md:flex-row items-center mt-10">
                        <div className="w-full md:w-1/2 flex justify-center pt-8">
                            <img
                                src={Background_RR}
                                alt="Product"
                                className="max-w-full rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="w-full md:w-1/2 p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                Premium Car Model
                            </h2>
                            <p className="text-gray-700 mb-4">
                                This is an amazing car with high performance, modern technology,
                                and premium design.
                            </p>
                            <ViewMore />
                        </div>
                    </div>


                    {/* <div className="flex justify-between items-center mt-16 w-full  mx-auto">
                        <div className="text-3xl font-semibold text-gray-800">
                            Shop BoxCar Your Way
                        </div>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                            View All
                        </button>
                    </div>

                    <div className="flex space-x-6 mt-6">
                        <span className="text-gray-700 font-semibold cursor-pointer hover:text-blue-500">
                            New Cars For Sale
                        </span>
                        <span className="text-gray-700 font-semibold cursor-pointer hover:text-blue-500">
                            Used Cars For Sale{" "}
                        </span>

                    </div>

                    <div className="grid grid-cols-2 py-8 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center mb-5">
                        <div>Section 1</div>
                        <div>Section 2</div>
                        <div>Section 3</div>
                        <div>Section 4</div>
                        <div>Section 5</div>
                    </div> */}

                    {/* <div className="flex justify-between items-center mt-12 w-full  mx-auto">
                        <div className="text-3xl font-semibold text-gray-800">
                            What Our Customers Say
                        </div>
                        <div className=" font-semibold text-gray-800">
                            Rated 4.7/5.0 based on 28.370 reviews
                        </div>
                    </div>

                    <div className="w-full flex flex-col md:flex-row items-center p-6 rounded-lg shadow-md mt-10">
                        <div className="md:w-2/5 w-full flex justify-center">
                            <img
                                src={LogoTOYOTA}
                                alt="Customer"
                                className="w-52 h-52 rounded-full shadow-lg object-cover"
                            />
                        </div>
                        <div className=" bg-auto md:w-3/5 w-full p-6">
                            <h3 className="text-xl font-bold mb-2">4.9/5 ⭐</h3>
                            <p className="text-gray-1000 font-semibold mb-1">
                                Đặng Quang Anh
                            </p>
                            <p className="text-gray-1000">
                                "Chiếc xe này rất tuyệt vời! Tôi hoàn toàn hài lòng với chất
                                lượng và dịch vụ."
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mt-12 w-full  mx-auto">
                        <div className="text-3xl font-semibold text-gray-800">
                            Latest Blog Post
                        </div>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                            View All
                        </button>
                    </div> */}
                    <div className="flex justify-between items-center px-2 mt-20">
                        <h3 className="text-3xl font-semibold text-gray-800">
                            Latest Blog Posts
                        </h3>

                        <ViewAll />
                    </div>
                    <section className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-6">

                        <div className="bg-white rounded-lg  overflow-hidden relative">
                            {/* Thẻ danh mục (Category) */}
                            <span className="absolute top-4 left-4 bg-white text-gray-700 text-sm px-3 py-2 rounded-full font-semibold">
                                Sound
                            </span>
                            {/* Hình ảnh */}
                            <img
                                src={Blog_1}
                                alt="Toyota Supra"
                                className="w-full h-80 object-fit rounded-lg"
                            />
                            {/* Thông tin bài blog */}
                            <p className="text-gray-700 text-sm mt-2 text-start">April 17, 2025</p>
                            <h2 className="text-lg font-semibold text-gray-800 mt-2 text-start">
                                <a href="#" className="hover:text-blue-600">
                                    2024 BMW ALPINA XB7 with exclusive details, extraordinary
                                </a>
                            </h2>
                        </div>
                        <div className="bg-white rounded-lg  overflow-hidden relative">
                            {/* Thẻ danh mục (Category) */}
                            <span className="absolute top-4 left-4 bg-white text-gray-700 text-sm px-3 py-2 rounded-full font-semibold">
                                Accessories
                            </span>
                            {/* Hình ảnh */}
                            <img
                                src={Blog_2}
                                alt="Toyota Supra"
                                className="w-full h-80 object-fit rounded-lg"
                            />
                            {/* Thông tin bài blog */}
                            <p className="text-gray-700 text-sm mt-2 text-start">April 17, 2025</p>
                            <h2 className="text-lg font-semibold text-gray-800 mt-2 text-start">
                                <a href="#" className="hover:text-blue-600">
                                    BMW X6 M50i is designed to exceed your
                                    sportiest.
                                </a>
                            </h2>
                        </div>
                        <div className="bg-white rounded-lg  overflow-hidden relative">
                            {/* Thẻ danh mục (Category) */}
                            <span className="absolute top-4 left-4 bg-white text-gray-700 text-sm px-3 py-2 rounded-full font-semibold">
                                Exterior
                            </span>
                            {/* Hình ảnh */}
                            <img
                                src={Blog_3}
                                alt="Toyota Supra"
                                className="w-full h-80 object-fit rounded-lg"
                            />
                            {/* Thông tin bài blog */}
                            <p className="text-gray-700 text-sm mt-2 text-start">April 17, 2025</p>
                            <h2 className="text-lg font-semibold text-gray-800 mt-2 text-start">
                                <a href="#" className="hover:text-blue-600">
                                    BMW X5 Gold 2024 Sport Review: Light on
                                    Sport
                                </a>
                            </h2>
                        </div>
                    </section>


                </div>
            </section>
        </nav>
    );
}

export default Home;
