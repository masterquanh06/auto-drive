import React from 'react';
import Background from '../assets/images/Background.jpg'

function Login() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Container */}
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden max-w-7xl w-full h-[96vh] min-h-[750px]">
        {/* Layer trái */}
        <div className="w-full md:w-1/2 p-12 space-y-8 border-r-2 border-gray-100">
          <div className="">
            
            <p className="text-gray-500">Vui lòng nhập thông tin để truy cập vào tài khoản!</p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Email hoặc tên người dùng</label>
              <input
                type="text"
                placeholder="Nhập email hoặc username"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Mật khẩu</label>
              <input
                type="password"
                placeholder="Nhập mật khẩu"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <label className="ml-2 text-gray-600">Nhớ mật khẩu</label>
              </div>
              <a href="#" className=" text-blue-600 hover:text-blue-500">Quên mật khẩu?</a>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Đăng nhập
            </button>
          </form>

          <div className="flex items-center justify-center w-full my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-4 text-gray-500 text-lg font-medium">Or</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-200">
              <span className="text-lg">Đăng nhập bằng Google</span>
            </button>
            <button className="flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-200">
              <span className="text-lg">Đăng nhập bằng Facebook</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 ">
            <a className='text-lg'>Chưa có tài khoản?  </a>
            <a href="/signup" className=" text-blue-500 text-lg hover:text-blue-700">Đăng ký</a>
          </div>

        </div>

        {/* Layer phải */}
        <div className="w-full md:w-1/2 p-12 relative ">
        <img
            src={Background}
            alt="Login Background"
            className="w-full h-full object-contain rounded-lg"
        />
        </div>

      </div>
    </div>
  );
}

export default Login;
