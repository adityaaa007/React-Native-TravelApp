import { View, Text, Image, StatusBar, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { ClockIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/solid';
import { SunIcon } from 'react-native-heroicons/solid';

export default function Destination(props) {
  StatusBar.setBackgroundColor('transparent');
  const navigation = useNavigation();

  const item = props.route.params.item;

  const [isFavourite, setFavourite] = useState(false);

  return (
    <View style={{backgroundColor:'#fff', flex:1}}>
      <Image source={item.image} style={{width:wp(100), height:hp(55)}}></Image>
      <View style={{marginTop:StatusBar.currentHeight+16, flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:'100%', position:'absolute'}}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{padding:8, marginLeft: 24, borderRadius: 32, backgroundColor:'rgba(255,255,255,0.3)'}}>
          <ChevronLeftIcon size={wp(5)} color={'#fff'} strokeWidth={3}></ChevronLeftIcon>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFavourite(!isFavourite)} style={{padding:8, marginRight: 24, borderRadius: 32, backgroundColor:'rgba(255,255,255,0.3)'}}>
          <HeartIcon size={wp(5)} color={isFavourite ? 'red' : '#fff'} strokeWidth={3}></HeartIcon>
        </TouchableOpacity>
      </View>

      <View style={{borderTopLeftRadius:40, borderTopRightRadius:40, paddingHorizontal:16 ,flex:1, justifyContent:'space-between', backgroundColor:'#fff', paddingTop: 24, marginTop:-40}}>
        <ScrollView showsVerticalScrollIndicator={false} style={{padding:16}}>
          <View style={{marginBottom:16, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{fontSize:wp(5.5), fontWeight:'bold', flex:1, color:'#444'}}>{item.title}</Text>
            <Text style={{fontSize:wp(5), fontWeight:'bold', color:'coral'}}>$ {item.price}</Text>
          </View>
          <Text style={{fontSize:wp(3.5), fontWeight:'500', marginBottom: 24}}>{item.longDescription}</Text>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:0}}>
            <View style={{flexDirection:'row', paddingHorizontal:0, alignItems:'start'}}>
              <ClockIcon size={wp(7)} color='skyblue'></ClockIcon>
              <View style={{marginHorizontal:0}}>
                <Text style={{fontSize:wp(4), fontWeight:'bold', marginLeft:8}}>{item.duration}</Text>
                <Text style={{fontSize:wp(3.5), fontWeight:'400', marginLeft:8}}>Duration</Text>
              </View>
            </View>
            <View style={{flexDirection:'row', paddingHorizontal:0, alignItems:'start', flexWrap:'wrap'}}>
              <MapPinIcon size={wp(7)} color='red'></MapPinIcon>
              <View style={{marginHorizontal:0}}>
                <Text style={{fontSize:wp(4), fontWeight:'bold', marginLeft:8}}>{item.distance}</Text>
                <Text style={{fontSize:wp(3.5), fontWeight:'400', marginLeft:8}}>Distance</Text>
              </View>
            </View>
            <View style={{flexDirection:'row', paddingHorizontal:0, alignItems:'start'}}>
              <SunIcon size={wp(7)} color='coral'></SunIcon>
              <View style={{marginHorizontal:0}}>
                <Text style={{fontSize:wp(4), fontWeight:'bold', marginLeft:8}}>{item.weather}</Text>
                <Text style={{fontSize:wp(3.5), fontWeight:'400', marginLeft:8}}>Sunny</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity style={{height:wp(13), width:wp(40), backgroundColor:'coral', marginBottom:24, marginHorizontal:'auto', justifyContent:'center', alignItems:'center', alignSelf:'center',borderRadius:32}}>
          <Text style={{ color:'#fff', fontWeight:'500', fontSize: wp(4)}}>Book now</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}