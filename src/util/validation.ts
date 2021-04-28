import * as Yup from 'yup';

export const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(5, 'At least 5 characters required')
    .max(15, 'Maximum 15 characters!')
    .required('Password is required'),
});
export const SignUpSchema = Yup.object().shape({
  name: Yup.string().required('Name is required').min(2, 'At least 2 characters required'),
  age: Yup.string().required('Age is required').min(1, 'At least 1 characters required'),
  address: Yup.string().required('Address is required').min(3, 'At least 1 characters required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(5, 'At least 5 characters required')
    .max(15, 'Maximum 15 characters!')
    .required('Password is required'),
});
