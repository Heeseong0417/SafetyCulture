import { Dimensions, Easing } from "react-native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import Safety_main from "../main/Safety_main";
import TestScreen from "../main/TestScreen";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import User from "../main/User";
import Fall from "../main/Fall";
const { width,height } = Dimensions.get('window');
const HomeNavigation =({route,navigation}:any)=>{






const Stack = createStackNavigator();
console.log("lets home! :",route)
    return(<>

    <Stack.Navigator initialRouteName="test"
        screenOptions={{ headerShown: false}} >
        
        <Stack.Screen   name='Safety_main' component={Safety_main} initialParams={{data: route.params.data}}
           options={() => ({
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled: false,
         
          })}

        />

        <Stack.Screen  name='result' component={TestScreen} initialParams={{data: route.params.data}}
          options={() => ({
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled: false,
         
          })}

        />

        <Stack.Screen  name='test' component={TestScreen} initialParams={{data: route.params.data}}
          options={() => ({
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled: false,
         
          })}
         

        />
 <Stack.Screen  name='User' component={User} initialParams={{data: route.params.data.navigate}}
          options={() => ({
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled: false,
         
          })}/>
          <Stack.Screen  name='fall' component={Fall} initialParams={{data: route.params.data.navigate}}
          options={() => ({
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled: false,
         
          })}/>
    </Stack.Navigator>

    </>)
}
export default HomeNavigation;