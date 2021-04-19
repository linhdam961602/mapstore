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
  dropdownMenu: {
    profile: 'Thông tin cá nhân',
    logout: 'Đăng xuất',
    emmtyNoti: 'Không có thông báo nào',
  },
  wallet: 'Số dư',
  myInformation: {
    personalInfo: 'Thông tin cá nhân',
    paymentAddress: 'Địa chỉ thanh toán',
    labels: {
      typeOfSubj: 'Loại chủ thể',
      compName: 'Tên công ty',
      taxCode: 'Mã số thuế',
      firstName: 'Tên',
      lastName: 'Họ',
      email: 'Địa chỉ email',
      phone: 'Số điện thoại',
      country: 'Quốc gia',
      province: 'Tỉnh/Thành phố',
      district: 'Quận/Huyện',
      birthday: 'Ngày sinh',
      address: 'Địa chỉ',
    },
  },
};

export { mypage };
