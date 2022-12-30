import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import React, { useEffect, useState } from "react";
import {View, TouchableOpacity, Dimensions, GestureResponderEvent, Alert, StatusBar} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { grany_home, styles_main } from "../../style/Styles";
import {Text} from 'react-native'

type props ={
name:string
nav: any,
icon_name:String,
route_path:String
}
export type BnbNavigator = {

    Home: undefined;
    Traffic: undefined;
    Safety: undefined;
    CarLog:undefined;
    Account:undefined;  
    jumpTo(arg0: string): void;
    icon_name:String
    
  };
  const WINDOW_WIDHT = Dimensions.get("window").width; // Dimensions.get("screen").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

export const Header_create =({name,nav,icon_name,route_path}: props)=>{
  const [state, setstate] = useState("none")
const [user, setuser] = useState("")
 
    return(
    <>
    <StatusBar backgroundColor="#0073F0" barStyle="light-content" />
    

    
    <View style={[grany_home.main_header,{backgroundColor:"#0073F0",borderBottomLeftRadius:7,borderBottomRightRadius:7}]}>
       <Text style={[grany_home.main_ht,{color:"#fff"},{position:"absolute",alignSelf:"center",left:20,top:20}]}>{name}</Text>
       <View/>
  <TouchableOpacity style={[styles_main.header_text,{position:"absolute",alignSelf:"center",right:20,top:15}]} onPress={()=> nav.navigate(`${route_path}`)}>
    <Ionicons onTextLayout={()=>"my"}  color={"#fff"} name={`${icon_name}`} size={WINDOW_WIDHT/10}/>
  </TouchableOpacity>
       
    </View>
 

      </>
      )
 }
