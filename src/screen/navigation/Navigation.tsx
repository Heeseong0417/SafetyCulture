import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import BottomTabNav from './BottomTabNav';
import { Alert, Easing } from 'react-native';
import { CardStyleInterpolators, TransitionSpecs } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const Stack = createSharedElementStackNavigator();


export default function Navigation({navigation}:any) {
  return (
   
   
      <Stack.Navigator initialRouteName='HomeScreen'
    screenOptions={{ headerShown: false,

    }}
    
    
      >
        <Stack.Screen  name='HomeScreen' component={HomeScreen}
        sharedElements={(route: any) => {
          const { item } = route.params;
          return [{ id: `item_${item.id}_image`, animation: "move" }];
        }}
         />
        <Stack.Screen name='DetailScreen' component={DetailScreen}
        sharedElements={(route: any) => {
          const { item }  = route.params;
          console.log(JSON.stringify(item))
          return [{ id: `item_${item.id}_image`, animation: "move" }];
        }}
   
        />
      </Stack.Navigator>
   
  );
}
/**
 *     options={() => ({
            gestureEnabled: false,
            transitionSpec: {
              open: {
                animation: 'timing',
                config: { duration: 500, easing: Easing.inOut(Easing.ease) },
              },
              close: {
                animation: 'timing',
                config: { duration: 500, easing: Easing.inOut(Easing.ease) },
              },
            },
            cardStyleInterpolator: ({ current: { progress } }) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
          })}

          슬라이드 애니메이션
          options={() => ({
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: false,
       
        })}
 * 
 */