const mypage = {
  service: 'Service',
  domain: 'Domain',
  invoiceNotPaid: 'Invoice Not Paid',
  support: 'Support',
  gridInvoceDue: {
    heading: 'Invoice Due',
    columns: {
      id: 'ID',
      invoiceDate: 'Invoice Date',
      dateDue: 'Date Due',
      total: 'Total',
      balance: 'Balance',
      status: 'Status',
    },
    myInvoice: 'My Invoices',
  },
  gridOpenSupportTicket: {
    heading: 'Open Support Ticket',
    columns: {
      id: 'ID',
      subject: 'Subject',
      department: 'Department',
      lastUpdate: 'Last Update',
      status: 'Status',
    },
    mySupportTicket: 'My support ticket',
  },
  gridMyService: {
    heading: 'My Service Active',
    columns: {
      id: 'ID',
      category: 'Category',
      domain: 'Domain',
      name: 'Name',
      nextDue: 'Next Due Date',
      total: 'Total',
      status: 'Status',
    },
  },
  dropdownMenu: {
    profile: 'User profile',
    logout: 'Logout',
    emmtyNoti: 'No Notification',
  },
  wallet: 'Wallet',
  changePass: {
    labels: {
      oldPassword: 'Old password',
      newPassword: 'New password',
      rePassword: 'Re-enter new password',
    },
  },
  securitySetting: {
    chooseSecurity:
      'Please choose one of the following actions, this will make your account more secure.',
    connectAccount:
      'Connect your account to any of the services below to simplify your sign-in experience. We only use this information to verify your account and never sign in for you.',
    connectAccountTab: 'Account Links',
    twoAuthenTab: 'Two-factor authentication',
    oneAuthenTab: 'One-time login authentication (SSO)',
    columns: {
      supplier: 'Supplier',
      name: 'Name',
      email: 'Email',
      action: 'Action',
      removeLink: 'Unlink',
    },
  },
  emailHistory: {
    columns: {
      date: 'Date',
      title: 'Title',
    },
  },
};

export { mypage };
