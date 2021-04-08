import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Home from "./screens/Home";
import { AntDesign } from "@expo/vector-icons";
import { Provider } from "react-redux";
import Application from "./screens/ApplicationForm";
import ApplicationList from "./screens/ApplicationList";
import ApplicationDetails from "./components/ApplicationDetails";
import store from "./store";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => ({
              title: "Adhyapanam",
              headerShown: false,
            })}
          />
          <Stack.Screen
            name="Application"
            component={Application}
            options={() => ({
              headerCenter: () => {
                return (
                  <View>
                    <AntDesign name="stepbackward" size={24} color="black" />
                  </View>
                );
              },
              title: "Application Form",
            })}
          />
          <Stack.Screen
            name="ApplicationList"
            component={ApplicationList}
            options={() => ({
              title: "Application List",
            })}
          />
          <Stack.Screen
            name="ApplicationDetails"
            component={ApplicationDetails}
            options={() => ({
              title: "Application Details",
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
