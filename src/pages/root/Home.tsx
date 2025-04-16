import Background_RR from "../../assets/images/Background_RR.jpg";
import HomeBackGround from "../../assets/images/HomeBackGround.jpg";
import LogoAudi from "../../assets/images/LogoAudi.jpg";
import LogoBMW from "../../assets/images/LogoBMW.jpg";
import LogoKia from "../../assets/images/LogoKia.jpg";
import LogoMercedes from "../../assets/images/LogoMercedes.jpg";
import LogoTOYOTA from "../../assets/images/LogoTOYOTA.jpg";
import SuvIcon from "../../Components/Icons/SuvIcon";
import SedanIcon from "../../Components/Icons/SedanIcon";
import CoupeIcon from "../../Components/Icons/CoupeIcon";
import HybridIcon from "../../Components/Icons/HybridIcon";
import Transit_2021 from "../../assets/images/Ford_Transit_2021.png";
import Ford_2023 from "../../assets/images/Ford_2023.png";
import NewGLC from "../../assets/images/NewGLC.png";
import Corolla from "../../assets/images/Corolla2023.png";
import Audi from "../../assets/images/Audi_A6.png";
import MilesIcon from "../../Components/Icons/MilesIcon";
import FuelIcon from "../../Components/Icons/FuelIcon";
import AutomaticIcon from "../../Components/Icons/AutomaticIcon";
import ToyotaSP from "../../assets/images/ToyotaSP.jpg";
import MercedesAMG from "../../assets/images/MercedesAMG.jpg";
import BMW_M4 from "../../assets/images/BMW_M4.jpg";
import { Button, Input } from "antd";
import { Color } from "antd/es/color-picker";
function Home() {
    return (
        <nav className=" bg-white shadow-md  relative z-10">
            <div className=" ">
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
                                <Button color="danger" variant="solid" style={{ borderRadius: 99, backgroundColor:"#595959" }}>
                                    <div className="flex items-center gap-2 ">
                                        <SuvIcon />
                                        <span> SUV</span>
                                    </div>
                                </Button>
                                <Button color="danger" variant="solid" style={{ borderRadius: 99, backgroundColor:"#595959" }}>
                                    <div className="flex items-center gap-2">
                                        <SedanIcon />
                                        <span>Sedan</span>
                                    </div>
                                </Button>
                                <Button color="danger" variant="solid" style={{ borderRadius: 99, backgroundColor:"#595959" }}>
                                    <div className="flex items-center gap-2">

                                        <svg width="27" height="35" viewBox="0 0 27 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.2539 14.9025H20.3033C20.1963 14.9031 20.0903 14.8826 19.9914 14.8422C19.8923 14.8017 19.8023 14.7422 19.7264 14.6668L17.5651 12.5056C17.0322 11.9726 16.3986 11.5509 15.7011 11.265C15.0037 10.979 14.2564 10.8346 13.5027 10.84H6.62891C5.55147 10.84 4.51815 11.268 3.75629 12.0298C2.99442 12.7917 2.56641 13.8251 2.56641 14.9025V18.965C2.56641 19.6114 2.82322 20.2315 3.28034 20.6886C3.73745 21.1457 4.35744 21.4025 5.00391 21.4025C5.00391 22.1567 5.30352 22.88 5.83682 23.4133C6.37013 23.9466 7.09345 24.2462 7.84766 24.2462C8.60185 24.2462 9.32518 23.9466 9.85849 23.4133C10.3918 22.88 10.6914 22.1567 10.6914 21.4025H16.4602C16.55 22.0823 16.8838 22.7063 17.3995 23.1583C17.9152 23.6103 18.5775 23.8595 19.2633 23.8595C19.949 23.8595 20.6114 23.6103 21.127 23.1583C21.6428 22.7063 21.9766 22.0823 22.0664 21.4025H22.8789C23.5254 21.4025 24.1453 21.1457 24.6025 20.6886C25.0596 20.2315 25.3164 19.6114 25.3164 18.965C25.3164 17.8876 24.8884 16.8542 24.1265 16.0923C23.3646 15.3305 22.3314 14.9025 21.2539 14.9025ZM13.5433 12.465C14.0771 12.464 14.6059 12.5683 15.0995 12.7718C15.593 12.9754 16.0416 13.2742 16.4195 13.6512L17.6708 14.9025H7.63641C7.48499 14.9035 7.33628 14.8622 7.20708 14.7833C7.07787 14.7043 6.97329 14.5908 6.90516 14.4556L5.96266 12.5706C6.17814 12.502 6.40277 12.4664 6.62891 12.465H13.5433ZM4.19141 18.965V14.9025C4.19185 14.4091 4.34201 13.9275 4.62204 13.5212L5.43454 15.1462C5.63384 15.5608 5.94637 15.9104 6.33599 16.1548C6.72563 16.3993 7.17646 16.5284 7.63641 16.5275H12.3164V19.7775H10.407C10.1788 19.2915 9.81689 18.8805 9.36365 18.5926C8.91041 18.3047 8.38459 18.1518 7.84766 18.1518C7.31072 18.1518 6.78488 18.3047 6.33163 18.5926C5.8784 18.8805 5.5165 19.2915 5.28828 19.7775H5.00391C4.78842 19.7775 4.58176 19.6919 4.42938 19.5396C4.27701 19.3871 4.19141 19.1804 4.19141 18.965ZM7.84766 22.215C7.60661 22.215 7.37098 22.1435 7.17056 22.0096C6.97013 21.8757 6.81392 21.6853 6.72168 21.4626C6.62943 21.24 6.6053 20.9949 6.65232 20.7585C6.69935 20.522 6.81543 20.3049 6.98587 20.1344C7.15632 19.964 7.37348 19.848 7.60989 19.8009C7.8463 19.7539 8.09135 19.778 8.31405 19.8703C8.53675 19.9625 8.72711 20.1187 8.86101 20.3192C8.99491 20.5195 9.06641 20.7552 9.06641 20.9962C9.06641 21.3195 8.93801 21.6295 8.70944 21.858C8.48089 22.0866 8.17089 22.215 7.84766 22.215ZM19.2226 22.215C18.9816 22.215 18.746 22.1435 18.5455 22.0096C18.3451 21.8757 18.1889 21.6853 18.0967 21.4626C18.0044 21.24 17.9803 20.9949 18.0273 20.7585C18.0743 20.522 18.1904 20.3049 18.3609 20.1344C18.5313 19.964 18.7485 19.848 18.9849 19.8009C19.2213 19.7539 19.4663 19.778 19.6891 19.8703C19.9118 19.9625 20.1021 20.1187 20.236 20.3192C20.3699 20.5195 20.4414 20.7552 20.4414 20.9962C20.4414 21.3195 20.313 21.6295 20.0844 21.858C19.8559 22.0866 19.5459 22.215 19.2226 22.215ZM22.8789 19.7775H21.782C21.5538 19.2915 21.1919 18.8805 20.7386 18.5926C20.2854 18.3047 19.7596 18.1518 19.2226 18.1518C18.6857 18.1518 18.1599 18.3047 17.7067 18.5926C17.2534 18.8805 16.8915 19.2915 16.6633 19.7775H13.9414V16.5275H21.2539C21.5947 16.5293 21.9312 16.6025 22.2419 16.7425C22.5526 16.8825 22.8305 17.086 23.0576 17.34H22.8789C22.6634 17.34 22.4568 17.4256 22.3044 17.5779C22.152 17.7303 22.0664 17.937 22.0664 18.1525C22.0664 18.3679 22.152 18.5746 22.3044 18.7271C22.4568 18.8794 22.6634 18.965 22.8789 18.965H23.6914C23.6914 19.1804 23.6058 19.3871 23.4534 19.5396C23.301 19.6919 23.0944 19.7775 22.8789 19.7775Z" fill="white" />
                                        </svg>


                                    </div>
                                    <span className="text-white">Hatchback</span>

                                </Button>
                                <Button color="danger" variant="solid" style={{ borderRadius: 99, backgroundColor:"#595959" }}>
                                    <div className="flex items-center gap-2">
                                        <CoupeIcon />
                                        <span>Coupe</span>
                                    </div>
                                </Button>
                                <Button color="danger" variant="solid" style={{ borderRadius: 99, backgroundColor:"#595959" }}>
                                    <div className="flex items-center gap-2">
                                        <HybridIcon />
                                        <span>Hybrid</span>
                                    </div>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="w-full py-12 ">
                <div className="container mx-auto pl-10 pr-10">
                    <div className="flex justify-between items-center px-2">
                        <h2 className="text-xl font-bold text-gray-800 left-0 max-md:text-center">
                            Explore Our Premium Brands
                        </h2>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                            View All
                        </button>
                    </div>
                    <div className="grid grid-cols-6 max-lg:grid-cols-2 max-lg:pl-40 max-sm:pl-15 max-lg:gap-5 mt-6 w-full">
                        <div className="w-30 h-30"><img src={LogoTOYOTA} alt="Toyota" className="h-30 w-30 object-cover rounded-2xl" /></div>
                        <div className="w-30 h-30"><img src={LogoMercedes} alt="Mercedes" className="h-30 w-30 object-cover rounded-2xl" /></div>
                        <div className="w-30 h-30"><img src={LogoBMW} alt="BMW" className="h-30 w-30 object-cover rounded-2xl" /></div>
                        <div className="w-30 h-30"><img src={LogoAudi} alt="Audi" className="h-30 w-30 object-cover rounded-2xl" /></div>
                        <div className="w-30 h-30"><img src={LogoKia} alt="Kia" className="h-30 w-30 object-cover rounded-2xl" /></div>
                        <div className="w-30 h-30"><img src={LogoKia} alt="Kia" className="h-30 w-30 object-cover rounded-2xl" /></div>
                    </div>
                    <div className="flex justify-between items-center mt-24 w-full  mx-auto">
                        <h3 className="text-3xl font-semibold text-gray-800">
                            Explore All Vehicles
                        </h3>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                            View All
                        </button>
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
                            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
                                Learn More
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-18">
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold">500+</h3>
                            <p className="text-gray-700">Lượng mua</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold">10K+</h3>
                            <p className="text-gray-700">Lượt xem</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold">4.8/5</h3>
                            <p className="text-gray-700">Lượt đánh giá</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold">300+</h3>
                            <p className="text-gray-700">Lượt trả góp</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-16 w-full  mx-auto">
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
                        <span className="text-gray-700 font-semibold cursor-pointer hover:text-blue-500">
                            Browse By Type
                        </span>
                        <span className="text-gray-700 font-semibold cursor-pointer hover:text-blue-500">
                            Browse By Type
                        </span>
                    </div>

                    <div className="grid grid-cols-2 py-8 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center mb-5">
                        <div>Section 1</div>
                        <div>Section 2</div>
                        <div>Section 3</div>
                        <div>Section 4</div>
                        <div>Section 5</div>
                    </div>

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

                    <section className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white shadow-md rounded-lg text-center">
                            <img
                                src={ToyotaSP}
                                alt="Toyota Supra"
                                className="w-full h-80 object-cover rounded-md"
                            />
                            <h3 className="text-lg font-bold mt-4">Admin</h3>
                            <p className="text-gray-600">Ngày đăng: 01/01/2025</p>
                            <h2 className="text-xl font-semibold text-gray-800 mt-2 mb-6">
                                Toyota Supra
                            </h2>
                        </div>
                        <div className="bg-white shadow-md rounded-lg text-center">
                            <img
                                src={MercedesAMG}
                                alt="Mercedes AMG"
                                className="w-full h-80 object-cover rounded-md"
                            />
                            <h3 className="text-lg font-bold mt-4">Admin</h3>
                            <p className="text-gray-600">Ngày đăng: 02/01/2025</p>
                            <h2 className="text-xl font-semibold text-gray-800 mt-2 mb-6">
                                Mercedes AMG
                            </h2>
                        </div>
                        <div className="bg-white shadow-md rounded-lg text-center">
                            <img 
                                src={BMW_M4}
                                alt="BMW M4"
                                className="w-full h-80 object-cover rounded-md"
                            />
                            <h3 className="text-lg font-bold mt-4">Admin</h3>
                            <p className="text-gray-600">Ngày đăng: 03/01/2025</p>
                            <h2 className="text-xl font-semibold text-gray-800 mt-2 mb-6">
                                BMW M4
                            </h2>
                        </div>
                    </section>

                    <section className="container mx-auto py-12 flex gap-6">
                        <div className="bg-blue-100 p-8 rounded-lg flex-1">
                            <h2 className="text-2xl font-bold text-gray-800">
                                Are You Looking For a Car?
                            </h2>
                            <p className="text-gray-600 mt-2">
                                We are committed to providing our customers with exceptional
                                service.
                            </p>
                            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                                Get Started →
                            </button>
                        </div>
                        <div className="bg-pink-100 p-8 rounded-lg flex-1">
                            <h2 className="text-2xl font-bold text-gray-800">
                                Do You Want to Sell a Car?
                            </h2>
                            <p className="text-gray-600 mt-2">
                                We are committed to providing our customers with exceptional
                                service.
                            </p>
                            <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                                Get Started →
                            </button>
                        </div>
                    </section>
                </div>
            </section>
        </nav>
    );
}

export default Home;
