import {Alert} from "react-native";
import { Image , Text,View} from "react-native-animatable";
import { grany_home } from "../../style/Styles";
import logo from "../../../assets/logo/safety_no_move.png"
import { TouchableOpacity } from "react-native-gesture-handler";
import React, { useEffect, useRef, useState } from "react";
import Description from "./Description"
import { SafeAreaView } from "react-native-safe-area-context";
import { Animated } from "react-native";
import kakao_img from "../assets/logo/kakao-talk.png"
import axios from "axios";
const FadeInView = (props:any) => {

  
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
    const pan = useRef(new Animated.ValueXY()).current;
    useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
            toValue: 1,
            duration: 10000,
            useNativeDriver: false
        }
      ).start();
    }, [fadeAnim])
  
    return (
      <Animated.View                 // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {props.children}
      </Animated.View>
    );
  }
const Start_user =({navigation}:any)=>{ 

   const [merchantUid, setMerchantUid] = useState(`imp04335465`);
  const [company, setCompany] = useState('GranyBuddy ');
  const [carrier, setCarrier] = useState('lgt');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [minAge, setMinAge] = useState('');
  const [tierCode, setTierCode] = useState('');

  const axios_data =()=>{  
    /**
    const Uri = 'http://10.0.2.2:8080/recive'
    const data_test = {
      userId :"admin",
  userPassword :"testpassword",
  userName :"김철수",
  userPhone :"01033333333",
  userAddress :"경기도 성남시",
  userKakao :"카카오아이디",
  userPay :"페이",
  startDate: "2022-11-24T19:21:36.000915100",
  //new Date(),//.toISOString().substring(0,10),
  
  userLevel :"일반",
  notice :"없음"
    } */
    const Uri = 'http://10.0.2.2:8080/id_overlap'
    const data_test= {userId:"admin"}; 
    console.log(JSON.stringify(data_test))
    Alert.alert(JSON.stringify(data_test))
    axios.post(Uri,{},{params: data_test}).then(function (response) {
      console.log(JSON.stringify(response.data))
  })
}
    const AnimatedBox=Animated.createAnimatedComponent(logo);

  
   

    return(

        <>
<SafeAreaView style={[grany_home.m_v,{backgroundColor:"white"}]} edges={['top','bottom', 'left', 'right']}>

        <View style={[grany_home.main_view]}>
            
   <View style={[{flex:1,margin:30},grany_home.big_img]}>
    <Image animation={"bounceIn"} easing="ease-out" iterationCount={1}  style={[grany_home.big_img]} source={logo}/>    
    </View>



     
    <TouchableOpacity style={[grany_home.flex_blue_btn,{backgroundColor:"#F7E600"}]} onPress={()=>navigation.navigate("UserCertifcationForm")}>
    
<Text  style={[grany_home.flex_blue_btn_text,{color:"#3A1D1D",justifyContent:"space-around",textAlign:"center",alignItems:"center"}]}>{/**<Image style={[grany_home.icon_img]} source={kakao_img}/>**/}  회원가입</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[grany_home.flex_blue_btn,{marginBottom:20}]} onPress={()=> 
             {

              /**
              const data = {
                params: {
                  merchant_uid: "merchantUid",
                  company,
                  carrier,
                  name,
                  phone,
                  min_age: minAge,
                },
                tierCode,
              }; */
              //navigation.navigate('Certification', data); 
             // navigation.navigate("CertificationTest")
             navigation.navigate("Login")
              }}>

<Text  style={[grany_home.flex_blue_btn_text]}>시작하기</Text>
            </TouchableOpacity>

        
            
            </View>        
        </SafeAreaView>
        
        
        
        
        </>
    )
}

export default Start_user