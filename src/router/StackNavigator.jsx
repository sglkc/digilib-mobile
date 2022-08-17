import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SafeAreaView,Text, View, StyleSheet, ImageBackground} from 'react-native'
import Login from '@/views/Login'
import Etalase from '../views/Etalase';

const style = StyleSheet.create({
    safecontainer:{
        flex:1
    },
    container: {
        paddingHorizontal: 32,
        paddingVertical: 64,
        backgroundColor: '#fff',
      },
  });
  

const LoginScreen = ()=>{
    return (
        <SafeAreaView style={style.safecontainer}>
            <View style={style.container}>
                <Login></Login>
            </View>
        </SafeAreaView>
    )
}

const EtalaseScreen = ()=>{
    return (
        <SafeAreaView style={style.safecontainer}>
            <ImageBackground source={require('@/assets/BG_ORANGE.png')} style={{width: '100%', height: '100%'}}>
                <Etalase></Etalase>
            </ImageBackground>
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