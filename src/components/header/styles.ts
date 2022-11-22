import {StyleSheet} from 'react-native';
import { FontFamily } from '~assets/fonts';
import AppColors from '~utills/AppColors';
import { height, width } from '~utills/Dimensions';

const styles = StyleSheet.create({
    topContainer: {
      flexDirection:'row',
        backgroundColor: '#7A2E9A',
        paddingVertical: height(2),
        alignItems: 'center',
        justifyContent: 'center'
      },
})

export default styles;