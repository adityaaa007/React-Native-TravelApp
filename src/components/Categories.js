import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { categoriesData } from '../constants';


export default function Categories() {
  return (
    <View style={{paddingVertical:16}}>
      <View style={{marginBottom:12,marginHorizontal:24, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <Text style={{fontSize:wp(4), fontWeight:'500', color:'#333'}}>Categories</Text>
        <TouchableOpacity>
          <Text style={{fontSize:wp(4), fontWeight:'500', color:'coral'}}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{paddingHorizontal: 8}}
        style={{paddingHorizontal: 4}}
        showsHorizontalScrollIndicator={false}>
          {categoriesData.map((cat, index) => {
            return(
              <TouchableOpacity key={index} style={{flex:1, alignItems:'center', paddingHorizontal:8}}>
                <Image source={cat.image} style={{borderRadius:24, width:wp(20), height: wp(19)}}></Image>
                <Text style={{marginTop:8, fontWeight:'500', fontSize:wp(3)}}>{cat.title}</Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  )
}