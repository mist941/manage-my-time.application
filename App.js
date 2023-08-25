import {AppRegistry, Platform, SafeAreaView, StyleSheet} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {I18nextProvider} from 'react-i18next';
import i18n from './src/i18n';
import * as WebBrowser from 'expo-web-browser';
import AuthProvider from './src/contexts/AuthContext';
import Router from './src/router/Router';
import commonStyles from './src/common.styles';
import * as Notifications from 'expo-notifications';

WebBrowser.maybeCompleteAuthSession();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

AppRegistry.registerComponent('X', () => App);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('X');
  AppRegistry.runApplication('X', { rootTag });
}

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={commonStyles.backgroundApp}/>
        <AuthProvider>
          <Router/>
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