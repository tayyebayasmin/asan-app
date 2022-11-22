import React, { useMemo, useState } from "react";
import { Image, Pressable, Text, TextInput, TextStyle, View, ViewStyle } from "react-native";
import { Controller } from 'react-hook-form';
import AppColors from '~utills/AppColors'
import { SmallText } from "~components/text";
import styles from './styles';
import { height, width } from "~utills/Dimensions";
import EyeSVG from "~assets/svg/EyeSvg";
import { HideSvg } from "~assets/svg";
type KeyboardVariation =
    | 'default'
    | 'email-address'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'url'
    | 'phone-pad';

type KeyType =
    | 'done'
    | 'go'
    | 'next'
    | 'search'
    | 'send';

interface Props {
    containerStyle?: ViewStyle;
    innerContainerStyle?: ViewStyle;
    inputStyle?: TextStyle;
    iconStyle?: ViewStyle;
    placeholder?: string;
    name: string;
    keyboardType?: KeyboardVariation;
    keyType?: KeyType;
    maxlength?: number;
    multiline?: boolean;
    numberOfLines?: number;
    secureTextEntry?: boolean;
    textAlignVertical?: 'auto' | 'center' | 'top' | 'bottom';
    autofocus?: boolean;
    control: any;
    showPasswordIcon?: boolean;
    onPressIcon?(): void;
    value?: string;
    icon?: JSX.Element;
    degree?: boolean;
    editable?: boolean;
}

const TextField = (
    {
        containerStyle = {},
        innerContainerStyle = {},
        inputStyle = {},
        iconStyle = {},
        placeholder = 'Enter text here!',
        name,
        keyboardType = 'default',
        keyType = 'done',
        maxlength,
        multiline = false,
        numberOfLines,
        secureTextEntry = false,
        textAlignVertical = 'center',
        autofocus = false,
        control,
        showPasswordIcon,
        onPressIcon,
        icon,
        degree = false,
        editable = true
    }: Props
) => {
    const [color, setColor] = useState('')
    return (
        <View style={[styles.container, containerStyle]}>
            <Controller
                control={control}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <>
                        <View style={[styles.innerContainer, innerContainerStyle]}>
                            <View style={[styles.icon, iconStyle]}>
                                {icon}
                            </View>
                            <TextInput
                                placeholder={placeholder}
                                keyboardType={keyboardType}
                                returnKeyType={keyType}
                                maxLength={maxlength}
                                multiline={multiline}
                                value={value}
                                onChangeText={onChange}
                                numberOfLines={numberOfLines}
                                secureTextEntry={secureTextEntry}
                                textAlignVertical={textAlignVertical}
                                autoFocus={autofocus}
                                placeholderTextColor={AppColors.grey50}
                                style={[styles.inputStyle, inputStyle]}
                                editable={editable}
                                onFocus={() => setColor(AppColors.blue)}
                                onBlur={() => setColor(AppColors.grey50)}
                            />
                            <Pressable style={styles.eyeIcon} onPress={onPressIcon}>
                                {(showPasswordIcon && name == 'password') ?
                                    <Image source={require('~assets/images/hide.png')} />
                                    :
                                    name == 'password' &&
                                    <Image source={require('~assets/images/show.png')} />
                                }
                            </Pressable>
                            {degree && <SmallText textStyles={{ marginTop: height(0.5) }} size={3} color={AppColors.lightgrey}>°C</SmallText>}
                        </View>
                        <SmallText textAlign="left" color={AppColors.red} size={3}>
                            {error ? `*${error?.message}` : ' '}
                        </SmallText>
                    </>
                )}
                name={name}
            />
        </View>
    );
}

export default TextField;
