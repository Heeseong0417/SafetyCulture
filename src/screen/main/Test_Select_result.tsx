import { useState } from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View,Alert } from "react-native";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { grany_home, safety_main } from "../../style/Styles";
import StackHeader from "../header/StackHeader";
import { RadioButton } from 'react-native-paper';
import Grid_List_button from "../grid/Grid_List_toggle";
import { IP } from "../util/ServerPath";
import axios from "axios";


const Test_Select_result=({route,navigation}:any)=>{
    const [loading, setloading] = useState(false)
    const [value, setValue] = useState('first');
    const [option, setoption] = useState([{name:"안전모 착용",value:false},{name:"작업 바닥 단차 점검",value:false},{name:"안전 장치 조치",value:false},{name:"2인 1조 작업",value:false},{name:"최상부 발판 작업 금지",value:false}])
    const [option2, setoption2] = useState([{name:"안전모 착용",value:false},{name:"제동 및 조종장치 점검",value:false},{name:"하역 및 유입장치 점검",value:false},{name:"조형 및 방향등 점검",value:false},{name:"접근경보장치 점검",value:false},{name:"작업지휘자 지정 및 배치",value:false}])
    const [select_option, setselect_option] = useState([{name:"",value:false}])
    const result_data = route.params.result_data;


const Child_state_get=(data:any)=>{

    setselect_option(item=> item = data )
 console.log(select_option)   
}

    const axios_data = async ()=>{  
        setloading((data)=>data = true)
      
      
          switch(route.params.data){
            
          }


          const data_test={
userId:result_data.userId,
date:String(result_data.date),
selectOption:JSON.stringify(select_option)
          }
            const Uri = IP+'/save_option'
         
          
  console.log("lastsend : ",data_test)      
           
          
         
            const headers = {
              "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
              "Authorization": "token",
                "Content-Type" : "application/json"
             
            }
        
            if(data_test.selectOption === ""){
              Alert.alert("모든 항목을 채워주세요.")
              setloading(data=> data = false)
            }else{
        
           
            await axios.post( Uri,data_test,{headers:headers}
             ).then(function (response) {

        
                navigation.reset({routes:[{name:"BottomTabNav",params:{userId:result_data.userId,bn_key:"결과"}}]})
                setloading((data)=>data = false)
              console.log(response.data)
             // Alert.alert(JSON.stringify(response.data))
              // navigation.reset({routes: [{name: 'Start_user'}]})
            }).catch(function (error) {
              console.log(error);
             Alert.alert("에러가 발생하였습니다! 다시 시도 해주세요") 
             setloading((data)=>data = false)
            })
           
           }
            
           setloading((data)=>data = false)
          }

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
<Text style={[safety_main.category_txt,{color:"black"}]}>{"사용장비 : "}  </Text>
<Text style={[safety_main.category_txt,{color:"black"}]}>{result_data.selectItem}</Text>
</View>
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

       <Grid_List_button list_item={ result_data.testClass =="떨어짐"? option:result_data.testClass === "부딪힘"?option2:""  } state={Child_state_get}/>

       <TouchableOpacity onPress={()=>{
   axios_data()
        }}>
<View style={[safety_main.shadow,safety_main.category_button,{backgroundColor:"#0073F0",margin:20}]}>
<Text style={[safety_main.category_subtitle,{color:"white",textAlign:"center"}]}>완료 </Text>
</View>
</TouchableOpacity>
       </ScrollView></View>
       </SafeAreaView>
    </>)
}

export default Test_Select_result;