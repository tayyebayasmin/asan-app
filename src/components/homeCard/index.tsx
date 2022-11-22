import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Image, ImageBackground, TouchableOpacity, View,ViewStyle } from "react-native";
import { MediumText, SmallText } from "~components/text";
import AppColors from "~utills/AppColors";
import styles from "./styles";

interface Props {
    name?:string,
    ContainerStyle?:ViewStyle,
    icon1?:any,
    icon2?:any,
    ExtraStyling?:ViewStyle,
}
const HomeCard = ({
    name='Personal Information',
    ContainerStyle,
    icon1,
    icon2,
    ExtraStyling
}: Props) => {
    return (

        <ImageBackground source={icon1}
          style={[styles.container1, ExtraStyling]}
          imageStyle={{ opacity: 0.7 }}>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center' }}>

            <View style={ContainerStyle}>
              <Image
                source={icon2}
              />
            </View>
            <MediumText size={5} color={AppColors.white}
              textStyles={styles.text2}>{name}</MediumText>

          </TouchableOpacity>
        </ImageBackground>

    );
};
export default HomeCard
