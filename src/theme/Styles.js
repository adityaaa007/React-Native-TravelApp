import { StyleSheet } from "react-native";
import React from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  welcomeImage: {
    height: '100%',
    width: '100%',
    position: 'absolute'
  },
  welcomeText: {
    fontSize: wp(10),
    fontWeight:'bold',
    color:'#fff',
    paddingBottom: 8,
  },
  welcomePunchText: {
    color:'#eee',
    fontSize: wp(3.75),
    fontWeight: '500',
    paddingBottom: 32
  },
  welcomeButton: {
    padding:12,
    paddingHorizontal:42,
    alignSelf: 'center',
    borderRadius: 32,
    backgroundColor: 'coral',
    marginBottom: 16
  },
  welcomeButtonText: {
    color:'#fff', 
    fontWeight: '500',
    fontSize:  wp(4)
  },
  welcomeGradient: {
    width: wp(100),
    height: wp(100),
    position: 'absolute',
    bottom: 0
  }
});