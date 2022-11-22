import { StyleSheet } from 'react-native';
import { FontFamily } from '~assets/fonts';
import { height, width } from '~utills/Dimensions';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  container2: {
    height:height(8.5),
    justifyContent:'center',
    borderRadius: width(1.5),
    backgroundColor: '#58CEEE',
    padding: width(2),
    width: width(15),
    alignItems: 'center'
  },
  container3: {
    height:height(8.5),
    justifyContent:'center',
    borderRadius: width(1.5),
    backgroundColor: '#EE6660',
    padding: width(2),
    width: width(15),
    alignItems: 'center'
  },
  container4: {
    height:height(8.5),
    justifyContent:'center',
    borderRadius: width(1.5),
    backgroundColor: '#B7E17B',
    padding: width(2),
    width: width(15),
    alignItems: 'center'
  },
  container6: {
    height:height(8.5),
    justifyContent:'center',
    borderRadius: width(1.5),
    backgroundColor: '#F9C485',
    padding: width(2),
    width: width(15),
    alignItems: 'center',
  },
  extraStyling:{
    marginBottom:width(20),
  },
  container5: {
    height:height(8.5),
    justifyContent:'center',
    borderRadius: width(1.5),
    backgroundColor: '#7073F6',
    padding: width(2),
    width: width(15),
    alignItems: 'center'
  },
  topContainer: {
    backgroundColor: '#7A2E9A',
    paddingVertical: height(2),
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontWeight: 'bold',
    marginLeft: width(5)
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: width(10),
    marginVertical:width(3)
  }
});