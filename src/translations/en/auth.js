const login = {
  title: 'Login',
  placeholders: {
    email: 'Enter your email',
    password: 'Password',
  },
  text: {
    rememberMe: 'Remember account',
    forgotPassword: 'Forgot password?',
    notAMember: 'Not a member yet?',
    createAcc: 'Create a new account',
    useAcc: 'Or use your account',
  },
  buttons: {
    login: 'Login',
    loginWGoogle: 'Login with Google',
  },
};

const registration = {
  title: 'Registration',
  headings: {
    compInfo: 'Company information',
    perInfo: 'Personal information',
    accSec: 'Account security',
  },
  labels: {
    typeOfSubj: 'Type of subject',
    compName: 'Company name',
    taxCode: 'Tax code',
    youAre: 'You are',
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email Address',
    phone: 'Phone',
    idPp: 'ID/Passport',
    country: 'Country',
    province: 'Province/City',
    district: 'District',
    howFindUs: 'How did you find us?',
    password: 'Password',
    repassword: 'Re-password',
    agreement: 'I have read and agree to the ',
    termsOfService: 'terms of service',
    currency: 'Currency',
    birthday: 'Birthday',
    address: 'Address',
    alreadyHaveAcc: 'Already have an account?',
  },
  buttons: {
    register: 'Register an account',
    next: 'Next',
    prev: 'Previous',
    login: 'Login',
  },
  errors: {
    agreement: 'You must agree with the terms and conditions.',
    recaptcha: 'Please click on the “I am not a robot” confirmation box.',
  },
};

const forgotPassword = {
  title: 'Forgot Password',
  labels: {
    email: 'Email Address',
  },
  placeholders: {
    email: 'Enter your email',
  },
  buttons: {
    submit: 'Submit',
  },
};

export { login, registration, forgotPassword };
