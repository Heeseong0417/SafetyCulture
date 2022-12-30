import { Dimensions, StatusBar, Text, TouchableOpacity, View } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import { grany_home, styles_main } from "../../style/Styles"

const StackHeader= ({name,nav,icon_name,route_path}:any)=>{

    const WINDOW_WIDHT = Dimensions.get("window").width; // Dimensions.get("screen").width;
    const WINDOW_HEIGHT = Dimensions.get("window").height;
    return (

        <>
        <StatusBar backgroundColor="#0073F0" barStyle="light-content" />
        
    
        
        <View style={[grany_home.main_header,{backgroundColor:"white",borderTopLeftRadius:7,borderTopRightRadius:7}]}>
           <Text style={[grany_home.main_ht,{color:"#000",flex:1,textAlign:"center"}]}>{route_path}</Text>
           <View/>
      <TouchableOpacity style={[styles_main.header_text,{position:"absolute",alignSelf:"center",marginLeft:20,marginTop:20}]} onPress={()=> nav.goBack()}>
        <Ionicons onTextLayout={()=>"my"}  color={"#000"} name={`${icon_name}`} size={WINDOW_WIDHT/15}/>
      </TouchableOpacity>
           
        </View>
     
    
          </>
    )
}

export default StackHeader