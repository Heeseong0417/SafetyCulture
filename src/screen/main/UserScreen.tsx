import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { FAB, IconButton, List, Portal, Provider, Tooltip } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { safety_main } from "../../style/Styles";
import { Header_create } from "../header/Header";
import LC from "../../../license.json"



const UserScreen=({route,navigation}:any)=>{
    const [state, setState] = useState({ open: false });

    const onStateChange = ({ open }:any) => setState({ open });
  
    const { open } = state;
    return(
        <>
        <SafeAreaView style={{flex:1,backgroundColor:"white"}} >

   

<Header_create name={route.name} nav={navigation} icon_name={"person-circle-outline"} route_path={"정보"}/>
<ScrollView style={[{margin:10,opacity:0.8}]}>
<View>
     
        <Text style={[safety_main.home_title_b]}>{"정보 및 설정"}</Text>
        <Text style={[safety_main.home_title_b_s,{marginBottom:40}]}>{"유저정보 및 앱 정보를 확인할 수 있습니다."}</Text>
 
</View>

<List.AccordionGroup>
    <List.Accordion title="앱 정보" id="1">
     
      <List.Item title={"안전문화를 위한 위험성 평가"} />
      
      <Text style={{margin:20}}>{"대한전기협회 주관"} </Text>
    </List.Accordion>
    <List.Accordion title="유저 정보" id="2">
    <List.Item title={route.params.data} />
    </List.Accordion>
    <View>
      
      <List.Accordion title="라이센스" id="3">
        <ScrollView>
            {LC.map((item)=>(<Text>{item._description} : {item._licenseContent}</Text>))}
            <List.Item title="Item 3" />
        </ScrollView>
        
      </List.Accordion>
    </View>
  </List.AccordionGroup>


       
<View style={[safety_main.list_view]}>
  
</View>
</ScrollView>
</SafeAreaView>

        </>
    )
}

export default UserScreen;