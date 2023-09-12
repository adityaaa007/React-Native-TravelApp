import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { sortCategoryData } from '../constants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function SortCategories() {
  const [activeSort, setActiveSort] = useState('Popular');
  return (
    <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center', marginHorizontal:16, backgroundColor: '#eeeeee', borderRadius: 32, paddingHorizontal:8}}>
      {
        sortCategoryData.map((sort, index) => {
          let isActive = sort == activeSort;
          let activeButtonClass = isActive ? {backgroundColor:'#fff'} : {};
          
          return(
            <TouchableOpacity onPress={() => setActiveSort(sort)} key={index} style={{padding:8, borderRadius: 16}}>
              <Text style={{...activeButtonClass, padding:8, paddingHorizontal:16, borderRadius:24, fontSize:wp(3.5), fontWeight:'500', color:isActive ? 'coral' : '#333', alignSelf:'center'}}>{sort}</Text>
            </TouchableOpacity>
          )
        })
      }
    </View>
  )
}