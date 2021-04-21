const login = {
  title: 'Đăng nhập',
  placeholders: {
    email: 'Nhập email',
    password: 'Mật khẩu',
  },
  text: {
    rememberMe: 'Ghi nhớ tài khoản',
    forgotPassword: 'Quên mật khẩu?',
    notAMember: 'Chưa là thành viên?',
    createAcc: 'Tạo tài khoản mới',
    useAcc: 'Hoặc sử dụng tài khoản của bạn',
  },
  buttons: {
    login: 'Đăng nhập',
    loginWGoogle: 'Đăng nhập bằng Google',
  },
};

const registration = {
  title: 'Đăng ký',
  headings: {
    compInfo: 'Thông tin công ty',
    perInfo: 'Thông tin cá nhân',
    accSec: 'Bảo mật tài khoản',
  },
  errors: {
    agreement: 'Bạn phải đồng ý với các điều khoản và điều kiện.',
    recaptcha: 'Vui lòng click vào ô xác nhận “Tôi không phải là người máy”.',
  },
};

const forgotPassword = {
  title: 'Quên mật khẩu',
  labels: {
    email: 'Địa chỉ email',
  },
  placeholders: {
    email: 'Nhập email',
  },
  buttons: {
    submit: 'Gửi',
  },
};

export { login, registration, forgotPassword };
