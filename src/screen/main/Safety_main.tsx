import { grany_home, safety_main } from "../../style/Styles"
import{View,Image, Text} from "react-native-animatable";
import { Alert,ScrollView } from "react-native";
import { Header_create } from "../header/Header";
import Home_button from "../grid/Home_button";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import {SafeAreaView} from "react-native-safe-area-context"
import Logo_header from "../header/Logo_header";
import Modal from "react-native-modal";
import KE from "../../../assets/logo/logo_대한전기협회.png"

const Safety_main =({route,navigation}:any)=>{

  const navigation_route =(path:any)=>{
    console.log("path : ",path,"route : ",route.params.data)

navigation.navigate(`${path}`,{data:route.params.data});



    
  }
  const [items_1, setItems_1] = useState([
    {name:"떨어짐",value:"walking"},
    {name:"물체에 맞음",value:"walking"},
    {name:"넘어짐",value:"walking"},
    {name:"부딪힘",value:"walking"},
    {name:"끼임",value:"walking"}
   
   ]);
   const [menu, setmanu] = useState([
    {name:"평가하기",value:"clipboard-text-outline",route_path:"위험성 평가하기"},
    {name:"결과 조회",value:"chart-pie",route_path:"결과"}
    
   
   ]);
    const run_event =()=>{
        Alert.alert("구현중입니다.")
      }
    const back =()=>{
    navigation.goBack()
    }

return(<>
<SafeAreaView style={grany_home.m_v} >

<Header_create name={route.name} nav={navigation} icon_name={"person-circle-outline"} route_path={"설정"}/>

<ScrollView
indicatorStyle='white'
contentContainerStyle={{backgroundColor:"white"}}>

  
<View style={{flex:1}}>
<Home_button title={""} user={route.params.data} navigation={navigation} list_item={menu}/>
</View>

<View style={{flex:1,alignItems:"center"}}>

<View>
  
</View>
<View style={[{flex:3,alignItems:"center"}]}>


</View> 

</View> 
</ScrollView>
<View style={[{flex:3,alignItems:"center",opacity:0.8}]}>
<Image style={{position:"absolute",bottom:100, resizeMode:"contain",width:'70%'}} source={KE}></Image>

</View> 
</SafeAreaView> 
</>)
}
export default  Safety_main
    ;
 