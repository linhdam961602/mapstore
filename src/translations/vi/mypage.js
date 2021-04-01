const mypage = {
  titlePage: 'Tổng quan dịch vụ',
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
};

export { mypage };
