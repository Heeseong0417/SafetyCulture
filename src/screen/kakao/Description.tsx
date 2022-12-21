import {Text,View} from "react-native-animatable"
import {Image} from"react-native"
import SW from "react-native-swiper"
import { grany_home } from "../../style/Styles"
import React from "react"
import Swiper from "react-native-swiper"
const Description =()=>{


    return(<>

    <View style={[grany_home.main_view]}>
    <Swiper showsButtons={false} autoplay={true} paginationStyle={{ bottom: 1}} dotColor={"#c0c0c0"} activeDotColor={"gray"}>
       <View  style={[grany_home.main_view]}><Text>멀리계신 부모님</Text></View>
       <View  style={[grany_home.main_view]}><Text>멀리계신 부모님</Text></View>
        </Swiper>
    </View>
    </>)
}
export default Description;