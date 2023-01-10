import { Alert, FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { safety_main } from "../../style/Styles";

const Grid_list=({title,subtitle,list_item,navigation}:any)=>{


    const renderItem = ({ item,index }:any) => (
        <View>
 

          <TouchableOpacity style={[{padding:10,backgroundColor:"white"}]} onPress={()=>navigation.navigate("Result_select",{result_data:item})}>
        
          <View style={[{flex:1,flexDirection:"row", borderRadius:10,backgroundColor:"white",margin:10,padding:10,justifyContent:"space-between",alignItems:"center"},safety_main.shadow]}>

<Text style={[{fontWeight:"bold",textAlign:"center"}]}>{item.testClass}</Text>

<Text style={[]}>
    평가 완료 
<Ionicons name={"md-checkmark-sharp"} size={30} color={item.value == false ? "gray":"green"}/>
  </Text>
</View>
          
            <View style={{justifyContent:"space-around",marginLeft:20}}>
    
            <Text style={[safety_main.home_button_w,{color:"black"}]}>
            {item.riskIntensity}
            </Text>
           <Text style={[safety_main.home_button_b,{}]}> {item.date}</Text></View>
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