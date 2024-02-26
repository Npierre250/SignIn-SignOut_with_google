import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../components/styles';
import Drawer from '../Navigators/Drawer'
import Login from '../screens/Login';
import Signup from '../screens/Signup';

const { primary, tertiary } = colors;
const Stack = createStackNavigator();

const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'transparent'
                    },
                    headerTintColor: tertiary,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeftContainerStyle: {
                        padding: 20
                    }
                }}
                initialRouteName='Login'
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen options={{ headerTintColor: primary }} name="Drawer" component={Drawer} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;