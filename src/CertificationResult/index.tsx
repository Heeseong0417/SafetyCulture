import React from 'react';
import { Icon, IconButton, List, Text } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';

export default function CertificationResult({ route, navigation }:any) {
  const success = route.params.success;
  const imp_uid = route.params.imp_uid;
  const merchant_uid = route.params.merchant_uid;
  const error_msg = route.params.error_msg;
  const Uri = 'http://10.0.2.2:8080/recive'

const axios_data =(data: any)=>{  
  const Uri = 'http://10.0.2.2:8080/recive'
  const data_test = {
    userId :"testid",
userPassword :"testpassword",
userName :"김철수",
userPhone :"01033333333",
userAddress :"경기도 성남시",
userKakao :"카카오아이디",
userPay :"페이",
startDate :"데이트",
userLevel :"일반",
notice :"없음"
  }
  axios.post(Uri,data_test).then(function (response: { data: { access_token: string; }; }) {

})
 
}  
return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        margin: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
      }}
    >
      {success ? (
        <Icon
          as={FontAwesome}
          name={'check-circle'}
          size={20}
          color={'#52c41a'}
        />
      ) : (
        <Icon
          as={FontAwesome}
          name={'warning'}
          size={20}
          color={'#f5222d'}
        />
      )}
      <Text fontSize={25} fontWeight={'bold'} mb={20}>{`본인인증에 ${
        success ? '성공' : '실패'
      }하였습니다`}</Text>
      <List width={'90%'} mb={50} borderRadius={3}>
        <List.Item>
          <Text w={'40%'}>아임포트 번호</Text>
          <Text w={'60%'}>{imp_uid}</Text>
        </List.Item>
        {success ? (
          <List.Item>
            <Text w={'40%'}>주문번호</Text>
            <Text w={'60%'}>{merchant_uid}</Text>
          </List.Item>
        ) : (
          <List.Item>
            <Text w={'40%'}>에러메시지</Text>
            <Text w={'60%'}>{error_msg}</Text>
          </List.Item>
        )}
      </List>
      <IconButton
        icon={<Icon as={FontAwesome} name={'arrow-left'} size={20} />}
        /* @ts-ignore */
        
        onPress={() => 
  {        console.log(route.params)

          navigation.reset({
            routes: [{
                name: 'Start_user',
                 
              }]
          })}
        }
      >
        <Text>돌아가기</Text>
      </IconButton>
    </SafeAreaView>
  );
}
