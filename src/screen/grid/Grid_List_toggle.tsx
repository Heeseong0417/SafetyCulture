
import { useEffect, useState } from "react";
import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";
import { safety_main } from "../../style/Styles";
import Ionicons from "react-native-vector-icons/Ionicons"

const Grid_List_button = ({list_item,state,print_option}:any)=>{



  useEffect(() => {
 setoption(data=> data = list_item)
 state(list_item)
    return () => {
      
    }
  }, [])
  const toggle = (index:any)=>{
    option[index].value = !option[index].value
setoption(data=> [...option])
state([...option])

  }
  
  const [option, setoption] = useState([{value:false}])
    const renderItem = ({ item }:any) => (
        <View 
        style={[{
          flex:1,
          flexDirection:'column'
        },safety_main.shadow]}>
   

          <TouchableOpacity style={[{padding:10,backgroundColor:"white"}]} onPress={()=>Alert.alert("dddd")}>
          <Text style={[safety_main.home_button_w,{color:"black"}]}>
            {item.name}
            </Text>
            <View>
    
            
           <Text style={[safety_main.home_button_b,{}]}>{item.value}</Text></View>
            </TouchableOpacity> 
        
           
          
        </View>
      );
           

    return(<>
    <View>


{print_option === 'text'?(
list_item.map((item:any,index:number)=>(<>

 <View>
  <View style={[{flex:1,flexDirection:"row", borderRadius:10,backgroundColor:"white",margin:10,padding:10,justifyContent:"space-between",alignItems:"center"},safety_main.shadow]}>
  
  <Text style={[{fontWeight:"bold",textAlign:"center"}]}>{index+1}. {item.name}</Text>
  
  <Text style={[]}>
  <Ionicons name={"md-checkmark-sharp"} size={30} color={item.value == false ? "gray":"green"}/>
    </Text>
  </View>
 </View>
  </>)))

:(option.map((item:any,index:number)=>(<>

<TouchableOpacity style={{}} onPress={()=>{
toggle(index)
}}>
<View style={[{flex:1,flexDirection:"row", borderRadius:10,backgroundColor:"white",margin:10,padding:10,justifyContent:"space-between",alignItems:"center"},safety_main.shadow]}>

<Text style={[{fontWeight:"bold",textAlign:"center"}]}>{index+1}. {item.name}</Text>

<Text style={[]}>
<Ionicons name={"md-checkmark-sharp"} size={30} color={item.value == false ? "gray":"green"}/>
  </Text>
</View>
</TouchableOpacity>
</>)))}

   
  </View>
    
    </>)
}

export default Grid_List_button;