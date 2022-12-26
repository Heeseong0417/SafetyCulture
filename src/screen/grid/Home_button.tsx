import { FlatList } from "react-native";
import {View, Image, Text} from "react-native-animatable";
import { TouchableOpacity } from "react-native-gesture-handler";
import { safety_main, styles } from "../../style/Styles";
import Icon_i from "react-native-vector-icons/FontAwesome5"


const Home_button =({list_item}:any)=>{


  const renderItem = ({ item }:any) => (
    <View
    style={[{
      flex:1,
      flexDirection:'column',
      margin:10
    },safety_main.shadow]}>
       {item.name==="떨어짐"?(
      <TouchableOpacity style={[safety_main.home_btn]}>
      <Text style={[safety_main.home_button_w]}>
     
       <Icon_i name={item.value} size={30} color={"white"}/>
       </Text>
       <Text style={[safety_main.home_button_w]}>{item.name}</Text>
      
       </TouchableOpacity> 
      
      ):(<>
      <TouchableOpacity style={[safety_main.home_btn]}>
       <Text style={[safety_main.home_button_w]}>
      
        <Icon_i name={item.value} size={30} color={"white"}/>
        </Text>
        <Text style={[safety_main.home_button_w]}>{item.name}</Text>
       
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
  
  <Text>평가할 항목을 선택하세요.</Text>
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