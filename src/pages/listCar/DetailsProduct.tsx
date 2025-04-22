import { Button } from "antd";
import AutomaticIcon from "../../Components/Icons/AutomaticIcon";
import FuelIcon from "../../Components/Icons/FuelIcon";
import MilesIcon from "../../Components/Icons/MilesIcon";
import Audi_S6 from "../assets/images/Audi_S6.jpg";
import {useEffect, useState} from "react";
import {useParams} from "react-router";

function ProductDetails() {
  const {id} = useParams();
  const [thumbnailImg,setThumbnailImg] = useState("")
  const [itemName,setItemName] = useState("")
  const [price,setPrice] = useState(0)
  const [itemCode,setItemCode] = useState("")
  const [speed,setSpeed] = useState(0)
  const [fuel,setFuel] = useState("")


  const callingAPI = async () => {
    if(id === ""){
      throw Error ("Can't find product id.")
    }
    const result = {
      code: 0,
      message: "success",
      data:{
        image: Audi_S6,
        itemName: "Audi S6",
        price:20000,
        itemCode: "A6-2023-12345",
        speed: 600,
        fuel: "Diesel"
      }
    }
    if(result.code !== 0){
      throw new Error(result.message);
    }
    const data = result.data;
    setThumbnailImg(data.image)
    setItemName(data.itemName)
    setPrice(data.price)
    setItemCode(data.itemCode)
    setSpeed(data.speed)
    setFuel(data.fuel)
  }


  useEffect(() => {
    callingAPI()
  }, []);
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row ">
      {/* Left Section */}
      <div className="w-full lg:w-2/3 p-6 lg:p-8">
        <div className="bg-white rounded-xl overflow-hidden flex flex-col h-full" >
          <div className="">
            <img
              src={thumbnailImg}
              alt="thumbnail image"
              className="w-full h-auto max-h-[600px] object-cover p-4 "
            />
            <div className="absolute top-4 right-4 bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-md">
              New
            </div>
          </div>
          
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{itemName}</h1>
            <div className="flex justify-between items-center mb-6">
              <span className="text-3xl font-bold text-blue-600">${price}</span>
              <span className="text-gray-500">Stock #: {itemCode}</span>
            </div>
            
            <div className="flex justify-around bg-gray-50 p-4 rounded-lg mb-8">
              <div className="flex flex-col items-center gap-2">
                <MilesIcon />
                <span className="text-sm font-medium text-gray-700">{speed} miles</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <FuelIcon  />
                <span className="text-sm font-medium text-gray-700">{fuel}</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <AutomaticIcon />
                <span className="text-sm font-medium text-gray-700">Automatic</span>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">Tổng quan về mặt hàng</h2>
              <p className="text-gray-600">
                Audi A6 2023 là một chiếc sedan hạng sang với thiết kế hiện đại, nội thất sang trọng và công nghệ tiên tiến. Xe được trang bị động cơ mạnh mẽ, hệ thống treo tinh chỉnh và nhiều tính năng an toàn hàng đầu. Với không gian rộng rãi và tiện nghi, Audi A6 2023 là sự lựa chọn hoàn hảo cho những ai yêu thích sự thoải mái và phong cách trong mỗi chuyến đi.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/3 p-6 lg:p-8 ">
        <div className=" rounded-xl  p-6 h-full flex flex-col">
          <div className="">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Thông số chi tiết</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Động cơ</span>
                <span>3.0L V6 TDI</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Mã lực</span>
                <span>286 HP</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Vận tốc tối đa</span>
                <span>250 km/h</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Kích thước</span>
                <span>4.93m x 1.87m x 1.46m (Dài x Rộng x Cao)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Chỗ ngồi</span>
                <span>5</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Màu</span>
                <span>Metallic Black</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="font-medium">Thời gian bảo hành</span>
                <span>3 năm</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
              <Button
                type="primary"
                size="large"
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
              >
                Thêm vào giỏ hàng
              </Button>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span className="text-sm text-blue-700">
                  Miễn phí giao hàng trong vòng 30km cho đơn hàng trên 500 triệu
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;