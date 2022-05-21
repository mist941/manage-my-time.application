import {SafeAreaView, StyleSheet} from 'react-native';
import {StatusBar} from "expo-status-bar";
import Login from "./src/screens/Login/Login";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#fff'/>
      <Login/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
});
