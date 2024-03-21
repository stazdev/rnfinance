import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/HomeScreen/Home";
import Notification from "../Screens/NotificationScreen/Notification";
import Profile from "../Screens/ProfileScreen/Profile";
import { Icon } from "react-native-elements";
import Colors from "../Utils/Colors";
import HomeNavigation from "./HomeNavigation";
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
        },
      }}
    >
      <Tab.Screen
        name="homepage"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Icon
                name="wallet"
                size={24}
                color={focused ? Colors.primary : "gray"}
              />
              {focused && <View style={styles.focused_icon} />}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="notification-outlined"
        component={Notification}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Icon
                name="notifications"
                size={24}
                color={focused ? Colors.primary : "gray"}
              />
              {focused && <View style={styles.focused_icon} />}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Icon
                name="person"
                size={24}
                color={focused ? Colors.primary : "gray"}
              />
              {focused && <View style={styles.focused_icon} />}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
const styles = StyleSheet.create({
  focused_icon: {
    height: 4,
    width: 4,
    marginTop: 10,
    borderRadius: 2,
    backgroundColor: "blue",
    alignSelf: "center",
  },
});
