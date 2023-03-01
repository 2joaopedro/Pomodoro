import {createNativeStackNavigator} from '@react-navigation/native-stack';

import welcome from './pages/welcome/Index';
import home from './pages/home/Index';
import setting from './pages/setting/Index';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="welcome" component={welcome} options={{headerShown: false, statusBarColor: '#FF5733'}}/>
            <Stack.Screen name="home" component={home}  options={{headerShown: false,statusBarColor: '#FF5733'}}/>
            <Stack.Screen name="setting" component={setting} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}