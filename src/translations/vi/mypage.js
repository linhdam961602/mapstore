const mypage = {
  service: 'Dịch vụ',
  domain: 'Tên miền',
  invoiceNotPaid: 'Hóa đơn chưa thanh toán',
  support: 'Hỗ trợ',
  gridInvoceDue: {
    heading: 'Hợp đồng quá hạn',
    columns: {
      id: 'ID',
      invoiceDate: 'Ngày tạo hợp đồng',
      dateDue: 'Ngày đáo hạn',
      total: 'Thành tiền',
      balance: 'Số tiền',
      status: 'Trạng thái',
    },
    myInvoice: 'Quản lý hợp đồng',
  },
  gridOpenSupportTicket: {
    heading: 'Yêu cầu hỗ trợ gần đây',
    columns: {
      id: 'ID',
      subject: 'Chủ đề',
      department: 'Bộ phận',
      lastUpdate: 'Cập nhật cuối',
      status: 'Trạng thái',
    },
    mySupportTicket: 'Quản lý ticket',
  },
  gridMyService: {
    heading: 'Dịch vụ của tôi',
    columns: {
      id: 'ID',
      category: 'Thể loại',
      domain: 'Domain',
      name: 'Tên',
      nextDue: 'Ngày hết hạn kế tiếp',
      total: 'Tổng cộng',
      status: 'Trạng thái',
    },
  },
  dropdownMenu: {
    profile: 'Thông tin cá nhân',
    logout: 'Đăng xuất',
    emmtyNoti: 'Không có thông báo nào',
  },
  wallet: 'Số dư',
  changePass: {
    labels: {
      oldPassword: 'Mật khẩu cũ',
      newPassword: 'Mật khẩu mới',
      rePassword: 'Nhập lại mật khẩu mới',
    },
  },
  securitySetting: {
    chooseSecurity:
      'Vui lòng lựa chọn 1 trong các tác vụ sau, việc này sẽ giúp tài khoản của bạn an toàn hơn.',
    connectAccount:
      'Kết nối tài khoản của bạn với bất kì dịch vụ nào dưới đây để đơn giản hóa trải nghiệm đăng nhập của bạn. Chúng tôi chỉ sử dụng thông tin này để xác minh tài khoản của bạn và không bao giờ thay bạn đăng nhập.',
    connectAccountTab: 'Liên kết tài khoản',
    twoAuthenTab: 'Xác thực hai yếu tố',
    oneAuthenTab: 'Xác thực đăng nhập một lần (SSO)',
    columns: {
      supplier: 'Nhà cung cấp',
      name: 'Tên',
      email: 'Email',
      action: 'Thao tác',
      removeLink: 'Gỡ bỏ liên kết',
    },
  },
  emailHistory: {
    columns: {
      date: 'Ngày gửi mail',
      title: 'Tiêu đề thư',
    },
  },
};

export { mypage };
