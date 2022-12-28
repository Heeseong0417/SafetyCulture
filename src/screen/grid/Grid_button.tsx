import { Button, FlatList ,TouchableOpacity} from "react-native";
import {View, Image, Text} from "react-native-animatable";

import { safety_main, styles } from "../../style/Styles";
import Icon_i from "react-native-vector-icons/FontAwesome5"
import { Alert, AlertDialog } from "native-base";
import { useState } from "react";
import Modal from "react-native-modal"
import {TouchableHighlight} from "react-native-gesture-handler"
const Grid_button =({title,navigation,list_item,user}:any)=>{

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const print_modal = ()=>{

    return(
      <>
       <View style={{ flex: 1 }}>
      <Button title="Show modal" onPress={toggleModal} />

      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <Text>Hello!</Text>

          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
      </>
    )
  }
  const renderItem = ({ item }:any) => (
    <View
    style={[{
      flex:1,
      flexDirection:'column'
    },safety_main.shadow]}>
       {item.name==="떨어"?(
        <>
      <TouchableOpacity style={[safety_main.home_btn,{padding:10}]} onPress={()=>navigation(item.route_path,{data:user})}>
      <Text style={[safety_main.home_button_w]}>
    
       <Icon_i name={item.value} size={30} color={"white"}/>
       </Text>
       
      
       </TouchableOpacity> 
      <Text style={[safety_main.home_button_w,{padding:10}]}>{item.name}</Text></>
      ):(<>
      <TouchableOpacity style={[safety_main.shadow]} onPress={()=>navigation(item.route_path,{data:user})}>
      <View style={[safety_main.home_btn,{opacity:0.8}]} >
       <Text style={[safety_main.home_button_w,{justifyContent:"center",alignItems:"center"}]}>
 
        <Icon_i style={[{ transform: [
         {rotate:"45deg"}
        ]}]} name={item.value} size={60} color={"white"}/>

        </Text>
         
       
        </View>
        <View>

        
       <Text style={[safety_main.home_button_b,{}]}>{item.name}</Text></View>
        </TouchableOpacity> 
      </>)}
       
      
    </View>
  );

return(<>

<View style={[safety_main.list_view]}>


<FlatList
style={[{flex:1}]}
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
  />
   
      <TouchableOpacity style={safety_main.home_btn_s} onPress={toggleModal} ><Text style={safety_main.home_button_w}>modal</Text></TouchableOpacity>

      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <Text>Hello!</Text>
          <TouchableOpacity style={safety_main.home_btn_s} onPress={toggleModal} ><Text style={safety_main.home_button_w}>end</Text></TouchableOpacity>
          
        </View>
      </Modal>
   
  </View>
</>)
}

export default Grid_button