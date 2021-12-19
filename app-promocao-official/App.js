import React, { useState, useEffect } from "react";
import {
  View,
  keyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
  Keyboard,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./Screens/Login";
import Home from "./Screens/Home";
import TelaCadastro from "./Screens/TelaCadastro";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="TelaCadastro" component={TelaCadastro} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
