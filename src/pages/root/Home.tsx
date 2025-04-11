import { Button, Input } from "antd";
import Background_RR from "../../assets/images/Background_RR.jpg";
import HomeBackGround from "../../assets/images/HomeBackGround.jpg";
import LogoAudi from "../../assets/images/LogoAudi.jpg";
import LogoBMW from "../../assets/images/LogoBMW.jpg";
import LogoKia from "../../assets/images/LogoKia.jpg";
import LogoMercedes from "../../assets/images/LogoMercedes.jpg";
import LogoTOYOTA from "../../assets/images/LogoTOYOTA.jpg";
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
                                <Button color="default" variant="filled" className="rounded-lg">
                                    SUV
                                </Button>
                                <Button color="default" variant="filled" className="rounded-lg">
                                    Sedan
                                </Button>
                                <Button color="danger" variant="solid" style={{ borderRadius: 99 }}>
                                    <div className="flex items-center gap-2">

                                        <svg width="27" height="35" viewBox="0 0 27 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_5_9" className="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="4" width="27" height="27">
                                                <path d="M26.1406 4.34009H0.140625V30.3401H26.1406V4.34009Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask0_5_9)">
                                                <path d="M25.2928 20.7314H24.445V16.4923C24.445 15.0897 23.3039 13.9488 21.9015 13.9488H19.1213L18.0054 10.6009C17.6585 9.56072 16.6888 8.86182 15.5923 8.86182C15.4603 8.86182 6.29445 8.86182 6.07538 8.86182C4.97007 8.86182 4.02772 9.57067 3.67774 10.5575H2.68411C1.28163 10.5575 0.140625 11.6985 0.140625 13.1009V16.4923C0.140625 17.8948 1.28163 19.0357 2.68411 19.0357H3.53195V20.7314H2.68411C2.2159 20.7314 1.83626 21.111 1.83626 21.5792C1.83626 22.0475 2.21585 22.4271 2.68411 22.4271C3.47812 22.4271 4.43093 22.4271 5.22759 22.4271C5.22759 24.297 6.74894 25.8184 8.61892 25.8184C10.4889 25.8184 12.0102 24.297 12.0102 22.4271H15.9667C15.9667 24.297 17.4881 25.8184 19.3581 25.8184C21.2281 25.8184 22.7494 24.297 22.7494 22.4271C23.5463 22.4271 24.4994 22.4271 25.2929 22.4271C25.7611 22.4271 26.1407 22.0475 26.1407 21.5792C26.1407 21.111 25.761 20.7314 25.2928 20.7314ZM3.53195 17.34H2.68411C2.21661 17.34 1.83626 16.9597 1.83626 16.4922V13.1009C1.83626 12.6334 2.21661 12.2531 2.68411 12.2531H3.53195C3.53195 12.7933 3.53195 16.8162 3.53195 17.34ZM12.0102 10.5575H13.4233H15.5923C15.9579 10.5575 16.2811 10.7904 16.3967 11.1371L17.3338 13.9487H12.0102V10.5575ZM5.22759 11.4052C5.22759 10.9377 5.60794 10.5574 6.07543 10.5574H10.3146V13.9487H5.22759V11.4052ZM8.61892 24.1227C7.68393 24.1227 6.92328 23.362 6.92328 22.427C6.92328 21.492 7.68393 20.7314 8.61892 20.7314C9.55393 20.7314 10.3146 21.492 10.3146 22.427C10.3146 23.362 9.55393 24.1227 8.61892 24.1227ZM19.358 24.1227C18.4231 24.1227 17.6624 23.362 17.6624 22.427C17.6624 21.492 18.4231 20.7314 19.358 20.7314C20.293 20.7314 21.0536 21.492 21.0536 22.427C21.0536 23.362 20.293 24.1227 19.358 24.1227ZM22.7493 20.7314H22.2931C21.7057 19.7187 20.6105 19.0357 19.358 19.0357C18.1056 19.0357 17.0103 19.7187 16.423 20.7314H11.5539C10.9666 19.7187 9.87135 19.0357 8.61892 19.0357C7.36644 19.0357 6.27119 19.7187 5.68386 20.7314H5.22764V18.1879V15.6444C6.61021 15.6444 20.9937 15.6444 21.9016 15.6444C22.369 15.6444 22.7494 16.0247 22.7494 16.4923L22.7493 20.7314Z" fill="white" />
                                                <path d="M14.5552 17.3401H12.8595C12.3913 17.3401 12.0117 17.7197 12.0117 18.1879C12.0117 18.6561 12.3913 19.0357 12.8595 19.0357H14.5552C15.0234 19.0357 15.403 18.6562 15.403 18.1879C15.403 17.7197 15.0234 17.3401 14.5552 17.3401Z" fill="white" />
                                            </g>
                                        </svg>

                                    </div>
                                    <span className="text-white">Hatchback</span>

                                </Button>
                                <Button color="default" variant="filled" className="rounded-">
                                    Coupe
                                </Button>
                                <Button color="default" variant="filled" className="rounded-lg">
                                    Hybird
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="w-full py-12 ">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center px-2">
                        <h2 className="text-xl font-bold text-gray-800 left-0 max-md:text-center">
                            Explore Our Premium Brands
                        </h2>
                        <p>View All</p>
                    </div>
                    <div className="grid grid-cols-6 max-lg:grid-cols-2 max-lg:pl-40 max-sm:pl-15 max-lg:gap-5 mt-6 w-full">
                        <div className="w-30 h-30"><img src={LogoTOYOTA} alt="Toyota" className="h-30 w-30 object-cover rounded-2xl" /></div>
                        <div className="w-30 h-30"><img src={LogoMercedes} alt="Mercedes" className="h-30 w-30 object-cover rounded-2xl" /></div>
                        <div className="w-30 h-30"><img src={LogoBMW} alt="BMW" className="h-30 w-30 object-cover rounded-2xl" /></div>
                        <div className="w-30 h-30"><img src={LogoAudi} alt="Audi" className="h-30 w-30 object-cover rounded-2xl" /></div>
                        <div className="w-30 h-30"><img src={LogoKia} alt="Kia" className="h-30 w-30 object-cover rounded-2xl" /></div>
                        <div className="w-30 h-30"><img src={LogoKia} alt="Kia" className="h-30 w-30 object-cover rounded-2xl" /></div>
                    </div>
                    <div className="flex justify-between items-center mt-6 w-full  mx-auto">
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6 max-w-6xl mx-auto">
                        <div className="bg-white shadow-md p-4 rounded-lg">Box 1</div>
                        <div className="bg-white shadow-md p-4 rounded-lg">Box 2</div>
                        <div className="bg-white shadow-md p-4 rounded-lg">Box 3</div>
                        <div className="bg-white shadow-md p-4 rounded-lg">Box 4</div>
                        <div className="bg-white shadow-md p-4 rounded-lg">Box 5</div>
                    </div>

                    <div className="flex justify-center space-x-4 mt-4">
                        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition">
                            &lt;
                        </button>
                        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition">
                            &gt;
                        </button>
                    </div>

                    <div className="container mx-auto flex flex-col md:flex-row items-center">
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

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-8">
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
                    <div className="flex justify-between items-center mt-6 w-full  mx-auto">
                        <div className="text-3xl font-semibold text-gray-800">
                            Shop BoxCar Your Way
                        </div>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                            View All
                        </button>
                    </div>

                    <div className="flex space-x-6 mt-4">
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

                    <div className="flex justify-between items-center mt-6 w-full  mx-auto">
                        <div className="text-3xl font-semibold text-gray-800">
                            What Our Customers Say
                        </div>
                        <div className=" font-semibold text-gray-800">
                            Rated 4.7/5.0 based on 28.370 reviews
                        </div>
                    </div>

                    <div className="w-full flex flex-col md:flex-row items-center p-6 rounded-lg shadow-md mt-8">
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

                    <div className="flex justify-between items-center mt-6 w-full  mx-auto">
                        <div className="text-3xl font-semibold text-gray-800">
                            Latest Blog Post
                        </div>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                            View All
                        </button>
                    </div>

                    <section className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white shadow-md p-6 rounded-lg text-center">
                            <img
                                src="/images/toyota-supra.jpg"
                                alt="Toyota Supra"
                                className="w-full h-40 object-cover rounded-md"
                            />
                            <h3 className="text-lg font-bold mt-4">Admin</h3>
                            <p className="text-gray-600">Ngày đăng: 01/01/2025</p>
                            <h2 className="text-xl font-semibold text-gray-800 mt-2">
                                Toyota Supra
                            </h2>
                        </div>
                        <div className="bg-white shadow-md p-6 rounded-lg text-center">
                            <img
                                src="/images/mercedes-amg.jpg"
                                alt="Mercedes AMG"
                                className="w-full h-40 object-cover rounded-md"
                            />
                            <h3 className="text-lg font-bold mt-4">Admin</h3>
                            <p className="text-gray-600">Ngày đăng: 02/01/2025</p>
                            <h2 className="text-xl font-semibold text-gray-800 mt-2">
                                Mercedes AMG
                            </h2>
                        </div>
                        <div className="bg-white shadow-md p-6 rounded-lg text-center">
                            <img
                                src="/images/bmw-m4.jpg"
                                alt="BMW M4"
                                className="w-full h-40 object-cover rounded-md"
                            />
                            <h3 className="text-lg font-bold mt-4">Admin</h3>
                            <p className="text-gray-600">Ngày đăng: 03/01/2025</p>
                            <h2 className="text-xl font-semibold text-gray-800 mt-2">
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
