import {SafeAreaView, StyleSheet} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {I18nextProvider} from 'react-i18next';
import i18n from './src/i18n';
import * as WebBrowser from 'expo-web-browser';
import AuthProvider from './src/contexts/AuthContext';
import Router from './src/router/Router';
import commonStyles from './src/common.styles';
import * as Notifications from 'expo-notifications';
import {useEffect} from 'react';
import {registerPushNotificationsToken} from './src/helpers/registerPushNotificationsToken';
import AsyncStorage from '@react-native-async-storage/async-storage';
import services from './src/services';
import BackgroundFetchScreen from './src/Task';

WebBrowser.maybeCompleteAuthSession();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {

  const updatePushToken = async () => {
    let user = await AsyncStorage.getItem('@logged_user');
    if (user) {
      user = JSON.parse(user);
      registerPushNotificationsToken().then(token => {
        services.userServices.updatePushToken({user_id: user._id, token});
      });
    }
  };

  useEffect(() => {
    updatePushToken();
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={commonStyles.backgroundApp}/>
        <AuthProvider>
          <BackgroundFetchScreen/>
        </AuthProvider>
      </SafeAreaView>
    </I18nextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: commonStyles.primaryBackground,
  },
});