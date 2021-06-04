const services = {
  cloudHosting: 'Cloud Hosting',
  domain: {
    placeHolderSearch: 'Nhập tên domain mà bạn muốn kiểm tra',
    availableStatus: `Chúc mừng! {domain} có sẵn!`,
    unAvailableStatus: `Domain {domain} đã có người đăng ký!`,
  },
};

const hostingService = {
  tabs: {
    cloudHosting: 'Cloud Hosting',
    cloudHostingBusiness: 'Cloud Hosting Business',
    cloudHostingSeo: 'Cloud Hosting SEO',
    unlimitedHosting: 'Unlimited Hosting',
  },
};

const products = {
  labels: { month: 'tháng' },
  buttons: {
    order: 'Đặt hàng',
  },
};

const topup = {
  recharge: 'Recharge',
  paymentMethods: 'Payment methods',
  amountDeposit: 'Amount to deposit',
  info:
    'Here you can top up the customer account to use to pay for arising invoices or to order services.',
  note1:
    'A fixed top-up will help you manage small transactions in your passenger account. The smallest amount is 100.000 VND',
  note2:
    '* Note: We do not refund any deposit. The amount you have deposited will also not be automatically deducted from the invoice incurred.',
};

export { services, hostingService, products, topup };
