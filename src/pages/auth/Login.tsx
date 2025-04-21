import { Button, Checkbox, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router';
import Background from '../../assets/images/Background.jpg';
import FbIcon from '../../assets/images/Fb-Icon.jpg';
import GgIcon from '../../assets/images/Gg-Icon.jpg';
import { useLogin } from '../../hooks/useAuth';
const Login = () => {
  type FieldType = {
    username?: string;
    password?: string;
    remember?: boolean;
  };

  const navigate = useNavigate();
  const { mutate: loginMutate, isPending } = useLogin(
    (data) => {
      localStorage.setItem('token', data.token);
      console.log('Login success', data);
      navigate("/");
    },
    (error) => {
      console.error('Login error', error);
    }
  );

  const onFinish = (values: any) => {
    // call api login
    loginMutate({
      username: values.username,
      password: values.password
    });
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8  bg-gradient-to-r from-violet-200 to-violet-300">
        <Form
          name="login"
          initialValues={{ remember: true }}
          autoComplete="off"
          className="w-full max-w-lg"
          layout="vertical"
          onFinish={onFinish}
        >
          <h1 className="text-center mb-6 text-xl font-semibold text-gray-700">
            Nhập đầy đủ thông tin để truy cập vào tài khoản!
          </h1>

          <Form.Item<FieldType>
            label={<span className="text-gray-700">Username</span>}
            name="username"
            rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
          >
            <Input placeholder="Tên đăng nhập" size="large" />
          </Form.Item>

          <Form.Item<FieldType>
            label={<span className="text-gray-700">Password</span>}
            name="password"
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
          >
            <Input.Password placeholder="Mật khẩu" size="large" />
          </Form.Item>

          <div className="flex items-center justify-between mb-6">
            <Form.Item<FieldType>
              name="remember"
              valuePropName="checked"
              noStyle
            >
              <Checkbox>Nhớ mật khẩu</Checkbox>
            </Form.Item>
            <Link to="#">
              <p className="text-blue-500 hover:text-violet-600">Quên mật khẩu?</p>
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
            <span className="px-4 text-gray-700">Or</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button size="large" className="border-gray-300">
              <img
                src={GgIcon}
                alt="Facebook Icon"
                className='w-4'
                style={{ width: '20px', height: '20px', marginRight: '8px' }}
              />
              Đăng nhập bằng Facebook
            </Button>
            <Button size="large" className="border-gray-300">
              <img
                src={FbIcon}
                alt="Facebook Icon"
                className='w-4'
                style={{ width: '20px', height: '20px', marginRight: '8px' }}
              />
              Đăng nhập bằng Facebook
            </Button>
          </div>

          <div className="text-center mt-6 flex items-center justify-center">
            <span className="text-gray-700 text-[16px]">Chưa có tài khoản?</span>
            <Link to="/signup" >
              <p className="text-blue-500 hover:text-violet-600 text-[16px] ml-1">Đăng ký</p>
            </Link>
          </div>
        </Form>
      </div>

      {/* Image Section */}
      <div className="hidden md:block w-full md:w-1/2">
        <img
          src={Background}
          alt="Login Background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;