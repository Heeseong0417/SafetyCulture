import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { safety_main } from "../../style/Styles";
import { Table, Row, Rows } from 'react-native-table-component';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
const Grid_table =()=>{
const table ={
    tableHead: ['', '날짜', '여부', '구역'],
    tableData: [
      ['1', '2', '3', '4'],
      ['a', 'b', 'c', 'd'],
      ['1', '2', '3', '456\n789'],
      ['a', 'b', 'c', 'd']
    ]
  }
  const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff',opacity:0.8 },
    head: { height: 40, backgroundColor: '#0073F0',padding:5 },
    rows: { height: 40, padding:5,borderBottomWidth:1,borderColor:"#E4DEDE" },
    text_h: { color:"white",fontFamily:"GmarketSansTTFMedium",textAlign:"center" },
    text_r:{fontFamily:"GmarketSansTTFMedium",textAlign:"center"}
  });
    return(
        <>
        <ScrollView>
<TouchableOpacity></TouchableOpacity>
        
        <View style={[{flex:1,margin:10,opacity:0.8}]}>
        <Text style={[safety_main.home_title_b]}>{"결과 조회"}</Text>
        <Table borderStyle={{borderColor: 'gray'}}>
        <TouchableOpacity>
          <Row data={table.tableHead} style={styles.head} textStyle={styles.text_h}/>
          </TouchableOpacity>
          {table.tableData.map((item:any,index:any)=>(<>
            <TouchableOpacity onPress={()=>{Alert.alert(String(index))}}>
            <Row data={item} style={styles.rows} textStyle={styles.text_r}/>
            </TouchableOpacity>
          </>))}
         
        </Table>


  </View></ScrollView>
        </>
    )
}
export default Grid_table;