import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router';
import Background from '../assets/images/Background.jpg';

const Login = () => {
  type FieldType = {
    username?: string;
    password?: string;
    remember?: boolean;
  };



  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden max-w-7xl w-full h-[96vh]">
        {/* Form Section */}
        <Form

          name="login"
          initialValues={{ remember: true }}
          autoComplete="off"
          className="w-full md:w-1/2 p-12 space-y-6 flex flex-col justify-center"
          layout="vertical"
        >
          <h1 className="text-center mb-6 text-xl font-semibold text-gray-700">
            Vui lòng nhập thông tin để truy cập vào tài khoản!
          </h1>

          <Form.Item<FieldType>
            label="Username"
            name="username"

            rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
          >
            <Input tabIndex={1} placeholder="Tên đăng nhập" size="large" />
          </Form.Item>

          <Form.Item<FieldType>
            name="password"
            label="Password"
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
            style={{ marginBottom: "2rem" }}
          >
            <Input.Password placeholder="Mật khẩu" size="large" />
          </Form.Item>

          <div className="flex items-center justify-between mb-6">
            <Form.Item<FieldType>
              name="remember"
              valuePropName="checked"
              noStyle
            >
              <Checkbox>Ghi nhớ tôi</Checkbox>
            </Form.Item>
            <Link to="#" className="text-blue-600 hover:text-blue-500">
              Quên mật khẩu?
            </Link>
          </div>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="w-full"
            >
              Đăng nhập
            </Button>
          </Form.Item>

          <div className="flex items-center justify-center my-6">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="px-4 text-gray-500">Hoặc</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button size="large">
              Đăng nhập bằng Google
            </Button>
            <Button size="large" className="border-gray-300">
              Đăng nhập bằng Facebook
            </Button>
          </div>

          <div className="text-center mt-6">
            <span className="text-gray-600">Chưa có tài khoản? </span>
            <Link to="/signup" className="text-blue-500 hover:text-blue-700">
              Đăng ký
            </Link>
          </div>
        </Form>

        {/* Image Section */}
        <div className="hidden md:block w-1/2 p-12">
          <img
            src={Background}
            alt="Login Background"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;