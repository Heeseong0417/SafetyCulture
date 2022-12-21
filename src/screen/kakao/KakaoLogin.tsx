import {WebView} from 'react-native-webview';

const REST_API_KEY = '823ceac23adf1f45b64184a16ea100d5'
//const REDIRECT_URI = 'http://1.237.1.88:4500/parking_data'
const REDIRECT_URI = 'http://10.0.2.2:8080/kakao/callback'
//const REDIRECT_URI = 'http://valiantdata.co.kr'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Alert, Image } from 'react-native';
import Modal from 'react-native-modal/dist/modal';
import { styles_main, styles_test } from '../../style/Styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Text, View} from "react-native-animatable"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Header_create } from '../header/Header';
import Postcode from '@actbase/react-daum-postcode';
// other import settings...

const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;

 

const KakaoLogin = ({navigation}:any) => {
  const [isModal, setModal] = useState(false);
    const [userProfile, setuserProfile] = useState({nickname:"",profile_image:""})
    const [user_id, setuser_id] = useState("")
    const [token_save, settoken_save] = useState("")
    const [isModalVisible, setModalVisible] = useState(false);
    const [switch_, setswitch_] = useState(0)
    const toggleModal = () => {
        console.log(isModalVisible)
        setModalVisible(!isModalVisible);
      };
      const bootstrapAsync = async () => {
        let userToken:any;
        let userName:any;
    
        try {
          await AsyncStorage.setItem('nickname',userProfile.nickname)
          await AsyncStorage.setItem('profile_image',userProfile.profile_image)
          
        
        } catch (e) {
          // 토큰 가져오기 실패 FIXME: alert해주기
        }
    
        // FIXME: 토큰 유효한지 확인해주기
    
        // 스크린 언마운트됨, 버려짐
        
      }
      const a=()=>{
     
       
        return(Alert.alert(JSON.stringify(userProfile),"set token:"+token_save)
       
        )
      }
      const b=()=>{
         const setStringValue = async() => {
    try {
      
     const nickname= await AsyncStorage.getItem( 'nickname')
    return nickname
    } catch(e){
      console.log(e)
    }
    
  }
        return(Alert.alert("토큰 : ",JSON.stringify(setStringValue)))
      }
      useEffect(() => {
    
        const bootstrapAsync = async () => {
          let userToken:any;
          let userName:any;
      
          try {
            userProfile.nickname = await AsyncStorage.getItem('nickname')+""
            userProfile.profile_image = await AsyncStorage.getItem('profile_image')+""
            setuserProfile(data => data = userProfile)
          
          } catch (e) {
            // 토큰 가져오기 실패 FIXME: alert해주기
          }
      
          // FIXME: 토큰 유효한지 확인해주기
      
          // 스크린 언마운트됨, 버려짐
          
        }
      
        bootstrapAsync()

        return()=>{
          AsyncStorage.setItem('nickname',userProfile.nickname)
          AsyncStorage.setItem('profile_image',userProfile.profile_image)
        }
      }, [])
    
 
      const Modal_data =()=>{
        return (  <>
            <Header_create name={"회원 정보"} nav={a}/>
      <View style={[{backgroundColor:"white"},styles_test.modal_style]}>
 
         
  
      
          
          <View style={styles_main.stick}/>     
<Text>유저 아이디 : {user_id}</Text>
<Modal isVisible={isModal}>
<Postcode
                style={{ width: 320, height: 320 }}
                jsOptions={{ animation: true }}
                onSelected={data => Alert.alert(JSON.stringify(data))} onError={function (error: unknown): void {
                  throw new Error('Function not implemented.');
                } }  />
  </Modal>
      <TouchableOpacity onPress={() => setModal(true)}><Text>주소찾기</Text></TouchableOpacity>
       <View style={[styles_main.main_card_divide]}>
  <Image style={[styles_main.main_card_img]} source={{uri:userProfile.profile_image}}></Image>
  <View style={[styles_main.main_card_divt]}>
    <Text style={[styles_main.main_card_text]}> 이름 : {userProfile.nickname}</Text>
   </View></View><TouchableOpacity style={styles_test.main_home_button} onPress={(a)}>
<Text>클릭하세요</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles_test.main_home_button} onPress={(b)}>
<Text>클릭하세요</Text>
    </TouchableOpacity>
   <View>
    
   </View>

        


     </View>
   
     </>)
      }
      const Web_View=()=>{
        return (
            <>
            {
            switch_==1?(<Modal_data></Modal_data>):(<WebView 

originWhitelist={['*']}

scalesPageToFit={false}

style={{ marginTop: 30 }}
source = {{uri : `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`}}



injectedJavaScript={runFirst}

javaScriptEnabled={true}

onMessage={(event) => {switch_ == 0 ? LogInProgress(event.nativeEvent["url"]):<></>}}

// onMessage ... :: webview에서 온 데이터를 event handler로 잡아서 logInProgress로 전달

>

</WebView> )
      }    
            </>
        )
      }

    function LogInProgress(data: string) {
        console.log(data)
        // access code는 url에 붙어 장황하게 날아온다.

        // substringd으로 url에서 code=뒤를 substring하면 된다.

        const exp = "code=";
        const id = "client_id=";
        let condition = data.indexOf(exp);
        let id_condition = data.indexOf(id);
        console.log(condition)
        if (condition != -1) {

            let request_code = data.substring(condition + exp.length);
            let request_id = data.substring(id_condition+id.length)
            console.log("uri code2 : ",request_code)
            // console.log("access code :: " + request_code);

            // 토큰값 받기
console.log("request_code : ",request_code)
console.log("request_id : ",request_id)
            requestToken(request_code,request_id);

        }

    };

 

  
    const requestToken = async (request_code: string,request_id: string) => {

      var returnValue = "none";

      var request_token_url = "https://kauth.kakao.com/oauth/token";



      axios({

          method: "post",

          url: request_token_url,

          params: {

              grant_type: 'authorization_code',

              client_id: REST_API_KEY,

              redirect_uri: REDIRECT_URI,

              code: request_code,

          },

      }).then(function (response: { data: { access_token: string; }; }) {
       
          returnValue = response.data.access_token;
           settoken_save(data => data =returnValue)
          const reqURL = "https://kapi.kakao.com/v2/user/me";
          axios({

            method: "post",
  
            url: reqURL,
  
            params: {access_token:returnValue},
  
        }).then(function (response) {
          setswitch_(data => data= 1)
         
      
       setuserProfile(data => data = response.data.properties)
       setuser_id(data=> data = response.data.id)
       AsyncStorage.setItem('nickname',response.data.properties.nickname)
       console.log("kakao info : ", response.data)
       console.log(response.data.properties.nickname)
       AsyncStorage.setItem('profile_image',response.data.properties.profile_image)
       console.log(response.data.properties.profile_image)
      })
          //console.log("dfdfdfdf : "+JSON.stringify(returnValue))
         
      }).catch(function (error: any) {

          console.log('error', error);

      });

  };
 

    return (
        
          <> 
          
        <View style={{ flex: 1 }}> 
        <Web_View/>
       
           
      
        </View>
      </>
    );

};

 

export default KakaoLogin;     
