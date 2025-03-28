import React from 'react';
import Background from '../assets/images/Background.jpg'
import GoogleIcon from '../Components/Icons/GoogleIcon';
import FbIcon from '../Components/Icons/FbIcon';

function Register() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center ">
        {/* Container */}
        <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden max-w-7xl w-full min-h-fit">
            {/* Layer trái */}
            <div className="w-full md:w-1/2 p-12 space-y-5 border-r-2 border-gray-100">
            <div className="">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">Tạo tài khoản</h1>
                <p className="text-gray-500">Vui lòng điền đầy đủ thông tin!</p>
            </div>

            <form className="space-y-6">
            <div>
                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block text-gray-600 text-sm mb-1">Họ</label>
                        <input
                            type="text"
                            placeholder="Nhập họ"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-gray-600 text-sm mb-1">Tên</label>
                        <input
                            type="text"
                            placeholder="Nhập tên"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
            </div>

                <div>
                <label className="block text-gray-700 mb-2 font-medium">Email</label>
                <input
                    type="email"
                    placeholder="Nhập email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>

                <div>
                    <label className="block text-gray-700 mb-2 font-medium">Tên tài khoản</label>
                    <input 
                        type="text"
                        placeholder="Nhập tên tài khoản"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                <label className="block text-gray-700 mb-2 font-medium">Mật khẩu</label>
                <input
                    type="password"
                    placeholder="Nhập mật khẩu"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>

                <div>
                    <label className="block text-gray-700 mb-2 font-medium">Xác thực mật khẩu</label>
                    <input
                        type="password"
                        placeholder="Nhập lại mật khẩu"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                </div>

                <div className="flex items-center">
                <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <label className="ml-2 text-gray-600">Tôi đồng ý với điều khoản và dịch vụ</label>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Đăng ký
                </button>
            </form>

            <div className="flex items-center justify-center w-full my-4">
                <div className="flex-grow h-px bg-gray-300"></div>
                <span className="px-4 text-gray-500 text-lg font-medium">Or</span>
                <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-6"> 
                <button className="flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-200 w-full h-full">
                    <span className="text-lg flex items-center justify-center gap-2 flex-1 text-center">
                    <GoogleIcon /> 
                    <span>Đăng nhập bằng Google</span> 
                    </span>
                </button>
                <button className="flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-200 w-full h-full">
                    <span className="text-lg flex items-center justify-center gap-2 flex-1 text-center">
                    <FbIcon /> 
                    <span>Đăng nhập bằng Facebook</span>
                    </span>
                </button>
            </div>

            <div className="flex items-center justify-center gap-2 ">
                <a className='text-lg'>Đã có tài khoản? </a>
                <a href="/login" className="text-blue-500 text-lg hover:text-blue-700">Đăng nhập</a>
            </div>
            </div>

            {/* Layer phải */}
            <div className="w-full md:w-1/2 p-12 relative">
            <img
                src={Background}
                alt="Login Background"
                className="absolute inset-0 w-full h-full object-cover"
            />
            </div>
        </div>
    </div>
  );
}

export default Register;