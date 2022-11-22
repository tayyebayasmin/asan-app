import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import BottomBar from '~components/bottomBar';
import { LargeText} from '~components/text';
import Header from '~components/header';
import { styles } from './styles';
import { ScreenNames } from '~routes';
import HomeCard from '~components/homeCard';


const Home = ({ navigation }: NativeStackScreenProps<any>) => {
  return (
    <ScreenWrapper>
      <View style={{ flex: 1 }}>
        <Header />
        <View style={styles.imageContainer}>
          <Image
            source={require('~assets/images/Ellipse.png')}
          />
          <LargeText
            textStyles={styles.text}
          >
            Hi, Mary</LargeText>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <HomeCard
            ContainerStyle={styles.container2}
            icon1={require('~assets/images/blue.png')}
            icon2={require('~assets/images/head.png')}

          />

          <HomeCard
            ContainerStyle={styles.container3}
            icon1={require('~assets/images/red.png')}
            icon2={require('~assets/images/Group1.png')}
            name='Communication Needs'
          />

          <HomeCard
            ContainerStyle={styles.container4}
            icon1={require('~assets/images/green.png')}
            icon2={require('~assets/images/Group2.png')}
            name='Support Needs'
          />

          <HomeCard
            ContainerStyle={styles.container5}
            icon1={require('~assets/images/image1.png')}
            icon2={require('~assets/images/support.png')}
            name='Add Support Person'
          />

          <HomeCard
            ExtraStyling={styles.extraStyling}
            ContainerStyle={styles.container6}
            icon1={require('~assets/images/orange.png')}
            icon2={require('~assets/images/contact.png')}
            name='Add Contact Person'
          />


         
        </ScrollView>
        <BottomBar
          OnPressSetting={() => navigation.navigate(ScreenNames.EDITPROFILE)} />
      </View>
    </ScreenWrapper>
  );
};

export default Home;
