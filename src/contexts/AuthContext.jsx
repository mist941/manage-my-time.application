import {createContext, useEffect, useState} from "react";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import services from '../services';
import {ANDROID_CLIENT_ID, EXPO_CLIENT_ID, REDIRECT_URI} from '@env';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLoggedUser().then(data => {
      setCurrentUser(JSON.parse(data));
      setLoading(false);
    });
  }, []);

  const [request, response] = Google.useAuthRequest({
    androidClientId: ANDROID_CLIENT_ID,
    expoClientId: EXPO_CLIENT_ID,
    redirectUri: REDIRECT_URI,
    useProxy: true
  });

  const getLoggedUser = async () => await AsyncStorage.getItem('@logged_user');

  const putUser = async user => {
    await AsyncStorage.setItem(
      '@logged_user',
      JSON.stringify(user)
    );
    setCurrentUser(user);
  };

  const signIn = userParams => {
    services.authServices.signIn({...userParams, push_notification_token: "Auth"}).then(res => {
      putUser(res.data);
    });
  }

  return (
    <AuthContext.Provider
      value={{
        response,
        request,
        currentUser,
        loading,
        signIn
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
