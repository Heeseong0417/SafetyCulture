import React from "react"
import {FlatList, Text,View} from "react-native"
import { grany_home } from "../../style/Styles"

const Grid_1row =({list_item}:any)=>{
    const renderItem = ({ item }:any) => (
        <View
        style={[{
          flex:1,
          flexDirection:'column',
          margin:10
        }]}>
           {item.name =="다음 검진"? (<View style={[grany_home.main_list_item2]}><Text style={[grany_home.div_text]}>{item.value[0]}</Text><Text style={[]}>{item.value[1]}</Text></View>):
           (<View style={[grany_home.main_list_item2]}><Text style={[grany_home.extra_bold]}>{item.value}</Text></View>)}
           <View style={[grany_home.list_view]}><Text style={[grany_home.list_item_title]}>{item.name}</Text></View> 

        </View>
      );


    return(<>
    <View style={[{flex:1}]}>
        <View style={[grany_home.list_view]}>
    
        
     <FlatList
     contentContainerStyle={[grany_home.main_list_item1]}
     ListHeaderComponent={
        <View style={{margin:5}}>
          
          <Text style={[grany_home.list_title]}>건강상태 종합</Text>
        </View>
      }
            data={list_item}
            numColumns={4}
            renderItem={renderItem}
            keyExtractor={item => item.name}
          /></View></View>
        </>)
}

export default Grid_1row