import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { SafeAreaView } from "react-native-safe-area-context";
import { safety_main } from "../../style/Styles";
import Grid_list from "../grid/Grid_list";
import Grid_table from "../grid/Grid_table";
import { Header_create } from "../header/Header";
import { IP } from "../util/ServerPath";




const ResultScreen=({route,navigation}:any)=>{
  const [loading, setloading] = useState(false)
   const [result_list, setresult_list] = useState([{testName:""}])
  const Uri = IP+'/result_list'
  const headers = {
    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Authorization": "token",
      "Content-Type" : "application/json"
   
  }
 
  useEffect(() => {
  setloading(()=>true)
   axios.post( Uri,{},{params:{userId:route.params.data}}
    ).then(function (response) {
     //navigation.navigate("Test_Select_result",{result_data : response.data,name:"dddd"})
     setloading(data=> data = false)
    // console.log(response.data)
    // Alert.alert(JSON.stringify(response.data))
     // navigation.reset({routes: [{name: 'Start_user'}]})
     setresult_list(data=> response.data)
   }).catch(function (error) {
     console.log(error);
    Alert.alert("에러가 발생하였습니다! 다시 시도 해주세요") 
    setloading(data=> data = false)
   })
  
    return () => {
     
    }
  }, [])
  
    return(
        <>
        <SafeAreaView style={{flex:1,backgroundColor:"white"}} >
             <Spinner
          visible={loading}
          textContent={'Loading...'}
          textStyle={{color:"white"}}
        />
   

<Header_create name={route.name} nav={navigation} icon_name={"person-circle-outline"} route_path={"정보"}/>

<View style={[safety_main.list_view]}>
  <Grid_list title={'결과조회'} subtitle={"진행한 안전문화 위험성 평가결과를 조회할 수 있습니다.  "} list_item={result_list} navigation={route.params.route_nav}/>
  {/**<Grid_table title={'결과조회'} subtitle={"진행한 안전문화 위험성 평가결과를 조회할 수 있습니다.  "} navigation={route.params.route_nav}/>
**/}</View></SafeAreaView>

        </>
    )
}

export default ResultScreen;