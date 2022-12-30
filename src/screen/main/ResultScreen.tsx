import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { safety_main } from "../../style/Styles";
import Grid_table from "../grid/Grid_table";
import { Header_create } from "../header/Header";




const ResultScreen=({route,navigation}:any)=>{

    return(
        <>
        <SafeAreaView style={{flex:1,backgroundColor:"white"}} >

   

<Header_create name={route.name} nav={navigation} icon_name={"person-circle-outline"} route_path={"정보"}/>

<View style={[safety_main.list_view]}>
  <Grid_table title={'결과조회'} subtitle={"진행한 안전문화 위험성 평가결과를 조회할 수 있습니다.  "} navigation={route.params.route_nav}/>
</View></SafeAreaView>

        </>
    )
}

export default ResultScreen;