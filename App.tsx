import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import LoginScreen from "./src/screens/LoginScreen";
import ProductListScreen from "./src/screens/ProductListScreen";
import ProductDetailScreen from "./src/screens/ProductDetailScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
export type RootStackParamList = {
  Login: undefined;
  MainTabs: undefined;
  ProductDetail: { productId: number };
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();
function TabIcon({ name, color }: { name: string; color: string }) {
  return (
    <MaterialIcons
      name={name === "home" ? "home" : "settings"}
      size={24}
      color={color}
    />
  );
}

function MainTabs({ onLogout }: { onLogout: () => void }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#1565C0",
        tabBarInactiveTintColor: "#aaa",
      }}
    >
      <Tab.Screen
        name="Início"
        component={ProductListScreen}
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <TabIcon name="home" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Configurações"
        children={() => <SettingsScreen onLogout={onLogout} />}
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <TabIcon name="settings" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="MainTabs">
              {() => <MainTabs onLogout={() => setIsLoggedIn(false)} />}
            </Stack.Screen>
            <Stack.Screen
              name="ProductDetail"
              component={ProductDetailScreen}
            />
          </>
        ) : (
          <Stack.Screen name="Login">
            {() => <LoginScreen onLogin={() => setIsLoggedIn(true)} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
