import {Text,View}from "react-native-animatable"
import { TouchableOpacity } from "react-native-gesture-handler";
import { grany_home } from "../../style/Styles";
import { Image } from "react-native-animatable";
import map from "../assets/map.png"
const Flex_button =({title,img,run_event,size}:any)=>{
 

    return(
        <>

       
        
      
        <View  style={[{flex:1,flexDirection:"row",margin:10,marginTop:30,justifyContent:"center",alignItems:"center",backgroundColor:"#fff"},grany_home.main_box]}>
       
        <TouchableOpacity style={[grany_home.flex_button]} onPress={()=> run_event()}>

        
        <Text style={[grany_home.flex_b,{justifyContent:"flex-start"}]}>{title}</Text>
        
                 {size =="big"?(<Image style={[{justifyContent:"flex-end"}]} source={img}/>):(<Image style={[{justifyContent:"flex-end"}]} source={img}/>)}
</TouchableOpacity>
        </View>
        </>
    )
}
export default Flex_button;