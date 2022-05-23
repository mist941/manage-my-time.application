import {StyleSheet} from "react-native";

export const LoginButtonsGroupStyles = StyleSheet.create({
  btnGroup: {
    width: '80%',
    marginBottom: 40,
  },
  dividerGroup: {
    overflow: 'hidden',
    marginTop: 25,
    marginBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginRight: 15,
    marginLeft: 15,
    fontWeight: '500',
    fontSize: 18,
  }
});