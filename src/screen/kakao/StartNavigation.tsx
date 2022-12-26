import { createStackNavigator } from "@react-navigation/stack";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import KakaoLogin from "./KakaoLogin";
import SiteUp from "./SiteUp";
import Start_user from "./Start_user";
import BottomTabNav from "../navigation/BottomTabNav";

//import CertificationTest from "../../CertificationTest";
import Certification from "../../Certification";
import CertificationResult from "../../CertificationResult";
import UserCertifcationForm from "./UserCertifcationForm";
import Login from "./Login";
import Safety_main from "../main/Safety_main";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeBaseProvider } from "native-base";


const StartNavigation=()=>{
    const Stack = createSharedElementStackNavigator();


    return(<>
    <SafeAreaProvider>
    
    <NavigationContainer>
       <Stack.Navigator initialRouteName='HomeScreen'
    screenOptions={{ headerShown: false

    }}
    
    
      >
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
      </Stack.Navigator></NavigationContainer></SafeAreaProvider>
    </>)
}

export default StartNavigation;