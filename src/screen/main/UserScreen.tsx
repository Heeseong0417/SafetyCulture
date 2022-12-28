import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { safety_main } from "../../style/Styles";
import { Header_create } from "../header/Header";




const UserScreen=({route,navigation}:any)=>{

    return(
        <>
        <SafeAreaView style={{flex:1,marginBottom:100}} >

   

<Header_create name={route.name} nav={navigation} icon_name={"person-circle-outline"} route_path={"설정"}/>

<View style={[safety_main.list_view]}>
  
</View></SafeAreaView>

        </>
    )
}

export default UserScreen;