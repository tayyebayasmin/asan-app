import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Image, ImageBackground, Text, View } from 'react-native';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { Button } from '~components';
import TextField from '~components/textField';
import { ScreenNames } from '~routes';
import { width } from '~utills/Dimensions';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { styles } from './styles';
import { SmallText } from '~components/text';
import AppColors from '~utills/AppColors';
import { FontFamily } from '~assets/fonts';
import { ApiManager } from '~backend/ApiManager';

const schema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('Email Address is required!'),
  password: Yup.string()
    .required('Password is required!')
    .min(8)
    .max(10)
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
      "One Uppercase, One Lowercase, One Number and one Character")
});

const Login = ({ navigation }: NativeStackScreenProps<any>) => {
  const [showPassword, setShowPassword] = useState(true);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });
  const onPressLogin = async (data) => {
    
    //you can use apimanager for api calling

    // const { email, password }
    // const res = await ApiManager.post('/login',
    //   {
    //     email: email,
    //     password: password
    //   }
    // )
    // if(res?.data){
    // navigation.navigate(ScreenNames.HOME)
    // }
    // else{
    //   Alert.alert('Something get wrong')
    // }

    //you can use axios if this will not work
  }
  return (
    <ScreenWrapper>
      <View style={{ flex: 1 }}>
        <ImageBackground source={require('~assets/images/girl.png')}
          resizeMode="cover" style={styles.image}
          imageStyle={{ opacity: 0.5 }}>
          <Image
            source={require('~assets/images/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.text}>Login</Text>
          <TextField
            name='email'
            control={control}
            placeholder='Enter Email Address'
          />
          <TextField
            name='password'
            control={control}
            placeholder='Enter Password'
            iconStyle={styles.passwordIcon}
            secureTextEntry={showPassword}
            showPasswordIcon={showPassword}
            onPressIcon={() => setShowPassword(!showPassword)}
            maxlength={10}
          />
          <SmallText
            onPress={() => console.log('forget press')}
            textAlign='right'
            size={3}
            color={AppColors.grey}
            textStyles={styles.forgettext}
          >
            Forgot Password?
          </SmallText>
          <Button
          //  onPress={handleSubmit(onPressLogin))}
            onPress={()=>navigation.navigate(ScreenNames.HOME)}
            containerStyle={styles.loginBtn}>
            Login
          </Button>
          <View style={styles.bottomText}>
            <SmallText
              color={AppColors.white}
            >
              Don't have an account?</SmallText>
            <SmallText
              onPress={() => console.log('Signup')}
              size={4}
              fontFamily={FontFamily.poppinsBold}
              color='#7EBC2B'
              textStyles={styles.signupText}
            >
              Signup
            </SmallText>
          </View>
        </ImageBackground>
      </View>
    </ScreenWrapper>
  );
};

export default Login;
