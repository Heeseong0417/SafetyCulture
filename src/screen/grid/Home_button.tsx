import { FlatList } from "react-native";
import {View, Image, Text} from "react-native-animatable";
import { TouchableOpacity } from "react-native-gesture-handler";
import { safety_main, styles } from "../../style/Styles";
import Icon_i from "react-native-vector-icons/FontAwesome5"
import { Alert, AlertDialog } from "native-base";


const Home_button =({title,navigation,list_item,user}:any)=>{


  const renderItem = ({ item }:any) => (
    <View
    style={[{
      flex:1,
      flexDirection:'column',
      margin:10
    },safety_main.shadow]}>
       {item.name==="떨어짐"?(
        <>
      <TouchableOpacity style={[safety_main.home_btn,{padding:10}]} onPress={()=>navigation.reset({routes: [{name: item.route_path,data:user}]})}>
      <Text style={[safety_main.home_button_w]}>
    
       <Icon_i name={item.value} size={30} color={"white"}/>
       </Text>
       
      
       </TouchableOpacity> 
      <Text style={[safety_main.home_button_w,{padding:10}]}>{item.name}</Text></>
      ):(<>
      <TouchableOpacity onPress={()=>navigation.navigate(item.route_path,{data:user})}>
      <View style={[safety_main.home_btn]} >
       <Text style={[safety_main.home_button_w,{justifyContent:"center",alignItems:"center"}]}>
 
        <Icon_i style={[{ transform: [
         {rotate:"45deg"}
        ]}]} name={item.value} size={60} color={"white"}/>

        </Text>
         <Text style={[safety_main.home_button_w,{}]}>{item.name}</Text>
       
        </View>
       
        </TouchableOpacity> 
      </>)}
       
      
    </View>
  );

return(<>

<View style={[safety_main.list_view]}>


<FlatList
contentContainerStyle={[safety_main.main_list_item]}
ListHeaderComponent={
<View >
  
  <Text style={[safety_main.home_title_b]}>{title}</Text>
</View>
}
    data={list_item}
    numColumns={2}
    
    renderItem={renderItem}
    keyExtractor={item => item.name}
  /></View>
</>)
}

export default Home_button