import {StyleSheet} from 'react-native';
import { FontFamily } from '~assets/fonts';
import AppColors from '../../utills/AppColors';
import {height, width} from '../../utills/Dimensions';
const styles = StyleSheet.create({
    icontext:{
        alignItems:'center',
        fontFamily:FontFamily.poppinsSemiBold
    },
    iconRow:{
        width:width(100),
        height:height(12),
        padding:width(2),
        paddingHorizontal:width(13),
        bottom:0,
        position:'absolute',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:AppColors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 8
    },

});
export default styles;
