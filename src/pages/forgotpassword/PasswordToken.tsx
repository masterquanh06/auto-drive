import { Button, Form, Input } from 'antd';
import { MailOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router';
import Background from '../assets/images/Background.jpg';



const PasswordToken = () => {
  const navigate = useNavigate();
  const onClick = (values: FieldType) => {
    console.log('Mã xác nhận:', values.code);
    
    navigate('/resetpassword');
  }
  type FieldType = {
    email?: string;
    code?: string;
  };

  return (
    <div className="h-dvh flex flex-col md:flex-row">
      {/* Form Section */}
      <div className="h-full w-full md:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-gradient-to-r from-violet-200 to-violet-400">
        <Form
          name="forgot_password"
          initialValues={{ remember: true }}
          autoComplete="off"
          layout="vertical"
          className="w-full max-w-md"
        >
          <div className="text-base sm:text-lg mb-4 sm:mb-6">
            <Link
              to="/login"
              className="text-blue-500 hover:text-violet-600 flex items-center"
            >
              <ArrowLeftOutlined className="mr-1" />
              Quên mật khẩu
            </Link>
          </div>

          <h1 className="text-center mb-4 sm:mb-6 text-xl sm:text-2xl font-semibold text-gray-700">
            Nhập mã xác nhận để đặt lại mật khẩu
          </h1>

          <Form.Item<FieldType>
            label={<span className="text-gray-700">Mã xác nhận </span>}
            name="email"
            rules={[
              { required: true, message: 'Vui lòng nhập mã xác nhận!' },
            ]}
          >
            <Input
              prefix={<MailOutlined className="text-gray-400" />}
              placeholder="Nhập mã xác nhận"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Link to="/resetpassword" className="w-full">
              <Button type="primary" size="large" className="w-full">
                Xác nhận
              </Button>
            </Link>
          </Form.Item>
        </Form>
      </div>

      {/* Image Section */}
      <div className="hidden md:block w-full md:w-1/2">
        <img
          src={Background}
          alt="Forgot Password Background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default PasswordToken;