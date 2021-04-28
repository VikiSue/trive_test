import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {
  backgroundColor,
  borderRadius,
  brandColor,
  errorColor,
  secondBrandColor,
} from './style-const';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const ActivityIndContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
`;
export const Container = styled.SafeAreaView`
  width: ${windowWidth};
  height: ${windowHeight};
  align-items: center;
  background-color: white;
`;
export const LogoWrap = styled.View`
  margin: 20px 0 20px;
`;

export const FormContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    width: windowWidth * 0.9,
    paddingTop: 80,
    paddingHorizontal: 5,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: secondBrandColor,
    borderRadius: 10,
    position: 'relative',
    marginBottom: 260,
  },
}))``;

export const FormHeader = styled.View`
  height: 70px;
  background-color: ${secondBrandColor};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  border-bottom-width: 3px;
  border-bottom-color: ${secondBrandColor};
`;

export const FormTitle = styled.Text`
  color: ${brandColor};
  font-size: 20px;
  font-weight: bold;
`;

export const TextInput = styled.TextInput`
  border-radius: ${borderRadius};
  min-width: ${windowWidth * 0.82};
  height: 60px;
  padding: 5px;
  border-width: 2px;
  border-color: ${secondBrandColor};
  margin: 12px 0;
`;
export const ErrorText = styled.Text`
  color: ${errorColor};
  font-size: 10px;
  height: 12px;
  text-align: left;
  min-width: ${windowWidth * 0.82};
  margin-top: -10px;
`;
export const DarkButton = styled.TouchableOpacity`
  border-radius: ${borderRadius};
  width: 200px;
  height: 60px;
  padding: 5px;
  border-width: 2px;
  background-color: ${secondBrandColor};
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;
export const DarkButtonText = styled.Text`
  color: ${brandColor};
  font-size: 16px;
  font-weight: bold;
`;

export const TransparentButton = styled.TouchableOpacity`
  border-radius: ${borderRadius};
  width: 200px;
  height: 60px;
  padding: 5px;
  border-width: 2px;
  border-color: ${brandColor}
  background-color: transparent;
  margin: 10px 0;
  justify-content: center;
  align-items: center;
`;
export const TransparentButtonText = styled.Text`
  color: ${secondBrandColor};
  font-size: 16px;
  font-weight: bold;
`;
export const TransparentSmallButton = styled.TouchableOpacity`
  border-radius: ${borderRadius};
  width: 200px;
  height: 30px;
  padding: 5px;
  border-width: 2px;
  border-color: ${brandColor}
  background-color: transparent;
  margin: 5px 0;
  justify-content: center;
  align-items: center;
`;
export const TransparentSmallButtonText = styled.Text`
  color: ${secondBrandColor};
  font-size: 12px;
`;

export const KeyboardAvoidingContainer = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const TextSubtitle = styled.Text`
  color: ${secondBrandColor};
  font-size: 16px;
  font-weight: bold;
  margin-right: 5px;
`;
export const TextPlane = styled.Text`
  color: ${secondBrandColor};
  font-size: 14px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const RowContainer = styled.View`
  width: ${windowWidth * 0.7};
  flex-direction: row;
  align-items: baseline;
  margin: 10px;
  overflow: hidden;
`;
export const Card = styled.View`
  width: ${windowWidth * 0.8};
  justify-content: center;
  align-items: center;
  border-radius: ${borderRadius};
  background-color: ${backgroundColor};
  margin: 10px 0;
  border-width: 2px;
  border-color: ${brandColor};
`;
export const PageTitle = styled.Text`
  color: ${secondBrandColor};
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0;
`;

export const ProfilePhoto = styled.Image`
  width: ${windowWidth * 0.5};
  height: 160px;
  margin: 10px 0;
  border-radius: ${borderRadius};
  border-width: 1px;
  border-color: ${secondBrandColor};
`;

export const NavHeader = styled.View`
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  top: -10px;
`;
