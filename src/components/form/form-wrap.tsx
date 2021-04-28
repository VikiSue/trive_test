import React, {ReactElement} from 'react';
import {
  Container,
  FormContainer,
  FormHeader,
  FormTitle,
  KeyboardAvoidingContainer,
  LogoWrap,
  TransparentButton,
  TransparentButtonText,
} from '../../styles/styled-components';
// @ts-ignore
import Logo from '../../assets/logo.svg';
import {useNavigation} from '@react-navigation/native';

interface Props {
  title: string;
  navigateBtnText: string;
  navigateToPage: string;
  children: ReactElement;
}
export const FormWrap = ({title, navigateBtnText, navigateToPage, children}: Props) => {
  const navigation = useNavigation();

  return (
    <Container>
      <LogoWrap>
        <Logo width="70" height="70" />
      </LogoWrap>
      <KeyboardAvoidingContainer behavior="padding" keyboardVerticalOffset={50}>
        <FormContainer>
          <FormHeader>
            <FormTitle>{title}</FormTitle>
          </FormHeader>
          {children}
          <TransparentButton onPress={() => navigation.navigate(navigateToPage)}>
            <TransparentButtonText>{navigateBtnText}</TransparentButtonText>
          </TransparentButton>
        </FormContainer>
      </KeyboardAvoidingContainer>
    </Container>
  );
};
