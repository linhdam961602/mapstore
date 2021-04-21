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
};

export { mypage };
