import {SafeAreaView, StyleSheet} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import Login from './src/screens/Login/Login';
import {I18nextProvider} from "react-i18next";
import i18n from "./src/i18n";

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor='#fff'/>
        <Login/>
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