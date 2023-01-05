
import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";
import { safety_main } from "../../style/Styles";


const Grid_List_button = ({list_item}:any)=>{


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


{list_item.map((item:any)=>(<>

<TouchableOpacity style={{}}>
<View style={[{flex:1,flexDirection:"row", borderRadius:15,backgroundColor:"white",margin:10,padding:10,justifyContent:"space-between"},safety_main.shadow]}>

<Text style={[]}>{item.name}</Text>

<Text style={[]}>{String(item.value)}</Text>

</View>
</TouchableOpacity>
</>))}
      
   
  </View>
    
    </>)
}

export default Grid_List_button;