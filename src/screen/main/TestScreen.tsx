import React, { useState } from "react";
import {  ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native-animatable"
import { grany_home, safety_main } from "../../style/Styles"
import Home_button from "../grid/Home_button"
import { Header_create } from "../header/Header";
import Icon_i from "react-native-vector-icons/Ionicons"
import { TouchableOpacity } from "react-native-gesture-handler";
import Grid_button from "../grid/Grid_button";
import Grid_btn_table from "../grid/Grid_btn_table";
import { List } from "react-native-paper";
const TestScreen = ({route,navigation}:any)=>{
    const [menu, setmanu] = useState([
        {name:"떨어짐",value:"walking",route_path:"fall"},
        {name:"물체에 맞음",value:"walking",route_path:"hit"},
        {name:"넘어짐",value:"walking",route_path:"down"},
        {name:"부딪힘",value:"walking",route_path:"crush"},
        {name:"끼임",value:"walking",route_path:"stuck "}
       ]);

return(<><SafeAreaView style={{flex:1,marginBottom:100}} >

   

<Header_create name={route.name} nav={navigation} icon_name={"person-circle-outline"} route_path={"설정"}/>

<View style={[safety_main.list_view]}>

<Grid_btn_table title={"카테고리"} navigation = {route.params.route_nav.navigate} list_item={menu}/>
    <Grid_button title={"카테고리"} navigation = {route.params.route_nav.navigate} list_item={menu}/>
</View></SafeAreaView>

</>)
}

export default TestScreen