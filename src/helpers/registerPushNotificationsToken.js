import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import {Alert, Platform} from 'react-native';

export async function registerPushNotificationsToken() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      Alert.alert(
        'Hello',
        'Failed to get push token for Push Notification!',
        [],
        { cancelable: false }
      );
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
  } else {
    Alert.alert(
      'Hello',
      'Must use physical device for Push Notifications',
      [],
      { cancelable: false }
    );
  }

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }
  Alert.alert(
    'Hello',
    'Test',
    [],
    { cancelable: true }
  );
  return token;
}