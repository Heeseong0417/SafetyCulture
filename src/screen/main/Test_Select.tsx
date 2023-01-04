
import { useState } from "react"
import { ScrollView, Text, View, TouchableOpacity,Alert, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { grany_home, safety_main } from "../../style/Styles"
import StackHeader from "../header/StackHeader"
import SwipeButton from 'rn-swipe-button';
import Slider1 from "@react-native-community/slider"
import { useSharedValue } from 'react-native-reanimated';
import {Slider}  from 'react-native-awesome-slider' ;
import { IP } from "../util/ServerPath"
import axios from "axios"

import Sliderx from '@react-native-community/slider';
const Test_Select =({navigation,route}:any)=>{
    const [menu_item, setmenu_item] = useState({
        "떨어짐":[{title:"", type:"select",category:[{name:"사다리",j_height:2.0},{name:"작업발판",j_height:1.0},{name:"차량",j_height:1},{name:"말비계",j_height:1.5},{name:"계단",j_height:3.0},{name:"기타",j_height:0.0}],weight:"",j_height:""}],
        "물체에 맞음":[{title:"", type:"select",category:[""]}],
        "넘어짐":[{title:"", type:"select",category:[""]}],
        "부딫힘":[{title:"", type:"select",category:[""]}],
        "끼임":[{title:"", type:"select",category:[""]}]
        
          })

          const [send_data, setsend_data] = useState({
Test_name:"",Select_item: "사다리",u_weight:0,j_height:2.0
          })
          const [toggle, settoggle] = useState([1,0,0,0,0])
   const pd:String =  route.params.data
   const pn = route.params.name;
   ///////////////////////////////////////////////////////
const change_btn =(index: any,params_data:any,menu:String,meter:number)=>{
    console.log(index)
toggle[index] == 1 ;
let toggle_ = [0,0,0,0,0]
toggle_[index] = 1;
console.log(toggle)

setsend_data((data:any) => {
    return { ...data, Test_name:params_data,Select_item:menu,j_height:meter }
})
settoggle(data=> data = toggle_)
}
///////////////////////////////////////////////////
const axios_data = async ()=>{  
  

  switch(route.params.data){
    
  }
    const Uri = IP+'/test_start'
    let data_test = {
      
    userId :route.params.name,
  testName :route.params.data,
  selectItem :send_data.Select_item,
  Uweight :send_data.u_weight,
  Jheight:send_data.j_height,
  

    }
    let formdata = new FormData();

    formdata.append("userId",route.params.name)
    formdata.append("testName",route.params.data)
    formdata.append("selectItem",send_data.Select_item)
    formdata.append("Uweight",send_data.u_weight)
    formdata.append("Jheight",send_data.j_height) 
       /** formdata.append("params",data_test) **/
    console.log(JSON.stringify(data_test))
    Alert.alert(JSON.stringify(data_test))
   
  
 
    const headers = {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "Authorization": "token",
        "Content-Type" : "application/json"
     
    }

    
    await axios.post( Uri,data_test,{headers:headers}
     ).then(function (response) {
      console.log(response.data)
     // Alert.alert(JSON.stringify(response.data))
      // navigation.reset({routes: [{name: 'Start_user'}]})
    }).catch(function (error) {
      console.log(error);
     Alert.alert("에러가 발생하였습니다! 다시 시도 해주세요") 
    })
   
  
    

  }
const change_value_u =(num: number)=>{
  setsend_data((data: any) => {
    return { ...data, u_weight: Math.round(num*100)/100.0}
})

}
const change_value_j =(num: number)=>{
  setsend_data((data: any) => {
    return { ...data, j_height: Math.round(num*100)/100.0}
})
}

    return (<>
    <SafeAreaView style={[grany_home.m_v,{backgroundColor:"#0073F0",backfaceVisibility:"hidden"}]} >
    <Sliderx
  style={{width: 200, height: 40,backgroundColor:"orange"}}
  minimumValue={0}
  maximumValue={50}
  minimumTrackTintColor="#FFFFFF"
  maximumTrackTintColor="#000000"
  thumbTintColor="white"
  step={0.5}
  onSlidingComplete={(num:any) => {
  setsend_data((data: any) => {
      return { ...data, j_height: Math.round(num*100)/100.0}
  })
  
} }
value={send_data.j_height} 
/>
<View style={[grany_home.m_v,{flex:1,margin:10,borderRadius:15},safety_main.shadow]}>
<Text>{route.params.data}</Text>

<StackHeader name={route.name} nav={navigation} icon_name={"close-sharp"} route_path={"평가하기"}/>

<ScrollView
indicatorStyle='white'
contentContainerStyle={{backgroundColor:"white"}}>

  
<View style={[safety_main.category]}>
<Text style={[safety_main.category_title,{marginVertical:20}]}>사고 발생 형태</Text>
<View style={[safety_main.shadow,safety_main.category_button,{backgroundColor:"#0073F0"}]}>
<Text style={[safety_main.category_subtitle,{color:"white"}]}>{route.params.data} </Text>
</View>
{route.params.data === "떨어짐"?(<>
<View>
    <Text style={[safety_main.category_title,{marginVertical:20}]}>고소 작업 환경</Text>
<View style={{flexDirection:"row",flexWrap:"wrap"}}>
{menu_item['떨어짐'][0].category.map((menu,index)=>(<>

    
<TouchableOpacity style={{backgroundColor:"white"}} onPress={()=>change_btn(index,route.params.data,menu.name,menu.j_height)}>
<View style={[safety_main.shadow,safety_main.category_button,{backgroundColor:toggle[index] ===1 ?  "#0073F0":"white"}]}>
<Text style={[safety_main.category_txt,{color:toggle[index] ===1 ?  "white":"black"}]}>{menu.name} </Text></View>
</TouchableOpacity >

</>))}
</View>
<Text style={[safety_main.category_title,{marginVertical:20}]}>세부 입력</Text>
<Text style={[safety_main.category_txt,{marginVertical:20}]}>몸무게</Text>
<View style={{flexDirection:"row",flexWrap:"wrap",opacity:0.8}}>


<Slider
theme={{

    maximumTrackTintColor: 'gray',
    minimumTrackTintColor: '#3D5CFF',

    bubbleBackgroundColor: '#0073F0',
      
    
  }}
containerStyle={{backgroundColor:"gray",height:1}}
disableTrackFollow={false}
renderThumb={()=>(<>
<View style={{backgroundColor:"white",borderRadius:100,width:27,height:27,flex:1,alignItems:"center"}}><View style={{borderRadius:100,borderWidth:1,width:25,height:25,backgroundColor:"white",borderColor:"#3D5CFF"}}></View></View>
</>)}
  style={{flex:1,margin:10}}
  minimumValue={useSharedValue(0)}
  maximumValue={useSharedValue(150)}
  thumbWidth={40}
  onSlidingComplete={change_value_u}
  cache={useSharedValue(0)}
  progress={useSharedValue(send_data.u_weight)}
  
/>

</View>
<Text style={[safety_main.category_subtitle,{marginVertical:20,paddingHorizontal:20}]}>{send_data.u_weight} kg</Text>
<Text style={[safety_main.category_txt,{marginVertical:20}]}>작업 높이</Text>
<View style={{flexDirection:"row",flexWrap:"wrap",opacity:0.8}}>

<Slider
theme={{

    maximumTrackTintColor: 'gray',
    minimumTrackTintColor: '#3D5CFF',

    bubbleBackgroundColor: '#0073F0',
      
    
  }}
containerStyle={{backgroundColor:"gray",height:1}}
disableTrackFollow={false}
renderThumb={()=>(<>
<View style={{backgroundColor:"white",borderRadius:100,width:27,height:27,flex:1,alignItems:"center"}}><View style={{borderRadius:100,borderWidth:1,width:25,height:25,backgroundColor:"white",borderColor:"#3D5CFF"}}></View></View>
</>)}
                                         style={{flex:1,margin:10}}
                                        minimumValue={useSharedValue(0)}
                                        maximumValue={useSharedValue(50)}
                                        onSlidingComplete={change_value_j} 
                                        progress={
                                        useSharedValue(50)
                                        }  
                                        cache={ useSharedValue(send_data.j_height)}
/>

</View>
<Text style={[safety_main.category_subtitle,{marginVertical:20,paddingHorizontal:20}]}>{send_data.j_height} M </Text>    
 <Text></Text>

</View>



</>): route.params.data === "물체에 맞음" ? (<>
    <Text style={[safety_main.category_title,{marginVertical:20}]}>고소 작업 환경</Text>
{menu_item['떨어짐'][0].category.map(()=>(<>

</>))}

</>): route.params.data === "넘어짐" ? (<>


</>): route.params.data === "부딫힘"?(<>
    <Text style={[safety_main.category_title,{marginVertical:20}]}>고소 작업 환경</Text>
{menu_item['부딫힘'][0].category.map(()=>(<>

</>))}

</>): route.params.data === "끼임"?(<>
    


</>):(<></>)
}
<TouchableOpacity onPress={axios_data}>
<View style={[safety_main.shadow,safety_main.category_button,{backgroundColor:"#0073F0"}]}>
<Text style={[safety_main.category_subtitle,{color:"white",textAlign:"center"}]}>완료 </Text>
</View>
</TouchableOpacity>
</View>

   </ScrollView></View>
   </SafeAreaView>
    </>)
}

export default Test_Select