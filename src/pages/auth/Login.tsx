import { Button, Checkbox, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router';
import Background from '../../assets/images/Background.jpg';
import FbIcon from '../../assets/images/Fb-Icon.jpg';
import GgIcon from '../../assets/images/Gg-Icon.jpg';
import { useAuth } from '../../context/auth.context';
import { useLogin } from '../../hooks/useAuth';
// import { getProfile } from '../../services/auth.service';

const Login = () => {
  type FieldType = {
    username?: string;
    password?: string;
    remember?: boolean;
  };
  // const { login } = useAuth();
  const navigate = useNavigate();

  const { mutate: loginMutate, isPending } = useLogin(
    async (data) => {
      try {
        localStorage.setItem('token', data.token);

        // Fetch user profile after successful login
        // const userProfile = await getProfile();

        // login(
        //   {
        //     id: userProfile.id,
        //     username: userProfile.username,
        //     email: userProfile.email,
        //     role: userProfile.role,
        //     avatar: userProfile.avatar || ''
        //   },
        //   data.token
        // );

        console.log('Login success');
        navigate("/");
      } catch (error) {
        console.error('Error fetching profile:', error);
        localStorage.removeItem('token');
      }
    },
    (error) => {
      console.error('Login error:', error);
    }
  );

  const onFinish = (values: any) => {
    loginMutate({
      username: values.username,
      password: values.password
    });
  };


  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Form Section */}
      <div className="w-full h-full md:w-1/2 flex items-center justify-center p-8  bg-gradient-to-r from-violet-200 to-violet-300">
        <Form
          name="login"
          initialValues={{ remember: true }}
          autoComplete="off"
          className="w-full max-w-md sm:max-w-lg"
          layout="vertical"
          onFinish={onFinish}
        >
          <h1 className="text-center mb-4 sm:mb-6 text-lg sm:text-xl md:text-2xl font-semibold text-gray-700">
            Nhập đầy đủ thông tin để truy cập vào tài khoản!
          </h1>

          <Form.Item<FieldType>
            label={<span className="text-gray-700 text-sm sm:text-base">Tên tài khoản</span>}
            name="username"
            rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
          >
            <Input placeholder="Tên đăng nhập" size="large" className="text-sm sm:text-base" />
          </Form.Item>

          <Form.Item<FieldType>
            label={<span className="text-gray-700 text-sm sm:text-base">Mật khẩu</span>}
            name="password"
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
          >
            <Input.Password placeholder="Mật khẩu" size="large" className="text-sm sm:text-base" />
          </Form.Item>

          <div className="flex flex-row sm:flex-row items-center justify-between mb-4 sm:mb-6 space-y-3 sm:space-y-0">
            <Form.Item<FieldType>
              name="remember"
              valuePropName="checked"
              noStyle
            >
              <Checkbox className="text-sm sm:text-base">Nhớ mật khẩu</Checkbox>
            </Form.Item>
            <Link to="/forgotpassword">
              <p className="text-blue-500 hover:text-violet-600 text-sm sm:text-base">Quên mật khẩu?</p>
            </Link>
          </div>

          <Form.Item>
            <Button

              type="primary"
              htmlType="submit"
              size="large"
              className="w-full text-sm sm:text-base"
            >
              Đăng nhập
            </Button>
          </Form.Item>

          <div className="flex items-center justify-center my-4 sm:my-6">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="px-4 text-gray-700 text-sm sm:text-base">Or</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          <div className="grid grid-cols-2 max-xl:grid-cols-1  gap-4">
            <Button size="large" className="border-gray-300">
              <img
                src={GgIcon}
                alt="Google Icon"
                className='w-4'
                style={{ width: '20px', height: '20px', marginRight: '8px' }}
              />
              Đăng nhập bằng Google
            </Button>
            <Button size="large" className="border-gray-300 flex items-center justify-center text-sm sm:text-base">
              <img
                src={FbIcon}
                alt="Facebook Icon"
                className='w-4'
                style={{ width: '20px', height: '20px', marginRight: '8px' }}
              />
              Đăng nhập bằng Facebook
            </Button>
          </div>

          <div className="text-center mt-4 sm:mt-6 flex items-center justify-center">
            <span className="text-gray-700 text-sm sm:text-base">Chưa có tài khoản?</span>
            <Link to="/signup">
              <p className="text-blue-500 hover:text-violet-600 text-sm sm:text-base ml-1">Đăng ký</p>
            </Link>
          </div>
        </Form>
      </div>

      {/* Image Section */}
      <div className="hidden lg:block w-full lg:w-1/2">
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