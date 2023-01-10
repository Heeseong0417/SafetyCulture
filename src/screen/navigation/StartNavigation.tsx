import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import KakaoLogin from "../kakao/KakaoLogin";
import SiteUp from "../kakao/SiteUp";
import Start_user from "../kakao/Start_user";
import BottomTabNav from "./BottomTabNav";

//import CertificationTest from "../../CertificationTest";

import Certification from "../../Certification";
import CertificationResult from "../../CertificationResult";
import UserCertifcationForm from "../kakao/UserCertifcationForm";
import Login from "../kakao/Login";
import Safety_main from "../main/Safety_main";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import HomeNavigation from "./HomeNavigation";
import { NativeBaseConfigProvider } from "native-base/lib/typescript/core/NativeBaseContext";
import Test_Select from "../main/Test_Select";
import Resultselect from "../main/Result_select";
import Test_Select_result from "../main/Test_Select_result";
import Result_select from "../main/Result_select";


const StartNavigation=()=>{
    const Stack = createStackNavigator();

    return(<>    
    <SafeAreaProvider>

    <NavigationContainer>
       <Stack.Navigator initialRouteName='HomeScreen'
       
    screenOptions={{ headerShown: false }}>
        <Stack.Screen  name='Start_user' component={Start_user}
        /** sharedElements={(route: any) => {
          const { item }  = route.params;
          console.log(JSON.stringify(item))
          return [{ id: `item_${item.id}_image`, animation: "move" }];
        }} */
         />
         <Stack.Screen  name='Safety_main' component={Safety_main}
        /** sharedElements={(route: any) => {
          const { item }  = route.params;
          console.log(JSON.stringify(item))
          return [{ id: `item_${item.id}_image`, animation: "move" }];
        }} */
         />
        <Stack.Screen name='KakaoLogin' component={KakaoLogin}
       /** sharedElements={(route: any) => {
          const { item }  = route.params;
          console.log(JSON.stringify(item))
          return [{ id: `item_${item.id}_image`, animation: "move" }];
        }} */
   
        />
        <Stack.Screen name='SiteUp' component={SiteUp}
       /** sharedElements={(route: any) => {
          const { item }  = route.params;
          console.log(JSON.stringify(item))
          return [{ id: `item_${item.id}_image`, animation: "move" }];
        }} */
   
        />
        <Stack.Screen name='HomeNavigation' component={HomeNavigation}/>
          <Stack.Screen name='BottomTabNav' component={BottomTabNav}
        /** sharedElements={(route: any) => {
          const { item }  = route.params;
          console.log(JSON.stringify(item))
          return [{ id: `item_${item.id}_image`, animation: "move" }];
        }} */
   
   
        />
  
          <Stack.Screen name='Certification' component={Certification}
        /** sharedElements={(route: any) => {
          const { item }  = route.params;
          console.log(JSON.stringify(item))
          return [{ id: `item_${item.id}_image`, animation: "move" }];
        }} */
   
        
        />
          <Stack.Screen name='CertificationResult' component={CertificationResult}
        /** sharedElements={(route: any) => {
          const { item }  = route.params;
          console.log(JSON.stringify(item))
          return [{ id: `item_${item.id}_image`, animation: "move" }];
        }} */
   
   
        />
          <Stack.Screen name='UserCertifcationForm' component={UserCertifcationForm}
        /** sharedElements={(route: any) => {
          const { item }  = route.params;
          console.log(JSON.stringify(item))
          return [{ id: `item_${item.id}_image`, animation: "move" }];
        }} */
   
   
        />
        <Stack.Screen name='Login' component={Login}
        /** sharedElements={(route: any) => {
          const { item }  = route.params;
          console.log(JSON.stringify(item))
          return [{ id: `item_${item.id}_image`, animation: "move" }];
        }} */
   
   
        />
        <Stack.Screen name='Test_Select' component={Test_Select}
        options={() => ({
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          gestureEnabled: false,
       
        })}
   
   
        />
        
        <Stack.Screen name='Resultselect' component={Resultselect}
        options={() => ({
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          gestureEnabled: false,
       
        })}
   
   
        />
         <Stack.Screen name='Test_Select_result' component={Test_Select_result}
        options={() => ({
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          gestureEnabled: false,
       
        })}
   
   
        />
         <Stack.Screen name='Result_select' component={Result_select}/>
      </Stack.Navigator></NavigationContainer></SafeAreaProvider>
    </>)
}

export default StartNavigation;