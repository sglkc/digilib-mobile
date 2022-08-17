import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SafeAreaView,Text} from 'react-native'
import Login from '@/views/Login'
import Etalase from '../views/Etalase';

const LoginScreen = ()=>{
    return (
        <SafeAreaView>
            <Login></Login>
        </SafeAreaView>
    )
}

const EtalaseScreen = ()=>{
    return (
        <SafeAreaView>
            <Etalase></Etalase>
        </SafeAreaView>
    )
}

const Stack = createNativeStackNavigator();

export const StackNavigator = ()=>{
    return <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Etalase' component={EtalaseScreen } options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={LoginScreen } options={{headerShown:false}}/>
    </Stack.Navigator>
}