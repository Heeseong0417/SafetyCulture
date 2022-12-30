import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { grany_home, grany_start, safety_main } from "../../style/Styles";
import { Table, Row, Rows } from 'react-native-table-component';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Button, Card, List, Paragraph, Title } from 'react-native-paper';
import Resultselect from "../main/Result_select";
const Grid_table =({title,subtitle,navigation}:any)=>{
const table ={
    tableHead: ['NO.', '유형', '날짜', '구역'],
    tableData: [
      ['1', '떨어짐', '2022-12-29 11:15:30', '밸리언트데이터'],
      ['a', 'b', 'c', 'd'],
      ['1', '2', '3', '456\n789'],
      ['a', 'b', 'c', 'd']
    ]
  }
  const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff',opacity:0.8 },
    head: { height: 40, backgroundColor: '#0073F0',padding:5 },
    rows: { height: 60, padding:5,borderBottomWidth:1,borderColor:"#E4DEDE" },
    text_h: { color:"white",fontFamily:"GmarketSansTTFMedium",textAlign:"center" },
    text_r:{fontFamily:"GmarketSansTTFMedium",textAlign:"center"}
  });
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
    return(
        <>


        
<ScrollView style={[{margin:10,opacity:0.8}]}>
<View>
     
        <Text style={[safety_main.home_title_b]}>{title}</Text>
        <Text style={[safety_main.home_title_b_s,{marginBottom:40}]}>{subtitle}</Text>
 
</View>


       
        <Table borderStyle={{borderColor: 'gray',flex:1}}>
        
          <Row data={table.tableHead}flexArr={[0.5,1, 2, 1.5]}  style={styles.head} textStyle={styles.text_h}/>
          
          {table.tableData.map((item:any,index:any)=>(<>
            <TouchableOpacity onPress={()=>{navigation.navigate("Resultselect",{data:"1"})}}>
            <Row data={item} flexArr={[0.5, 1, 2, 1.5]} style={styles.rows} textStyle={styles.text_r}/>
            </TouchableOpacity>
          </>))}
         
        </Table>


  </ScrollView>
        </>
    )
}
export default Grid_table;