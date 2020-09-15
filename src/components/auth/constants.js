import Input from 'UI/input-text/Input';
import Password from 'UI/input-password/Password';
import Dropdown from 'UI/dropdown/Dropdown';
import * as yup from 'yup';
import { phoneRegExp } from 'utils/constants';

export const LOGIN = 'login';
export const COMPANY_NAME = 'companyName';
export const ADDRESS = 'address';
export const PHONE = 'phone';
export const EMAIL = 'email';
export const BUSINESS_TYPE = 'businessType';
export const EMPLOYEES_COUNT = 'emloyeesCount';
export const PAY_DAY = 'payDay';
export const PAY_PERIOD = 'payPeriod';
export const PASSWORD = 'password';
export const PASSWORD_CONFIRM = 'passwordConfirm';

export const signUpSchema = yup.object().shape({
  [COMPANY_NAME]: yup.string().required('* Required'),
  [ADDRESS]: yup.string().required('* Required'),
  [PHONE]: yup.string().required('* Required').matches(phoneRegExp, 'Phone number is not valid'),
  [EMAIL]: yup.string().required('* Required').email(),
  [BUSINESS_TYPE]: yup.string().required('* Required'),
  [EMPLOYEES_COUNT]: yup.string().required('* Required'),
  [PAY_DAY]: yup.string().required('* Required'),
  [PAY_PERIOD]: yup.string().required('* Required'),
  [PASSWORD]: yup.string().required('* Required'),
  [PASSWORD_CONFIRM]: yup.string()
    .oneOf([yup.ref(PASSWORD), null], 'Passwords must match'),
});

export const loginSchema = yup.object().shape({
  [LOGIN]: yup.string().required('* Required'),
  [PASSWORD]: yup.string().required('* Required'),
});

export const EMPLOYEES_COUNT_SELECT = [
  {
    label: 'Eployee 1-3 (Free)',
    value: 3,
  },
  {
    label: 'Eployee 4-10',
    value: 10,
  },
  {
    label: 'Eployee 10-20',
    value: 20,
  },
  {
    label: 'Eployee 20-30',
    value: 30,
  },
  {
    label: 'Eployee 30-40',
    value: 40,
  },
];

export const PAY_DAY_SELECT = [
  {
    value: 'Mon-Sun',
  },
  {
    value: 'Tue-Mon',
  },
  {
    value: 'Wed-Tue',
  },
  {
    value: 'Thu-Wed',
  },
  {
    value: 'Fri-Thu',
  },
  {
    value: 'Sat-Fri',
  },
  {
    value: 'Sun-Sat',
  },
];

export const PAY_PERIOD_SELECT = [
  {
    value: 'Weekly',
  },
  {
    value: 'Bi-weekly',
  },
];

export const LOGIN_FORM_INPUTS = [
  {
    name: LOGIN,
    placeholder: 'Login',
    Component: Input,
    required: true,
  },
  {
    name: PASSWORD,
    placeholder: 'Password',
    Component: Password,
    required: true,
  },
];

export const SIGNUP_FORM_INPUTS = [
  {
    name: COMPANY_NAME,
    placeholder: 'Company Name',
    Component: Input,
    required: true,
  },
  {
    name: ADDRESS,
    placeholder: 'Address',
    Component: Input,
    required: true,
  },
  {
    name: PHONE,
    placeholder: 'Phone number',
    type: 'tel',
    Component: Input,
    required: true,
  },
  {
    name: EMAIL,
    placeholder: 'E-mail',
    type: EMAIL,
    Component: Input,
    required: true,
  },
  {
    name: BUSINESS_TYPE,
    placeholder: 'Type of business',
    Component: Input,
    required: true,
  },
  {
    name: EMPLOYEES_COUNT,
    title: 'Number of emloyees',
    optionsConfig: EMPLOYEES_COUNT_SELECT,
    Component: Dropdown,
    required: true,
  },
  {
    name: PAY_DAY,
    title: 'Pay period',
    optionsConfig: PAY_DAY_SELECT,
    Component: Dropdown,
    required: true,
  },
  {
    name: PAY_PERIOD,
    title: 'Pay weekly/bi-weekly',
    optionsConfig: PAY_PERIOD_SELECT,
    Component: Dropdown,
    required: true,
  },
  {
    name: PASSWORD,
    placeholder: 'Password',
    Component: Password,
    required: true,
  },
  {
    name: PASSWORD_CONFIRM,
    placeholder: 'Confirm password',
    Component: Password,
    required: true,
  },
];

