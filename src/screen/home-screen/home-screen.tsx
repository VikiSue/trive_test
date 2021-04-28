import React from 'react';
import {
  Card,
  Container,
  PageTitle,
  ProfilePhoto,
  RowContainer,
  TextPlane,
  TextSubtitle,
  TransparentSmallButton,
  TransparentSmallButtonText,
} from '../../styles/styled-components';
import {useUserStore} from '../../state/store';
import ImagePicker from 'react-native-image-crop-picker';

export const HomeScreen = () => {
  const [user, setNewPhoto] = useUserStore(state => [state.user, state.setNewPhoto]);

  const handleChoosePhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setNewPhoto(image.path);
    });
  };
  const handleTakePhoto = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setNewPhoto(image.path);
    });
  };
  return (
    <Container>
      <PageTitle>Profile</PageTitle>
      <Card>
        <ProfilePhoto
          source={{
            uri: `${user.img}`,
          }}
        />

        <TransparentSmallButton onPress={handleChoosePhoto}>
          <TransparentSmallButtonText>Choose from gallery</TransparentSmallButtonText>
        </TransparentSmallButton>
        <TransparentSmallButton onPress={handleTakePhoto}>
          <TransparentSmallButtonText>Take a new photo</TransparentSmallButtonText>
        </TransparentSmallButton>

        <RowContainer>
          <TextSubtitle>Name:</TextSubtitle>
          <TextPlane>{user.name}</TextPlane>
        </RowContainer>
        <RowContainer>
          <TextSubtitle>Age:</TextSubtitle>
          <TextPlane>{user.age}</TextPlane>
        </RowContainer>
        <RowContainer>
          <TextSubtitle>Address:</TextSubtitle>
          <TextPlane>{user.address}</TextPlane>
        </RowContainer>
      </Card>
    </Container>
  );
};
