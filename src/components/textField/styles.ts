import {StyleSheet} from 'react-native';
import { FontFamily } from '~assets/fonts';
import AppColors from '~utills/AppColors';
import { height, width } from '~utills/Dimensions';

const styles = StyleSheet.create({
    container:{
        alignSelf: 'center',
    },
    innerContainer: {
        width: width(80),
        padding: width(2.5),
        paddingHorizontal: width(4),
        backgroundColor: AppColors.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius:width(1.5)
    },
    inputStyle:{
        paddingVertical: height(0.06),
        fontFamily: FontFamily.poppinsLight,
        color: AppColors.black,
        width: width(80),
        paddingRight: width(7),
    },
    icon: {
        paddingTop: height(0.6)
        // alignSelf: 'center'
    },
    eyeIcon:{
        alignSelf: 'center',
        marginRight:width(5),
        position:'absolute',
        right:0,
    }
})

export default styles;