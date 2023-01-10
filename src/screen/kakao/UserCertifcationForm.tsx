import React, { useRef, useState } from "react";
import { Alert, ScrollView, TextInput, TouchableOpacity } from "react-native";
import{Text, View, Image}from "react-native-animatable";
import { SafeAreaView } from "react-native-safe-area-context";
import { grany_home, grany_start } from "../../style/Styles";
import {Picker} from '@react-native-picker/picker';

const UserCertifcationForm =({navigation}:any)=>{
    const [isModal, setModal] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState();
   const [company, setcompany] = useState("valiantdata")
   const [carrier, setCarrier] = useState("SKT")
const [form, setform] = useState({user:{ name:"이희승", Pnumber:""}
})


    return(<>
     <SafeAreaView style={grany_home.m_v} edges={['top', 'left', 'right']}>
        <ScrollView>
        <View style={[grany_start.siteup_con]}>
        <View style={[grany_start.form_title_con]}>
            <Text style={[grany_start.form_title]}>회원 가입</Text>
            <View style={[grany_home.stick]}/>
            <View style={[{margin:10,marginTop:10}]}>
                <Text style={[grany_start.form_text_bold,{textAlign:"center",margin:5}]}>
                    환영합니다 
                </Text>
                <Text style={[grany_start.form_text,{textAlign:"center",margin:5}]}>
                    안전문화 위험도 평가를 위한 회원가입 페이지 입니다. 본인인증을 완료해 주세요.
                </Text>
            </View>
        </View>

        <View style={[{margin:10,flex:3},grany_start.form_title_con]}>
        <Text style={[grany_start.form_text_bold,{textAlign:"center",margin:5}]}>
                    가입자 정보 입력
                </Text>
                <View style={[grany_home.stick]}/>
                <View style={[grany_start.form_item]}>
         <Text style={[{flex:1,margin:10},grany_start.form_text]}>이름  
         
         </Text>
         
          
        
      
       </View>
       <View style={[grany_start.form_item]}>
       <TextInput placeholder={"이름을 입력하세요."}style={[grany_start.form_text_input,grany_start.form_text]} onChangeText={(text) => {
            form.user.name = text
           /**setform((data)=> {return{ ...data ,form}})**/}}/> 
       </View>

       <View style={[grany_start.form_item]}>
       <Text style={[{flex:1,margin:10},grany_start.form_text]}>휴대폰번호</Text>   
       <TouchableOpacity style={[grany_home.flex_button]}></TouchableOpacity>     
     </View>
     <View style={[grany_start.form_item]}>
         <TextInput keyboardType="number-pad" placeholder={"휴대폰 번호를 입력하세요."} style={[grany_start.form_text_input,grany_start.form_text]} onChangeText={(text) => {
            form.user.Pnumber = text
            /**setform((data)=> {return{ ...data ,form}})**/}}/>
           
            <Picker
            style={[{flex:1}]}
  selectedValue={carrier}
  onValueChange={(itemValue, itemIndex) =>
    setCarrier(itemValue)
  }>
  <Picker.Item label="SKT" value="SKT" />
  <Picker.Item label="KT" value="KT" />
  <Picker.Item label="LGT" value="LGT" />
  <Picker.Item label="알뜰폰" value="알뜰폰" />
</Picker>

   
        </View>
        <TouchableOpacity style={[grany_home.flex_blue_btn]}  onPress={()=> 
             {
              const data = {
                params: {
                  merchant_uid: "merchant_uid",
                  company:company,
                  carrier:carrier,
                  name:form.user.name,
                  phone:form.user.Pnumber,
                  
                },
                tierCode:'imp04335465'
              }
              //Alert.alert(JSON.stringify(data))
              form.user.name===""||form.user.Pnumber ==="" ? (Alert.alert("이름과 전화번호를 정확히 입력하세요.")):navigation.navigate('Certification', data)
              
              }} >

<Text  style={[grany_start.flex_blue_btn_text]}>본인인증</Text>
            </TouchableOpacity>  
</View></View>
            </ScrollView></SafeAreaView>
    </>
    )
}

export default UserCertifcationForm;