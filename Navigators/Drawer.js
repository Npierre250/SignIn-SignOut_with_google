import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Calculator from '../screens/Calculator';
import Contact from '../screens/Contact';
import DrawerNav from '../screens/DrawerNav'; // Assuming you have a DrawerNavigator component
import Home from '../screens/Home';

// Screen Names
const HomeName = 'Home';
const ContactName = 'Contact';
const CalculatorName = 'Calculator';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName={Home}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;
                    if (rn === HomeName) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (rn === CalculatorName) {
                        iconName = focused ? 'list' : 'list-outline';
                    } else if (rn === ContactName) {
                        iconName = focused ? 'person' : 'person-outline';
                    }
                    return <Ionicons name={iconName} color={color} size={size} />;
                },
                tabBarLabel: () => null, // Hide component name at the top
            })}
            tabBarOptions={{
                style: { borderTopWidth: 0 }, // Hide top border
            }}
        >
            <Tab.Screen name={HomeName} component={Home} />
            <Tab.Screen name={CalculatorName} component={Calculator} />
            <Tab.Screen name={ContactName} component={Contact} />
        </Tab.Navigator>
    );
};


const Helper = () => {
    return (
        
            <Stack.Navigator>
                <>
                    <Stack.Screen name="Main" component={DrawerNav} options={{ headerShown: false }} />
                    <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
                </>
            </Stack.Navigator>
       
    );
}
export default Helper;
