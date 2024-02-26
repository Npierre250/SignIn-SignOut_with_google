import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, Text, View } from 'react-native';
import { DrawerItemList } from '@react-navigation/drawer';
import { FontAwesome5, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import Calculator from './Calculator';
import Home from './Home';
import Contact from './Contact';
import Login from './Login';
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <SimpleLineIcons name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Calculator"
                component={Calculator}
                options={{
                    tabBarLabel: 'Calculator',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="calculator" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Contact"
                component={Contact}
                options={{
                    tabBarLabel: 'Contact',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="message-alert-outline" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

function DrawerContent(props) {
    return (
        <SafeAreaView>
            <View style={{ height: 100, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={require('../assets/user.jpeg')}
                    style={{ marginTop: 15, height: 50, width: 50, borderRadius: 100 }}
                />
                <Text style={{ fontSize: 15, marginVertical: 6, fontWeight: 'bold', color: '#808088' }}>
                    Ndagijima Pierre
                </Text>
            </View>
            <DrawerItemList {...props} />
        </SafeAreaView>
    );
}

function DrawerNav() {
    return (
        <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}
            drawerStyle={{ width: '60%', backgroundColor: '#lightgreen' }}
            screenOptions={{
                headerStyle: { backgroundColor: 'blue' },
                headerTintColor: '#fff',
                drawerActiveTintColor: 'blue',
                drawerLabelStyle: { color: '#111' },
            }}
        >
            <Drawer.Screen
                name="Home"
                options={{
                    drawerLabel: 'Home',
                    drawerIcon: () => <SimpleLineIcons name="home" size={20} color="#808080" />,
                }}
                component={TabNavigator}
            />
            <Drawer.Screen
                name="Calculator"
                options={{
                    drawerLabel: 'Calculator',
                    drawerIcon: () => <FontAwesome5 name="calculator" size={20} color="#808080" />,
                }}
                component={Calculator}
            />
            <Drawer.Screen
                name="Contact"
                options={{
                    drawerLabel: 'Contacts Us',
                    drawerIcon: () => (
                        <MaterialCommunityIcons name="message-alert-outline" size={22} color="#808080" />
                    ),
                }}
                component={Contact}
            />

            <Drawer.Screen
                name="Logout"
                options={{
                    drawerLabel: 'logout',
                    drawerIcon: () => (
                        <MaterialCommunityIcons name="logout" size={22} color="#808080" />
                    ),
                }}
                component={Login}
            />
        </Drawer.Navigator>
    );
}

export default DrawerNav;
