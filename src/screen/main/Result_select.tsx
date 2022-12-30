import { SafeAreaView, ScrollView, Text, View } from "react-native"
import { grany_home, safety_main } from "../../style/Styles"
import StackHeader from "../header/StackHeader"

const Resultselect =({navigation,route}:any)=>{


    return (<>
        <SafeAreaView style={[grany_home.m_v,{backgroundColor:"#0073F0",backfaceVisibility:"hidden"}]} >
    
    <View style={[grany_home.m_v,{flex:1,margin:10,borderRadius:15},safety_main.shadow]}>
    
    
    <StackHeader name={route.name} nav={navigation} icon_name={"close-sharp"} route_path={"결과 조회"}/>
    
    <ScrollView
    indicatorStyle='white'
    contentContainerStyle={{backgroundColor:"white"}}>
    
      
    <View style={{flex:1}}></View>
       <Text>{route.params.data}</Text> 
       </ScrollView></View>
       </SafeAreaView>
        </>)
}
export default Resultselect