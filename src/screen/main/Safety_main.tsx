import { grany_home, safety_main } from "../../style/Styles"
import{View,Image, Text} from "react-native-animatable";
import { Alert, SafeAreaView, ScrollView } from "react-native";
import { Header_create } from "../header/Header";
import Home_button from "../grid/Home_button";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";


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
    {name:"평가하기",value:"clipboard-list",route_path:"HomeNavigation"},
    {name:"조회하기",value:"walking",route_path:"incure"}
    
   
   ]);
    const run_event =()=>{
        Alert.alert("구현중입니다.")
      }
    const back =()=>{
    navigation.goBack()
    }

return(<>
<SafeAreaView style={grany_home.m_v} >

<Header_create name={"HOME"} nav={navigation} icon_name={"menu"} route_path={"User"}/>

<ScrollView
indicatorStyle='white'
contentContainerStyle={{backgroundColor:"white"}}>
   <Text>{route.params.data}</Text>
<View style={{flex:1,margin:5}}>
<Home_button title={""} user={route.params.data} navigation={route.params.route_nav} list_item={menu}/>
</View>

<View style={{flex:1}}>



<View style={[{flex:3}]}>
<TouchableOpacity >

  <Text>
    클릭
  </Text>
</TouchableOpacity>
</View> 

</View> 
</ScrollView>
</SafeAreaView> 
</>)
}
export default  Safety_main
    ;
 