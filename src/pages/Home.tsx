import Background from '../assets/images/Background.jpg';
import Background_RR from '../assets/images/Background_RR.jpg';
import LogoAudi from '../assets/images/LogoAudi.jpg';
import LogoBMW from '../assets/images/LogoBMW.jpg';
import LogoKia from '../assets/images/LogoKia.jpg';
import LogoMercedes from '../assets/images/LogoMercedes.jpg';
import LogoTOYOTA from '../assets/images/LogoTOYOTA.jpg';



function Home() {
    return (
        <nav className="bg-white shadow-md p-4 relative z-10">
            <div className='relative '>

                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat  -z-10"
                    style={{ backgroundImage: `url(${Background})` }}
                ></div>

                {/* Phần thân */}
                <div className=" pt-24 py-6 mt-4 relative z-10 pb-24">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-semibold">Find Your Perfect Car</h2>
                        <p className="text-gray-600 mt-2">Find cars for sale and for rent near you</p>
                        <div className="mt-4 flex justify-center">
                        </div>
                        <div className="mt-4 flex justify-center space-x-4">
                            <button className="bg-gray-200 px-4 py-2 rounded-lg">SUV</button>
                            <button className="bg-gray-200 px-4 py-2 rounded-lg">Sedan</button>
                            <button className="bg-gray-200 px-4 py-2 rounded-lg">Hatchback</button>
                            <button className="bg-gray-200 px-4 py-2 rounded-lg">Coupe</button>
                            <button className="bg-gray-200 px-4 py-2 rounded-lg">Hybrid</button>
                        </div>
                    </div>
                </div>
            </div>

            <section className=" py-12 ">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 left-0">Explore Our Premium Brands</h2>
                    <div className="flex  mt-6 space-x-6 left-0">
                        <img src={LogoTOYOTA} alt="Toyota" className="h-16" />
                        <img src={LogoMercedes} alt="Mercedes" className="h-16" />
                        <img src={LogoBMW} alt="BMW" className="h-16" />
                        <img src={LogoAudi} alt="Audi" className="h-16" />
                        <img src={LogoKia} alt="Kia" className="h-16" />
                    </div>
                    <div className="flex justify-between items-center mt-6 w-full  mx-auto">
                        <h3 className="text-3xl font-semibold text-gray-800">Explore All Vehicles</h3>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                            View All
                        </button>
                    </div>
                    <div className="flex space-x-6 mt-4">
                        <span className="text-gray-700 font-semibold cursor-pointer hover:text-blue-500">In Stock</span>
                        <span className="text-gray-700 font-semibold cursor-pointer hover:text-blue-500">New Cars</span>
                        <span className="text-gray-700 font-semibold cursor-pointer hover:text-blue-500">Used Cars</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6 max-w-6xl mx-auto">
                        <div className="bg-white shadow-md p-4 rounded-lg">Box 1</div>
                        <div className="bg-white shadow-md p-4 rounded-lg">Box 2</div>
                        <div className="bg-white shadow-md p-4 rounded-lg">Box 3</div>
                        <div className="bg-white shadow-md p-4 rounded-lg">Box 4</div>
                        <div className="bg-white shadow-md p-4 rounded-lg">Box 5</div>
                    </div>

                    <div className="flex justify-center space-x-4 mt-4">
                        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition">&lt;</button>
                        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition">&gt;</button>
                    </div>

                    <div className="container mx-auto flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-1/2 flex justify-center pt-8">
                            <img src={Background_RR} alt="Product" className="max-w-full rounded-lg shadow-lg" />
                        </div>
                        <div className="w-full md:w-1/2 p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Premium Car Model</h2>
                            <p className="text-gray-700 mb-4">This is an amazing car with high performance, modern technology, and premium design.</p>
                            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">Learn More</button>
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
                        <span className="text-gray-700 font-semibold cursor-pointer hover:text-blue-500">New Cars For Sale</span>
                        <span className="text-gray-700 font-semibold cursor-pointer hover:text-blue-500">Used Cars For Sale </span>
                        <span className="text-gray-700 font-semibold cursor-pointer hover:text-blue-500">Browse By Type</span>
                        <span className="text-gray-700 font-semibold cursor-pointer hover:text-blue-500">Browse By Type</span>
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
                            <img src={LogoTOYOTA} alt="Customer" className="w-52 h-52 rounded-full shadow-lg object-cover" />
                        </div>
                        <div className=" bg-auto md:w-3/5 w-full p-6">
                            <h3 className="text-xl font-bold mb-2">4.9/5 ⭐</h3>
                            <p className="text-gray-1000 font-semibold mb-1">Đặng Quang Anh</p>
                            <p className="text-gray-1000">"Chiếc xe này rất tuyệt vời! Tôi hoàn toàn hài lòng với chất lượng và dịch vụ."</p>
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
                            <img src="/images/toyota-supra.jpg" alt="Toyota Supra" className="w-full h-40 object-cover rounded-md" />
                            <h3 className="text-lg font-bold mt-4">Admin</h3>
                            <p className="text-gray-600">Ngày đăng: 01/01/2025</p>
                            <h2 className="text-xl font-semibold text-gray-800 mt-2">Toyota Supra</h2>
                        </div>
                        <div className="bg-white shadow-md p-6 rounded-lg text-center">
                            <img src="/images/mercedes-amg.jpg" alt="Mercedes AMG" className="w-full h-40 object-cover rounded-md" />
                            <h3 className="text-lg font-bold mt-4">Admin</h3>
                            <p className="text-gray-600">Ngày đăng: 02/01/2025</p>
                            <h2 className="text-xl font-semibold text-gray-800 mt-2">Mercedes AMG</h2>
                        </div>
                        <div className="bg-white shadow-md p-6 rounded-lg text-center">
                            <img src="/images/bmw-m4.jpg" alt="BMW M4" className="w-full h-40 object-cover rounded-md" />
                            <h3 className="text-lg font-bold mt-4">Admin</h3>
                            <p className="text-gray-600">Ngày đăng: 03/01/2025</p>
                            <h2 className="text-xl font-semibold text-gray-800 mt-2">BMW M4</h2>
                        </div>
                    </section>

                    <section className="container mx-auto py-12 flex gap-6">
                        <div className="bg-blue-100 p-8 rounded-lg flex-1">
                            <h2 className="text-2xl font-bold text-gray-800">Are You Looking For a Car?</h2>
                            <p className="text-gray-600 mt-2">We are committed to providing our customers with exceptional service.</p>
                            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Get Started →</button>
                        </div>
                        <div className="bg-pink-100 p-8 rounded-lg flex-1">
                            <h2 className="text-2xl font-bold text-gray-800">Do You Want to Sell a Car?</h2>
                            <p className="text-gray-600 mt-2">We are committed to providing our customers with exceptional service.</p>
                            <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">Get Started →</button>
                        </div>
                    </section>
                </div>
            </section>
            {/* Phần end */}
        </nav>



    )

}

export default Home;