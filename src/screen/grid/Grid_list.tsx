import { background } from "native-base/lib/typescript/theme/styled-system";
import { Alert, FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { safety_main } from "../../style/Styles";

const Grid_list=({title,subtitle,list_item,navigation}:any)=>{


    const renderItem = ({ item,index }:any) => (
        <View>
 

          <TouchableOpacity style={[{padding:10,backgroundColor:"white"}]} onPress={()=>navigation.navigate("Result_select",{result_data:item})}>
          
          <View style={{flexDirection:"row",alignContent:"center",alignItems:"center",marginBottom:5}}>
            <Ionicons name={"radio-button-on-sharp"} size={13} color={item.value == false ? "gray":"#0073F0"}/>
          <Text style={[{fontWeight:"bold",textAlign:"center",fontSize:13,marginLeft:10}]}>{item.date}</Text>
          </View>
          
          <View style={[{flex:1,flexDirection:"row", borderRadius:10,backgroundColor:"white",padding:10,justifyContent:"space-between",alignItems:"center"},safety_main.shadow]}>

<Text style={[{fontWeight:"bold",textAlign:"center",fontSize:15}]}>{item.testClass}</Text>
<Text style={[{textAlign:"center",alignItems:"center",fontSize:15}]}>{item.riskIntensity}</Text>
<Text style={[{textAlign:"center",fontSize:15}]}>
    평가 완료 
  
<Ionicons name={"md-checkmark-sharp"} size={15} color={item.value == false ? "gray":"#0073F0"}/>
  </Text>
</View>
          

            </TouchableOpacity> 
        
           
          
        </View>
      );
    return(<>
    <View style={[{opacity:0.8,margin:10}]}>
     
     <Text style={[safety_main.home_title_b]}>{title}</Text>
     <Text style={[safety_main.home_title_b_s,{marginBottom:20}]}>{subtitle}</Text>

</View>
<Text style={[{fontWeight:"bold",textAlign:"left",marginBottom:10,marginLeft:10}]}>{"위험성 평가 리스트"}</Text>
<ScrollView style={[{opacity:0.8,marginBottom:20}]}>


<FlatList
style={[{marginBottom:200}]}

    data={list_item}
    numColumns={1}
    
    renderItem={renderItem}
    keyExtractor={(item,index) => item}
  />
  </ScrollView>
    </>)
}
export default Grid_list;