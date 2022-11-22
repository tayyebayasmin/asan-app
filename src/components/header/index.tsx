import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { SmallText } from "~components/text";
import AppColors from "~utills/AppColors";
import { width } from "~utills/Dimensions";
import styles from "./styles";

interface Props {
    name?: string,
    icon?: boolean,
    onPress?: () => void
}
const Header = ({
    name = 'Home Screen',
    icon,
    onPress
}: Props) => {
    return (

        <View style={styles.topContainer}>
            <SmallText color={AppColors.white}>{name}</SmallText>
            {icon &&
                <TouchableOpacity
                    onPress={onPress}
                    style={{ right: width(5), position: 'absolute' }}
                >
                    <Image
                        source={require('./back.png')}
                    />
                </TouchableOpacity>}
        </View>

    );
};
export default Header
