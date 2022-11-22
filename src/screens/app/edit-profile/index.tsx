import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useRef, useState } from 'react';
import { View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import BottomBar from '~components/bottomBar';
import { SmallText } from '~components/text';
import { height, width } from '~utills/Dimensions';
import Header from '~components/header';
import { styles } from './styles';
import { ScreenNames } from '~routes';
import TextField from '~components/textField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { EditSvg } from '~assets/svg';
import { Button } from '~components';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { ApiManager } from '~backend/ApiManager';
const schema = Yup.object().shape({
    email: Yup.string()
        .email()
        .required('Email Address is required!'),
    Password: Yup.string()
        .required('Password is required!')
        .min(8)
        .max(10)
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
            "One Uppercase, One Lowercase, One Number and one Character"),
    confirmPassword: Yup.string()
        .required('Confirm Password is required!')
        .min(8, 'password must be at least 8 characters')
        .max(10, 'password must be at least 8 characters')
        .oneOf([Yup.ref('Password'), null], 'Passwords must match')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
            "One Uppercase, One Lowercase, One Number and one Character"),
});

const EditProfile = ({ navigation }: NativeStackScreenProps<any>) => {
    const [filePath, setFilePath] = useState();
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

    const onPressSaveDetails = async (data) => {
        // const {bio,firstname,Password,confirmPassword,email}=data
        // const res=await ApiManager.post('/update-profile',{
        //     user_id:'',
        //     bio:bio,
        //     first_name:firstname,
        //     password:Password,
        //     confirm_password:confirmPassword
        // })
        // if(res?.data){
        //     navigation.navigate(ScreenNames.HOME)
        // }else
        // {
        //     console.log(res)
        // }
    }
    const openGallery = async() => {
        let options = {
            saveToPhotos: true
        }
        const result= await launchImageLibrary(options)
            setFilePath(result.assets[0].uri)
            // if (response.didCancel) {
            //     Alert.alert('User cancelled camera picker');
            //     return;
            // } else if (response.errorCode == 'camera_unavailable') {
            //     Alert.alert('Camera not available on device');
            //     return;
            // } else if (response.errorCode == 'permission') {
            //     Alert.alert('Permission not satisfied');
            //     return;
            // } else if (response.errorCode == 'others') {
            //     Alert.alert(response.errorMessage);
            //     return;
            // }

            // console.log('fileName -> ', response.assets[4]);
            // // setFilePath(response);
        // });

    }
    return (
        <ScreenWrapper>
            <View style={{ flex: 1 }}>
                <Header
                    name='Edit Profile'
                    icon={true} 
                    onPress={()=>navigation.goBack()}/>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ margin: width(10) }}>
                        <View style={{ alignItems: 'center' }}>
                            <Image
                        
                                source={require('./girl.png')}
                            />
                            <TouchableOpacity
                                onPress={openGallery}
                                style={{ position: 'absolute', left: width(40), bottom: -10, backgroundColor: '#7EBC2B', width: width(8), height: height(4), borderRadius: width(8), alignItems: 'center', justifyContent: 'center' }}>
                                <EditSvg />
                            </TouchableOpacity>
                        </View>


                        <SmallText textStyles={styles.txt}>First Name:</SmallText>
                        <TextField
                            name='firstname'
                            control={control}
                            placeholder='Mary'
                        />

                        <SmallText textStyles={styles.txt}> Bio:</SmallText>
                        <TextField
                            name='bio'
                            control={control}
                            placeholder='Phasellus sagittis dignissim euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus in luctus lectus, non sodales erat. Nam sollicitudin urna sit amet accumsan viverra.'
                            multiline={true}
                            numberOfLines={7}
                            textAlignVertical='top'


                        />


                        <SmallText textStyles={styles.txt}> Email Address:</SmallText>
                        <TextField
                            name='email'
                            control={control}
                            placeholder='example@gmail.com'
                        />

                        <SmallText textStyles={styles.txt}> Password:</SmallText>
                        <TextField
                            name='Password'
                            control={control}
                            placeholder='1234@Abc'
                        />
                        <SmallText textStyles={styles.txt}> Confirm Password:</SmallText>
                        <TextField
                            name='confirmPassword'
                            control={control}
                            placeholder='1234@Abc'
                        />


                        <Button containerStyle={styles.btn}
                            onPress={handleSubmit(onPressSaveDetails)}>
                            Save Details
                        </Button>
                    </View>

                </ScrollView>
                <BottomBar
                    OnPressHome={() => { navigation.navigate(ScreenNames.HOME) }}
                />
            </View>
        </ScreenWrapper>
    );
};

export default EditProfile;
