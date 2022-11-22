import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Text } from "react-native-svg";
import { SmallText } from "~components/text";
import HomeSVG from "~assets/svg/HomeSvg";
import styles from "./styles";
import { SettingSvg } from "~assets/svg";
import { width } from "~utills/Dimensions";
import AppColors from "~utills/AppColors";

interface Props {
    OnPressSetting?(): void;
    OnPressScan?(): void;
    OnPressHome?(): void;

}
const BottomBar = ({
    OnPressSetting,
    OnPressScan,
    OnPressHome
}: Props) => {
    return (
        <>
            <View style={styles.iconRow}>
                <TouchableOpacity
                    onPress={OnPressHome}>
                    <View style={styles.icontext}>
                        <HomeSVG />
                        <SmallText textAlign="center"
                            color='#7A2E9A' >Home</SmallText>
                    </View>
                </TouchableOpacity>
                <Image
                    source={require('~assets/images/scan.png')}
                    style={{ left: '50%', bottom: width(10), position: 'absolute' }}
                />
                <TouchableOpacity
                    onPress={OnPressSetting}>
                    <View style={styles.icontext}>
                        <SettingSvg />
                        <SmallText textAlign="center"
                            color='#7A2E9A' >Setting</SmallText>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    );
};



export default BottomBar;