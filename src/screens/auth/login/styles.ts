import { StyleSheet } from 'react-native';
import { FontFamily } from '~assets/fonts';
import { height, width } from '~utills/Dimensions';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    backgroundColor: '#000000'
  },
  logo: {
    alignSelf: 'center',
    marginVertical: width(10),
  },
  text: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: width(8),
    fontWeight: "bold",
    marginTop: width(10),
    marginBottom: width(5),
    fontFamily: FontFamily.poppinsBold
  },
  forgettext: {
    marginHorizontal: width(10)
  },
  passwordIcon: {
    paddingLeft: width(0.7),
  },
  loginBtn: {
    marginTop: width(10)
  },
  bottomText: {
    flexDirection: 'row',
    marginTop:height(17),
    alignSelf:'center'
  },
  signupText: {
    fontWeight: 'bold',
    marginLeft: width(1)
  }
});