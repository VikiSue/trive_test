import React from 'react';
import {FormWrap} from '../../components/form/form-wrap';
import {Formik} from 'formik';
import {SignUpSchema} from '../../util/validation';
import {DarkButton, DarkButtonText, ErrorText, TextInput} from '../../styles/styled-components';
import {useUserStore} from '../../core/store';

const initialValues = {name: '', age: '', address: '', email: 'string', password: ''};

export const SignUp = () => {
  const [userRegister, isLoading] = useUserStore(state => [state.userRegister, state.isLoading]);
  return (
    <FormWrap
      title="Register Form"
      navigateBtnText="Already have account"
      navigateToPage="LoginScreen">
      <Formik
        initialValues={initialValues}
        validationSchema={SignUpSchema}
        onSubmit={values => userRegister(values)}>
        {({errors, touched, handleChange, handleSubmit}) => (
          <>
            <TextInput
              onChangeText={handleChange('name')}
              placeholder="Enter your name"
              maxLength={25}
            />
            <ErrorText> {touched.name && errors.name && errors.name}</ErrorText>
            <TextInput
              onChangeText={handleChange('age')}
              placeholder="Enter your age"
              keyboardType="numeric"
            />
            <ErrorText> {touched.age && errors.age && errors.age}</ErrorText>
            <TextInput onChangeText={handleChange('address')} placeholder="Enter your address" />
            <ErrorText> {touched.address && errors.address && errors.address}</ErrorText>
            <TextInput onChangeText={handleChange('email')} placeholder="Enter your email" />
            <ErrorText> {touched.email && errors.email && errors.email}</ErrorText>
            <TextInput
              onChangeText={handleChange('password')}
              placeholder="Enter your password"
              maxLength={15}
              secureTextEntry={true}
            />
            <ErrorText> {touched.password && errors.password && errors.password}</ErrorText>
            <DarkButton onPress={handleSubmit}>
              <DarkButtonText>Register</DarkButtonText>
            </DarkButton>
          </>
        )}
      </Formik>
    </FormWrap>
  );
};
