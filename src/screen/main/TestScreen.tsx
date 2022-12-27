import React, { useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Text, View } from "react-native-animatable"
import { grany_home, safety_main } from "../../style/Styles"
import Home_button from "../grid/Home_button"
import { Header_create } from "../header/Header";
import Icon_i from "react-native-vector-icons/Ionicons"
import { TouchableOpacity } from "react-native-gesture-handler";
const TestScreen = ({route,navigation}:any)=>{
    const [menu, setmanu] = useState([
        {name:"떨어짐",value:"walking",route_path:"fall"},
        {name:"물체에 맞음",value:"walking",route_path:"hit"},
        {name:"넘어짐",value:"walking",route_path:"down"},
        {name:"부딪힘",value:"walking",route_path:"crush"},
        {name:"끼임",value:"walking",route_path:"stuck "}
       ]);

return(<><SafeAreaView style={grany_home.m_v} >

   
<Header_create name={"위험성 평가하기"} nav={navigation} icon_name={"menu"} route_path={"User"}/>

<View style={[safety_main.list_view]}>
    <Home_button title={"카테고리"} navigation = {navigation} list_item={menu}/>
</View></SafeAreaView>

</>)
}

export default TestScreen