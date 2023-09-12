import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, StatusBar, ScrollView, BackHandler, TouchableOpacity,TextInput } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import Categories from "../components/Categories";
import Destinations from "../components/Destinations";
import SortCategories from "../components/SortCategories";

export default function Home() {

  const navigation = useNavigation();

  BackHandler.addEventListener('hardwareBackPress', function () {
    StatusBar.setBackgroundColor('transparent');
    navigation.goBack();

    return true;
  });
  
  StatusBar.setBackgroundColor('white');
  return(
    <View style={{flex:1, backgroundColor:'#fff', marginTop: StatusBar.currentHeight}}>
      <ScrollView showsVerticalScrollIndicator={false} style={{paddingVertical: 16}}>
        <View style={{marginHorizontal:24, flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:50}}>
          <Text style={{fontSize:wp(7), fontWeight:'bold', color:'#333'}}>Let's discover</Text>
          <TouchableOpacity>
            <Image source={require('../../assets/images/avatar.png')} style={{width: wp(10), height: wp(10)}}></Image>
          </TouchableOpacity>
        </View>

        {/* Search bar*/}
        <View style={{marginHorizontal:16, marginBottom:16}}>
          <View style={{flexDirection:'row', alignItems:'center', backgroundColor:'#eee', borderWidth:1, borderColor:'#eee', borderRadius:32, padding:8, paddingLeft: 16}}>
            <MagnifyingGlassIcon size={16} strokeWidth={3} color='gray'></MagnifyingGlassIcon>
            <TextInput placeholder='Search destination' placeholderTextColor={'gray'} style={{flex:1, paddingLeft:12, paddingRight:12}}></TextInput>
          </View>
        </View>

        {/* Categories */}
        <View style={{marginBottom:16}} >
          <Categories></Categories>
        </View>

        {/* Sort results */}
        <View style={{marginBottom:24}} >
          <SortCategories></SortCategories>
        </View>

        {/* Destinations */}
        <View style={{marginBottom:16}} >
          <Destinations></Destinations>
        </View>
      </ScrollView>
    </View>
  )
}