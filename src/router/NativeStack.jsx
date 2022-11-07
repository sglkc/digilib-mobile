import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Drawer from './Drawer';
import Login from '@/views/Login';
import Register from '@/views/Register';
import Kebijakan from '@/views/Kebijakan';
import Syarat from '@/views/Syarat';

const Stack = createNativeStackNavigator();

export default function NativeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Syarat" component={Syarat} />
      <Stack.Screen name="Kebijakan" component={Kebijakan} />
      <Stack.Screen name="Home" component={Drawer} />
    </Stack.Navigator>
  );
}
