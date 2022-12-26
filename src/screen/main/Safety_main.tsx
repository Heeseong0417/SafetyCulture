import { grany_home, safety_main } from "../../style/Styles"
import{View,Image, Text} from "react-native-animatable";
import { Alert, SafeAreaView, ScrollView } from "react-native";
import { Header_create } from "../header/Header";
import Home_button from "../grid/Home_button";
import React, { useState } from "react";


const Safety_main =({route,navigation}:any)=>{
  const [items_1, setItems_1] = useState([
    {name:"떨어짐",value:"walking"},
    {name:"물체에 맞음",value:"walking"},
    {name:"넘어짐",value:"walking"},
    {name:"부딪힘",value:"walking"},
    {name:"끼임",value:"walking"}
   
   ]);
    const run_event =()=>{
        Alert.alert("구현중입니다.")
      }
    const back =()=>{
    navigation.goBack()
    }

return(<>
<SafeAreaView style={grany_home.m_v} >

<Header_create name={"HOME"} nav={back}/>

<ScrollView
indicatorStyle='white'
contentContainerStyle={{backgroundColor:"white"  }}
>
   <Text>{route.params.data}</Text>
<View style={{flex:1,margin:5}}>
<Home_button list_item={items_1}/>
</View>

<View style={{flex:1}}>



<View style={[{flex:3}]}>

</View> 

</View> 
</ScrollView>
</SafeAreaView> 
</>)
}
export default  Safety_main
    ;
 