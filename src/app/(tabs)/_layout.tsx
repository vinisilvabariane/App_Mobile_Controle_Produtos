import { StatusBar } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { colors } from "@/styles/colors";

export default function TabLayout() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.gray[800]} />

      <Tabs
        screenOptions={{
          sceneStyle: {
            backgroundColor: colors.white[600],
          },
          tabBarActiveTintColor: colors.blue[800],
          tabBarInactiveTintColor: colors.white[700],
          headerShown: false,
          tabBarStyle: { backgroundColor: colors.greyOpacity },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="entrada"
          options={{
            title: "Entrada",
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="paste" color={color} />,
          }}
        />
        <Tabs.Screen
          name="saida"
          options={{
            title: "Saídas",
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="send" color={color} />,
          }}
        />
      </Tabs>
    </>
  );
}