import { Button, Form, Input } from 'antd';
import { MailOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router';
import Background from '../../assets/images/Background.jpg';


const ForgotPassword = () => {
  const navigate = useNavigate(); 

  type FieldType = {
    email?: string;
  };

  const onFinish = (values: FieldType) => {
    console.log('Email:', values.email);
    
    navigate('/passwordtoken');
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
          onFinish={onFinish} // xử lý submit tại đây
        >
          <div className="text-base text-lg mb-4 sm:mb-6">
            <Link
              to="/login"
              className="text-blue-500 hover:text-violet-600 flex gap-1 items-center"
            >
              <ArrowLeftOutlined />
              Quay lại đăng nhập
            </Link>
          </div>

          <h1 className="text-start mb-4 sm:mb-6 text-xl font-semibold text-gray-700">
            Nhập email để nhận liên kết đặt lại mật khẩu
          </h1>

          <Form.Item<FieldType>
            label={<span className="text-gray-700">Email</span>}
            name="email"
            rules={[
              { required: true, message: 'Vui lòng nhập email!' },
              { type: 'email', message: 'Email không hợp lệ!' },
            ]}
          >
            <Input
              prefix={<MailOutlined className="text-gray-400" />}
              placeholder="Nhập email đăng ký"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" size="large" htmlType="submit" className="w-full">
              Gửi yêu cầu
            </Button>
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

export default ForgotPassword;
