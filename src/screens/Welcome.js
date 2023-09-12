import React from 'react';
import { View, Image, Text, TouchableOpacity, StatusBar } from 'react-native';
import { styles } from '../theme/Styles';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation();

  // StatusBar.setBackgroundColor('transparent');

  return(
    <View style={styles.container}>
      <Image source={require('../../assets/images/welcome.png')} style={styles.welcomeImage}/>

      <LinearGradient 
        colors={['transparent', 'rgba(3,105,161,100)']}
        style={styles.welcomeGradient}
        start={{x:0.5, y:0}}
        end={{x:0.5, y:1}} />

      <View style={{padding:24, paddingBottom: 10, marginVertical: 8}}>
        <Text style={styles.welcomeText}>Traveling made easy!</Text>
        <Text style={styles.welcomePunchText}>Experience the world's best adventure around the world with us</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.welcomeButton}>
          <Text style={styles.welcomeButtonText}>Lets go!</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}