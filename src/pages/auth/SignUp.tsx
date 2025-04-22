import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router';
import Background from '../../assets/images/Background.jpg';


const SignUp = () => {
  type FieldType = {
    email?: string;
    username?: string;
    password?: string;
    confirmPassword?: string;
    agree?: boolean;
  };

  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Form Section */}
      <div className="w-full h-full md:w-1/2 flex items-center justify-center p-4 md:p-8 bg-gradient-to-r from-violet-200 to-violet-300">
        <Form
          name="register"
          initialValues={{ remember: true }}
          autoComplete="off"
          className="w-full max-w-md"
          layout="vertical"
        >

          <div className="text-center mb-4">
            <h1 className="text-xl md:text-2xl font-semibold text-gray-700">
              Tạo tài khoản
            </h1>
            <p className="text-sm md:text-base text-gray-600">Vui lòng điền đầy đủ thông tin!</p>
          </div>


          <Form.Item<FieldType>
            label={<span className="text-gray-700 text-sm">Email</span>}
            name="email"
            rules={[
              { required: true, message: 'Vui lòng nhập email!' },
              { type: 'email', message: 'Email không hợp lệ!' }
            ]}
            className="mb-3"
          >
            <Input placeholder="Nhập email" size="middle" />
          </Form.Item>

          <Form.Item<FieldType>
            label={<span className="text-gray-700 text-sm">Tên tài khoản</span>}
            name="username"
            rules={[{ required: true, message: 'Vui lòng nhập tên tài khoản!' }]}
            className="mb-3"
          >
            <Input placeholder="Nhập tên tài khoản" size="middle" />
          </Form.Item>

          <Form.Item<FieldType>
            label={<span className="text-gray-700 text-sm">Mật khẩu</span>}
            name="password"
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
            className="mb-3"
          >
            <Input.Password placeholder="Nhập mật khẩu" size="middle" />
          </Form.Item>

          <Form.Item<FieldType>
            label={<span className="text-gray-700 text-sm">Xác thực mật khẩu</span>}
            name="confirmPassword"
            dependencies={['password']}
            rules={[
              { required: true, message: 'Vui lòng nhập lại mật khẩu!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Mật khẩu không khớp!'));
                },
              }),
            ]}
            className="mb-3"
          >
            <Input.Password placeholder="Nhập lại mật khẩu" size="middle" />
          </Form.Item>

          <Form.Item<FieldType>
            name="agree"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(new Error('Bạn cần đồng ý với điều khoản!')),
              },
            ]}
            className="mb-4"
          >
            <Checkbox className="text-sm">Tôi đồng ý với điều khoản và dịch vụ</Checkbox>
          </Form.Item>

          <Form.Item className="mb-4">
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="w-full"
            >
              Đăng ký
            </Button>
          </Form.Item>

          <div className="flex items-center justify-center my-2">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="px-2 text-gray-500 text-xs">Or</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          <div className="text-center text-sm">
            <span className="text-gray-700">Đã có tài khoản? </span>
            <Link to="/login" className="text-blue-500 hover:text-violet-600">
              Đăng nhập
            </Link>
          </div>
        </Form>
      </div>

      {/* Image Section */}
      <div className="hidden md:block w-full md:w-1/2">
        <img
          src={Background}
          alt="Register Background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SignUp;