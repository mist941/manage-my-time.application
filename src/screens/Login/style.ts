import {StyleSheet} from "react-native";

export const LoginStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  languages: {
    flexDirection: 'row',
  },
  language: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 10,
    paddingRight: 35,
    paddingLeft: 35,
  },
  description: {
    fontWeight: '400',
    fontSize: 15,
    color: '#fff',
    paddingRight: 35,
    paddingLeft: 35,
  }
});
