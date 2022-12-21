import Swiper from "react-native-swiper"
import {Text,View,StyleSheet, Dimensions, TouchableOpacity, Alert} from  "react-native"
import { grany_home, styles_main, styles_slider } from "../../style/Styles";
import { Image } from "react-native-animatable";
import grany from "../assets/grany.png"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
const UserCarousel =({user_list}:any)=>{
  const WINDOW_WIDHT = Dimensions.get("window").width; // Dimensions.get("screen").width;
  const WINDOW_HEIGHT = Dimensions.get("window").height;  
  
    return(<>
    <View style={[grany_home.main_car_div]}>
  <Swiper showsButtons={false} autoplay={true} paginationStyle={{ bottom: 1}} dotColor={"#c0c0c0"} activeDotColor={"gray"}>
    {user_list[1].length == 0 ? (<><Text style={[grany_home.flex_button]}>등록된 사용자가 없습니다.</Text></>):
    user_list[1].map((item: any,index: any)=> (
    <>
    <TouchableOpacity style={[grany_home.flex_button,grany_home.main_shadow]} onPress={()=> Alert.alert("구현 중")}>
    
    <View style={{flexDirection:"row",height:100, alignItems:"center",justifyContent:"space-between"}}>
       <View style={{flexDirection:"row",height:100, alignItems:"center",justifyContent:"space-around"}}>
        
        <Image source={user_list[0][index]}  style={[grany_home.main_timg]} />
        <View><Text style={[grany_home.user_name]}>{user_list[1][index]} 님</Text><Text style={[grany_home.list_item_title]}>마지막 체크 {user_list[2][index]}</Text></View>
       
       </View>
       
       
       
      </View>
      <Icon onTextLayout={()=>"my"}  color={"gray"} name={"chevron-right"} size={WINDOW_WIDHT/10}/>
            </TouchableOpacity></>
      )
      
      )}

   
      </Swiper></View>
    </>)
}

export default UserCarousel;