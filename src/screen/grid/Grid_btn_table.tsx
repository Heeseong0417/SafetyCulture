import { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { List } from "react-native-paper";
import { Table, Row, Rows, TableWrapper, Cell } from 'react-native-table-component';
import { safety_main } from "../../style/Styles";
import Modal from "react-native-modal"
const Grid_btn_table =({title,subtitle,navigation,list_item,user}:any)=>{

  const [isModalVisible, setModalVisible] = useState(false);

  const [SelectItem, setSelectItem] = useState({})

  const toggleModal = (path:any) => {
    setModalVisible(!isModalVisible);
 
  };
  const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#0073F0',padding:5 },
    rows: {flexDirection: 'row', height: 60, padding:5,borderBottomWidth:1,borderColor:"#E4DEDE" },
    text: { margin: 6 },
    row: { flexDirection: 'row'},
    btn: {  backgroundColor: '#308FFF',  borderRadius: 5 ,alignItems:"center",padding:3},
    btnText: { textAlign: 'center', color: '#fff' ,fontFamily:"GmarketSansTTFMedium"},
    text_h: { color:"white",fontFamily:"GmarketSansTTFMedium",textAlign:"center",paddingVertical:5 },
    text_r:{fontFamily:"GmarketSansTTFMedium",textAlign:"center"}
  });

  const _alertIndex=(index: number)=> {
    Alert.alert(`This is row ${index + 1}`);
  }
  const element = (data: any, index: any) => (
    <TouchableOpacity onPress={() => navigation.navigate('Test_Select',{name:user,data:data})}>
      <View style={styles.btn}> 
        <Text style={styles.btnText}>평가하기 </Text>
      </View>
    </TouchableOpacity>
  );

  const Modal_print = ()=>{


    return(<>
       <View style={[{ flex: 1,backgroundColor:"white",borderRadius:10,padding:10 },safety_main.shadow]}>
       
       <TouchableOpacity style={[{marginLeft:10,marginTop:10}]} onPress={()=>toggleModal('1')}><Text style={[safety_main.home_button_b,{textAlign:"left"}]}>X</Text></TouchableOpacity>
     
       <Text style={[safety_main.home_title_b,{textAlign:"center",opacity:0.8,margin:0}]}>평가하기</Text>
       <Text>{}</Text>
                <ScrollView>
                    
                    
                    </ScrollView> 
          
          
        </View>
    </>)
  }
 
  return (
    <ScrollView style={[{margin:10,opacity:0.8}]}>

 {/**<Modal isVisible={isModalVisible}>
       <Modal_print />
  </Modal>**/}
        <Text style={[safety_main.home_title_b]}>{title}</Text>
        <Text style={[safety_main.home_title_b_s,{marginBottom:40}]}>{subtitle}</Text>
        <List.AccordionGroup>
      <Table  borderStyle={{borderColor: 'transparent'}}>
        <Row data={list_item.tableHead}  style={styles.head} textStyle={styles.text_h}/>
        
        {
          list_item.tableData.map((rowData:any, index:any) => (
            
            <TableWrapper  key={index} style={styles.rows}>
                
              {
                rowData.map((cellData:any, cellIndex:any) => (
                  <Cell   key={cellIndex} data={cellIndex === 2 ? element(cellData, index):  cellData} textStyle={styles.text_r}/>
                ))
              }
            </TableWrapper>
          ))
        }
      </Table>
      </List.AccordionGroup>
    </ScrollView>
  )
}
export default Grid_btn_table