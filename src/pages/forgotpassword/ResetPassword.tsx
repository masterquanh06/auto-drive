import { Button, Form, Input } from 'antd';
import { Link } from 'react-router';
import Background from '../../assets/images/Background.jpg';


const ResetPassword = () => {
  type FieldType = {
    password?: string;
    confirmPassword?: string;
    
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
          <h1 className="text-center mb-4 sm:mb-6 text-xl sm:text-2xl font-semibold text-gray-700">
            Đặt lại mật khẩu mới
          </h1>

          <Form.Item<FieldType>
            label={<span className="text-gray-700 text-sm sm:text-base">Mật khẩu</span>}
            name="password"
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
            hasFeedback
          >
            <Input.Password placeholder="Mật khẩu" size="large" className="text-sm sm:text-base" />
          </Form.Item>

          <Form.Item<FieldType>
            label={<span className="text-gray-700 text-sm sm:text-base">Nhập lại mật khẩu</span>}
            name="confirmPassword"
            dependencies={['password']}
            hasFeedback
            rules={[
                { required: true, message: 'Vui lòng nhập lại mật khẩu!' },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('Mật khẩu nhập lại không khớp!'));
                    },
                  })    
            ]}
          >
            <Input.Password placeholder="Mật khẩu" size="large" className="text-sm sm:text-base" />
          </Form.Item>

          <Form.Item>
            <Link to="/login" className="w-full">
              <Button type="primary" size="large" className="w-full">
                Đặt lại mật khẩu
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

export default ResetPassword;