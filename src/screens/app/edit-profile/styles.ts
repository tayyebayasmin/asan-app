import { StyleSheet } from 'react-native';
import { FontFamily } from '~assets/fonts';
import { height, width } from '~utills/Dimensions';
export const styles = StyleSheet.create({
txt:{
    fontWeight:'bold',
    marginBottom:width(1)
},
input: {
    height:height(15),
    
},
btn:{
    marginBottom:height(15)
}
});