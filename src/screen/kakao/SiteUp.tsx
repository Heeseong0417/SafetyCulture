import Postcode from "@actbase/react-daum-postcode";
import axios from "axios";
import { ScrollView } from "native-base";
import React, { useState } from "react";
import { Alert, TextInput, TouchableOpacity } from "react-native";
import { Text,View,Image } from "react-native-animatable";
import Modal from "react-native-modal/dist/modal";
import { SafeAreaView } from "react-native-safe-area-context";
import Grany_main from "../navigation/Grany_main";
import { grany_home, grany_start } from "../../style/Styles";

const SiteUp =({route,navigation}:any)=>{
    const [isModal, setModal] = useState(false);
    const [visible, setvisible] = useState(false)
    const response = route.params.response;
    const params = route.params.params;
const over_lab=(id: any)=>{

        const Uri = 'http://10.0.2.2:8080/id_overlap'
        const data_test= {userId:id}; 
        console.log(JSON.stringify(data_test))
        //alert(JSON.stringify(data_test))
        axios.post(Uri,{},{params: data_test}).then(function (response) {
          
          if(response.data == true){
            Alert.alert("생성 가능한 아이디 입니다.")
            setvisible(true)
          }
          else(Alert.alert("중복되거나 잘못된 아이디 입니다."))
          setvisible(false)
         
          
      })
    
}
const axios_data =()=>{  
  
    const Uri = 'http://10.0.2.2:8080/site_up'
    const data_test = {
      
      userId :form.user.id,
  userPassword :form.user.password,
  userName :params.name,
  userPhone :params.phone,
  level:3,
  department:""

    }
    console.log(JSON.stringify(data_test))
    Alert.alert(JSON.stringify(data_test))
    

    axios.post(Uri, data_test).then(function (response) {
      console.log(JSON.stringify(response.data))
       navigation.reset({routes: [{name: 'Start_user'}]})
    }).catch(function (error) {
      console.log(error);
     Alert.alert("에러가 발생하였습니다! 다시 가입해주세요") 
    })

     
  
    


}   
const [form, setform] = useState({user:{ id:"",siteid:"",password:"",address:"",address_l:"",Pnumber:""},
parent:{name:"",address:"",Pnumber:""}
})
    return(<>
      <SafeAreaView style={grany_home.m_v} edges={['top', 'left', 'right']}>
        <ScrollView>
        <Modal isVisible={isModal}>
<Postcode
                style={{ width: 320, height: 320 }}
                jsOptions={{ animation: true }}
                onSelected={(data) =>{ 
                    form.user.address = data.address

                    /**setform((data)=> {return{ ...data ,form}})**/
                    setModal(data=> data = false)
                    Alert.alert(JSON.stringify(data))}} onError={function (error: unknown): void {
                  throw new Error('Function not implemented.');
                } }  />
  </Modal>
        
    <View style={[grany_start.siteup_con]}>
        <View style={[grany_start.form_title_con]}>
            <Text style={[grany_start.form_title]}>회원 가입</Text>
            <View style={[grany_home.stick]}/>
            <View style={[{margin:10,marginTop:10}]}>
                <Text style={[grany_start.form_text_bold,{textAlign:"center",margin:5}]}>
                    환영합니다 
                </Text>
                <Text style={[grany_start.form_text,{textAlign:"center",margin:5}]}>
                    안전문화 위험도 평가를 위한 회원가입 페이지 입니다. 
                </Text>
            </View>
        </View>

        <View style={[{margin:10,flex:3},grany_start.form_title_con]}>
        <Text style={[grany_start.form_text_bold,{textAlign:"center",margin:5}]}>
                    가입자 정보 입력
                </Text>
                <View style={[grany_home.stick]}/>

{/**params data ------------------------------------------------------------------ */}
<View style={[grany_start.form_item]}>
         <Text style={[{flex:1,margin:10},grany_start.form_text]}>이름  
         
         </Text>
         
            

<Text style={[{flex:1,margin:10},grany_start.form_text]}>{params.name}</Text>

        
      
       </View>
       <View style={[grany_start.form_item]}>
         <Text style={[{flex:1,margin:10},grany_start.form_text]}>휴대폰 번호  
         
         </Text>
         
            

<Text style={[{flex:1,margin:10},grany_start.form_text]}>{params.phone}</Text>

        
      
       </View>
{/**params data ------------------------------------------------------------------ */}
       <View style={[grany_start.form_item]}>
         <Text style={[{flex:1,margin:10},grany_start.form_text]}>아이디  
         
         </Text>
         
             <TouchableOpacity style={[grany_start.form_btn]} onPress={()=>over_lab(form.user.id)} >

<Text  style={[grany_start.flex_blue_btn_text]}>중복확인</Text>
            </TouchableOpacity>  
        
      
       </View>
       <View style={[grany_start.form_item]}>
       <TextInput placeholder={"아이디를 입력하세요."} style={[grany_start.form_text_input,grany_start.form_text]} onChangeText={(text) => {
            form.user.id = text
           /**setform((data)=> {return{ ...data ,form}})**/}}/> 
       </View>

       <View style={[grany_start.form_item]}>
       <Text style={[{flex:1,margin:10},grany_start.form_text]}>비밀번호  </Text>   
       <TouchableOpacity style={[grany_home.flex_button]}></TouchableOpacity>     
     </View>
     <View style={[grany_start.form_item]}>
         <TextInput  keyboardType="number-pad" placeholder={"비밀번호를 입력하세요."} style={[grany_start.form_text_input,grany_start.form_text]} onChangeText={(text) => {
            form.user.password = text
            /**setform((data)=> {return{ ...data ,form}})**/}}/>

        </View>
            {form.user.password.length <=8 ? (<Text style={[{color:"red"}]}>비밀번호는 8자리 이상입니다.</Text>):(<></>)} 
        
        {/** 
        <View style={[grany_start.form_item]}>
      
       <Text style={[{flex:1,margin:10},grany_start.form_text]}>거주지 주소 </Text> 
       <TouchableOpacity style={[grany_start.form_btn]} onPress={() => setModal(true)}><Text  style={[grany_start.flex_blue_btn_text]}>주소찾기</Text></TouchableOpacity>
     </View> 
     <View style={[grany_start.form_item]}>
         <TextInput value={form.user.address} placeholder={"거주지 주소를 입력하세요"} style={[grany_start.form_text_input,grany_start.form_text]} onChangeText={(text) => {
            form.user.address = text
           }}/> 
        
        </View>
        <View style={[grany_start.form_item]}>
       <Text style={[{flex:1,margin:10},grany_start.form_text]}>세부 주소 {visible}</Text> 
       </View>
       <View style={[grany_start.form_item]}>
         <TextInput placeholder={"세부 주소를 입력하세요"} style={[grany_start.form_text_input,grany_start.form_text]} onChangeText={(text) => {
            form.user.address_l =text
           }}/> 
        
        </View>
    */}
   
                    <TouchableOpacity style={[grany_home.flex_blue_btn,{marginBottom:20}]} onPress={()=>  axios_data()}>

<Text  style={[grany_home.flex_blue_btn_text]}>가입하기</Text>
            </TouchableOpacity>
        </View> 
         </View>
         </ScrollView>
         </SafeAreaView>
    </>)
}

export default SiteUp;