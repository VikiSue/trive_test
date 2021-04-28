import create from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BASE_URL, postData} from '../util/fetch-data';
import Toast from 'react-native-toast-message';

type SignInStore = {
  user: {
    name: string;
    age: string;
    email: string;
    address: string;
    password: string;
    img: string;
  };
  isLoading: boolean;
  setUser: () => void;
  userSignIn: (data: {}) => void;
  userRegister: (data: {}) => void;
  logOut: () => void;
  setNewPhoto: (photo: string) => void;
};
const initialUser = {
  name: '',
  age: '',
  email: '',
  address: '',
  password: '',
  img: 'https://www.loudegg.com/wp-content/uploads/2020/10/Patrick-Star.jpg',
};
export const useUserStore = create<SignInStore>(set => ({
  user: initialUser,
  isLoading: false,
  userSignIn: async data => {
    try {
      set({isLoading: true});
      const response = await postData(`${BASE_URL}/login`, data);

      if (response.data.status === 'success') {
        set({
          user: {
            ...response.data.data,
            img: 'https://www.loudegg.com/wp-content/uploads/2020/10/Patrick-Star.jpg',
          },
          isLoading: false,
        });
        await AsyncStorage.setItem(
          'user',
          JSON.stringify({
            ...response.data.data,
            img: 'https://www.loudegg.com/wp-content/uploads/2020/10/Patrick-Star.jpg',
          }),
        );
        Toast.show({
          type: 'success',
          visibilityTime: 2000,
          text1: 'Nice to see you!!',
        });
      } else {
        set({isLoading: false});
        Toast.show({
          type: 'error',
          visibilityTime: 2000,
          text1: 'Please check your credentials.',
        });
      }
    } catch (e) {
      set({isLoading: false});
      Toast.show({
        type: 'error',
        visibilityTime: 2000,
        text1: 'Something went wrong.',
      });
    }
  },
  userRegister: async data => {
    try {
      set({isLoading: true});
      const response = await postData(`${BASE_URL}/register`, data);
      set({
        user: {
          ...response.data.data,
          img: 'https://www.loudegg.com/wp-content/uploads/2020/10/Patrick-Star.jpg',
        },
        isLoading: false,
      });
      await AsyncStorage.setItem(
        'user',
        JSON.stringify({
          ...response.data.data,
          img: 'https://www.loudegg.com/wp-content/uploads/2020/10/Patrick-Star.jpg',
        }),
      );
      Toast.show({
        type: 'success',
        visibilityTime: 2000,
        text1: 'Welcome!',
      });
    } catch (e) {
      set({isLoading: false});
      Toast.show({
        type: 'error',
        visibilityTime: 2000,
        text1: 'Something went wrong.',
      });
    }
  },
  setUser: async () => {
    set({isLoading: true});
    const value = await AsyncStorage.getItem('user');
    if (value !== null) {
      set({user: JSON.parse(value)});
    }
    set({isLoading: false});
  },
  logOut: async () => {
    try {
      set({user: initialUser});
      await AsyncStorage.clear();
      Toast.show({
        type: 'info',
        visibilityTime: 2000,
        text1: 'See you soon!',
      });
    } catch (e) {
      Toast.show({
        type: 'error',
        visibilityTime: 2000,
        text1: 'Something went wrong.',
      });
    }
  },
  setNewPhoto: async photo => {
    const userData = await AsyncStorage.getItem('user');
    if (userData !== null) {
      set({
        user: {
          ...JSON.parse(userData),
          img: photo,
        },
        isLoading: false,
      });
      AsyncStorage.setItem(
        'user',
        JSON.stringify({
          ...JSON.parse(userData),
          img: photo,
        }),
      );
    }
    set({isLoading: false});
  },
}));
