import {SafeAreaView, StyleSheet} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {I18nextProvider} from 'react-i18next';
import i18n from './src/i18n';
import * as WebBrowser from 'expo-web-browser';
import AuthProvider from './src/contexts/AuthContext';
import Router from './src/router/Router';

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor='#fff'/>
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
    backgroundColor: '#fff',
  },
});