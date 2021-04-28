import React from 'react';
import {DarkButton, DarkButtonText, ErrorText, TextInput} from '../../styles/styled-components';
import {Formik} from 'formik';
import {SignInSchema} from '../../util/validation';
import {useUserStore} from '../../state/store';
import {FormWrap} from '../../components/form/form-wrap';

const initialValues = {email: 'string', password: ''};

export const SignIn = () => {
  const userSignIn = useUserStore(state => state.userSignIn);

  return (
    <FormWrap title="Sign In Form" navigateBtnText="Create your account" navigateToPage="SignUp">
      <Formik
        initialValues={initialValues}
        validationSchema={SignInSchema}
        onSubmit={values => userSignIn(values)}>
        {({errors, touched, handleChange, handleSubmit}) => (
          <>
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
              <DarkButtonText>Sign In</DarkButtonText>
            </DarkButton>
          </>
        )}
      </Formik>
    </FormWrap>
  );
};
