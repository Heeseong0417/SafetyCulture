import { Dimensions } from 'react-native';
import { Text,View } from 'react-native-animatable';
import {  TouchableOpacity } from 'react-native-gesture-handler';
import { grany_home } from '../../style/Styles';
import {ScrollView} from "react-native"
import{Image} from "react-native";
import Swiper from "react-native-swiper"
    const WINDOW_WIDHT = Dimensions.get("window").width; 
    const WINDOW_HEIGHT = Dimensions.get("window").height;
const Slide_user=({pic_path}:any)=>{
console.log(String(pic_path))

    

    return(<>

  
 <View style={[grany_home.main_slider_con]}>
    
    {pic_path[0].map((items: any,index:number)=>(
        <> 

<TouchableOpacity >
<Image source={items}  style={[grany_home.main_timg]} />

<Text>{(pic_path[1][index])}</Text>
</TouchableOpacity> 

        </>
    ))}
  </View> 

    </>)
}

export default Slide_user;