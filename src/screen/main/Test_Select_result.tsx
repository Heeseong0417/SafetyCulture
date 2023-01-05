import { useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { grany_home, safety_main } from "../../style/Styles";
import StackHeader from "../header/StackHeader";
import { RadioButton } from 'react-native-paper';
import Grid_List_button from "../grid/Grid_List_button";

const Test_Select_result=({route,navigation}:any)=>{
    const [loading, setloading] = useState(false)
    const [value, setValue] = useState('first');
    const [option, setoption] = useState([{name:"안전모 착용",value:false},{name:"작업 바닥 단차 점검",value:false},{name:"안전 장치 조치",value:false},{name:"2인 1조 작업",value:false},{name:"최상부 발판 작업 금지",value:false}])

    const result_data = route.params.result_data;


    return(<>
        <SafeAreaView style={[grany_home.m_v,{backgroundColor:"#0073F0",backfaceVisibility:"hidden"}]} >
        <Spinner
          visible={loading}
          textContent={'Loading...'}
          textStyle={{color:"white"}}
        />
    <View style={[grany_home.m_v,{flex:1,margin:10,borderRadius:15},safety_main.shadow]}>
    
    
    <StackHeader name={route.name} nav={navigation} icon_name={"close-sharp"} route_path={"결과 및 안전조치"}/>
    
    <ScrollView
indicatorStyle='white'
contentContainerStyle={{backgroundColor:"white"}}>

  
<View style={[safety_main.category]}>
<Text style={[safety_main.category_title,{marginVertical:20}]}>사고 발생 형태</Text>
<View style={[safety_main.shadow,safety_main.category_button,{backgroundColor:"#0073F0"}]}>
<Text style={[safety_main.category_subtitle,{color:"white"}]}>{result_data.testClass} </Text>
</View>
<View>
    <Text style={[safety_main.category_title,{marginVertical:20}]}>위험성 결과</Text>

<View style={{flexDirection:"row",flexWrap:"wrap"}}>
<Text style={[safety_main.category_txt,{color:"black"}]}>{"최대에너지 : "}  </Text>
<Text style={[safety_main.category_txt,{color:"black"}]}>{result_data.energy} J</Text>
</View>
<View style={{flexDirection:"row",flexWrap:"wrap"}}>
<Text style={[safety_main.category_txt,{color:"black"}]}>{"위험도 : "}  </Text>
<Text style={[safety_main.category_txt,{color:"black"}]}>{result_data.riskIntensity} </Text>
</View>
<View style={{flexDirection:"row",flexWrap:"wrap"}}>
<Text style={[safety_main.category_txt,{color:"black"}]}>{"민감도 : "}  </Text>
<Text style={[safety_main.category_txt,{color:"black"}]}>{result_data.responsiveness} </Text>
</View>
<View>
    <Text style={[safety_main.category_title,{marginVertical:20}]}>안전 조치</Text>
</View>

</View>
</View>
 
       <Grid_List_button list_item={option}/>
       </ScrollView></View>
       </SafeAreaView>
    </>)
}

export default Test_Select_result;