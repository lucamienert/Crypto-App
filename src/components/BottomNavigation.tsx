import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { EntypoIcon, FeatherIcon, FontAwesomeIcon } from "../constants/icons"
import {
  View,
  Text
} from "react-native";
import HomeScreen from "../screens/HomeScreen"
import SettingsScreen from "../screens/SettingsScreen"
import CryptoDetailsScreen from "../screens/CryptoDetailsScreen"
import PricesScreen from "../screens/PricesScreen"
import WalletScreen from "../screens/WalletScreen"

const Tab = createBottomTabNavigator()

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      labeled={false}
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: '#fff',
          borderTopColor: 'transparent',
          height: 80,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }
      }}

    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <FontAwesomeIcon name="home" size={30} color="#7F5DF0"></FontAwesomeIcon>
              <Text style={{ color: focused ? '#7F5DF0' : '#000' }}>Home</Text>
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <EntypoIcon name="wallet" size={30} color="#7F5DF0"></EntypoIcon>
              <Text style={{ color: focused ? '#7F5DF0' : '#000' }}>
                Wallet
              </Text>
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={CryptoDetailsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#7F5DF0', borderRadius: 20, padding: 10 }}>
              <FontAwesomeIcon name="exchange" size={30} color="#fff"></FontAwesomeIcon>
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Prices"
        component={PricesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <FontAwesomeIcon name="line-chart" size={30} color="#7F5DF0"></FontAwesomeIcon>
              <Text style={{ color: focused ? '#7F5DF0' : '#000' }}>Prices</Text>
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <FeatherIcon name="settings" size={30} color="#7F5DF0"></FeatherIcon>
              <Text style={{ color: focused ? '#7F5DF0' : '#000' }}>Settings</Text>
            </View>
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomNavigation