import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { destinationData } from '../constants'
import { HeartIcon } from 'react-native-heroicons/solid'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styles } from '../theme/Styles';
import { useNavigation } from '@react-navigation/native';

export default function Destinations() {
  const navigation = useNavigation();
  return (
    <View style={{marginHorizontal:0, flexDirection:'row', justifyContent:'space-evenly', flexWrap:'wrap'}}>
      {
        destinationData.map((item, index) => {
          return(
            <DestinationCard navigation={navigation} item={item} key={index}></DestinationCard>
          )
        })
      }
    </View>
  )

}

const DestinationCard = ({item, navigation}) => {
  const [isFavourite, setFavourite] = useState(false);
  return(
    <TouchableOpacity onPress={() => navigation.navigate('Destination', {item})} style={{width:wp(44), height:wp(65),justifyContent:'flex-end', position:'relative', padding:16, paddingHorizontal:16, marginBottom: 12}}>
      <Image source={item.image} style={{width:wp(44), height:wp(65), position:'absolute', borderRadius: 32}}></Image>
      <LinearGradient 
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={{width:wp(44), height:wp(65), position:'absolute', bottom:0, borderBottomLeftRadius:32, borderBottomRightRadius:32}}
        start={{x:0.5, y:0}}
        end={{x:0.5, y:1}} />

      <TouchableOpacity onPress={() => setFavourite(!isFavourite)} style={{backgroundColor:'rgba(255,255,255,0.25)', marginBottom:24, position:'absolute', top:16, right:16, padding:8, borderRadius: 16}}>
        <HeartIcon size={wp(5)} style={isFavourite? {color:'red'} : {color:'#fff'}}></HeartIcon>
      </TouchableOpacity>
      <Text style={{fontSize:wp(4), color:'#fff', fontWeight:'600', marginBottom: 8}}>{item.title}</Text>
      <Text style={{fontSize:wp(2.5), color:'#fff', fontWeight:'400', marginBottom: 8}}>{item.shortDescription}</Text>
    </TouchableOpacity>
  )
}