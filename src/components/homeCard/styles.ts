import {StyleSheet} from 'react-native';
import { FontFamily } from '~assets/fonts';
import AppColors from '~utills/AppColors';
import { height, width } from '~utills/Dimensions';

const styles = StyleSheet.create({
  container1: {
    width: width(85),
    alignSelf: 'center',
    padding: width(2.5),
    flexDirection:'row',
    alignItems:'center',
    borderRadius:width(3),
    height:height(11.5),
    marginBottom:width(2)
  },
  text2:{
    marginLeft:width(3)
  },
})

export default styles;