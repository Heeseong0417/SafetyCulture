import { SafeAreaInsetsContext, SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import {View,Text} from "react-native-animatable"
import { styles_test,grany_home } from "../../style/Styles"
import {Header_create} from "../header/Header"

import { Alert, StatusBar, StyleSheet } from "react-native"

import React from "react"
import Griditems from "../grid/Griditems"
import Grid_1row from "../grid/Grid_1row"
import Flex_button from "../grid/Flex_button"
import { ScrollView } from "react-native-gesture-handler"
import UserCarousel from "../grid/UserCarousel"
import map from "../../../assets/images/map.png"

import chart from "../../../assets/images/chart.png"
const Grany_main =({route,navigation}:any)=>{
  const run_event =()=>{
    Alert.alert("구현중입니다.")
  }
const back =()=>{
navigation.goBack()
}
const img = "../../../assets/images/flower-.jpg"
const img2 = "../../../assets/images/daisy.jpg"
const pic_arr2 = [[],[],[]]
const pic_arr = [[require(img),require(img2)],["user1","user2"],["2021/11/22","2021/11/22"]]
const [items_1, setItems_1] = React.useState([
    {name:"주의 항목",value:"1"},
    {name:"위험 항목",value:"0"},
    {name:"다음 검진",value:["10/14","3:00PM"]},
    {name:"남은 검진",value:"12"},
   
   ]);
const [items, setItems] = React.useState([
   {name:"혈당",value:"142",unit:"mg"},
   {name:"혈압",value:["139","80"],unit:""},
   {name:"체온",value:"36.6",unit:"℃"},
   {name:"체중",value:"67",unit:"kg"},
   {name:"호흡",value:"정상"},
   {name:"남은 검진",value:["10","12"]}
  ]);
    return(<>
  <Text>dfddf{JSON.stringify(route.params.data)}</Text>

  <SafeAreaView style={grany_home.m_v} edges={['top', 'left', 'right']}>


     <Header_create name={"HOME"} nav={back}/>

  <ScrollView
    indicatorStyle='white'
    contentContainerStyle={{backgroundColor:"white"  }}
  >
    <View style={{flex:1,margin:5}}>
     <UserCarousel user_list={pic_arr}/> 
    </View>

 <View style={{flex:1}}>
  
 
     
    <View style={[{flex:3}]}>
      <Grid_1row list_item={items_1}/>    
    <Griditems list_item={items}/>
    </View> 
    <Flex_button title={"주변의 버디 찾기"} img={map} run_event={run_event} size={"small"}/>
    <Flex_button title={"상세 검색 결과"} img={chart} run_event={run_event} size={"big"}/>
 </View> 
</ScrollView>
 </SafeAreaView> 
       
   
    </>)
}


export default Grany_main