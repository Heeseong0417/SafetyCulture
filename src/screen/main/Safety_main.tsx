import { grany_home, safety_main } from "../../style/Styles"
import{View,Image} from "react-native-animatable";
import { Alert, SafeAreaView, ScrollView } from "react-native";
import { Header_create } from "../header/Header";


const Safety_main =({navigation}:any)=>{
    const run_event =()=>{
        Alert.alert("구현중입니다.")
      }
    const back =()=>{
    navigation.goBack()
    }

return(<>
<SafeAreaView style={grany_home.m_v} >


<Header_create name={"HOME"} nav={back}/>

<ScrollView
indicatorStyle='white'
contentContainerStyle={{backgroundColor:"white"  }}
>
<View style={{flex:1,margin:5}}>

</View>

<View style={{flex:1}}>



<View style={[{flex:3}]}>

</View> 

</View> 
</ScrollView>
</SafeAreaView> 
</>)
}
export default  Safety_main
    ;
 