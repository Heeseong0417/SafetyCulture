import { FlatList } from "react-native";
import {View, Image, Text} from "react-native-animatable";
import { TouchableOpacity } from "react-native-gesture-handler";
import { safety_main, styles } from "../../style/Styles";
import Icon_i from "react-native-vector-icons/MaterialCommunityIcons"
import { Alert, AlertDialog } from "native-base";


const Home_button =({title,navigation,list_item,user}:any)=>{


  const renderItem = ({ item }:any) => (
    <View
    style={[{
      flex:1,
      flexDirection:'column'
    },safety_main.shadow]}>
      <>
      <TouchableOpacity style={[safety_main.shadow]} onPress={()=>navigation.navigate(item.route_path,{data:user})}>
      <View style={[safety_main.home_btn]} >
       <Text style={[safety_main.home_button_w,{justifyContent:"center",alignItems:"center",opacity:0.8}]}>
 
        <Icon_i style={[{ transform: [
         {rotate:"45deg"}
        ]}]} name={item.value} size={60} color={"white"}/>

        </Text>
         
       
        </View>
        <View>

        
       <Text style={[safety_main.home_button_b,{}]}>{item.name}</Text></View>
        </TouchableOpacity> 
      </>
       
      
    </View>
  );

return(<>

<View style={[safety_main.list_view]}>


<FlatList
style={[{flex:1}]}
contentContainerStyle={[safety_main.main_list_item]}
ListHeaderComponent={
<View style={{paddingTop:30}}>
  
  <Text style={[safety_main.home_title_b]}>{title}</Text>
</View>
}
    data={list_item}
    numColumns={2}
    
    renderItem={renderItem}
    keyExtractor={item => item.name}
  />
  </View>
</>)
}

export default Home_button