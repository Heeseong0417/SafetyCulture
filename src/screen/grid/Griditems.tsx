import React, { useState } from "react"
import {FlatList, Text,TouchableOpacity,View} from "react-native"
import { grany_home } from "../../style/Styles";

const Griditems=({list_item}:any)=>{
    const [containerWidth, setContainerWidth] = useState(0);
    const renderItem = ({ item }:any) => (
        <View
        style={{
          flex:1,
          flexDirection:'column',
          margin:10
        }}>
           <View style={[grany_home.main_list_item1]}><Text style={[grany_home.list_item_title]}>{item.name}</Text></View> 
           {item.name =="혈당"||item.name =="체온"||item.name =="체중"?(
           <View style={[grany_home.list_view]}><Text style={[grany_home.extra_bold_g]}>{item.value}<Text style={[grany_home.unit_text]}>{item.unit}</Text></Text></View>):
          item.name =="혈압"||item.name =="남은 검진"? (<View style={[grany_home.list_view]}><Text style={[grany_home.extra_bold_g]}><Text style={[grany_home.extra_bold_y]}>{item.value[0]}</Text><Text style={[{color:"black"}]}>/</Text>{item.value[1]}</Text></View> ):
          (<View style={[grany_home.list_view]}><Text style={[grany_home.extra_bold_g]}>{item.value}</Text></View> )}
        </View>
      );

    return(<>

    <View style={[grany_home.list_view]}>

    
 <FlatList
 contentContainerStyle={[grany_home.main_list_item1]}
 ListHeaderComponent={
    <View >
      
      <Text></Text>
    </View>
  }
        data={list_item}
        numColumns={3}
        
        renderItem={renderItem}
        keyExtractor={item => item.name}
      /></View>
    </>)
}
export default Griditems