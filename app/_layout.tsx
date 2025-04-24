import { useFonts } from 'expo-font';
import {  Tabs } from 'expo-router';
import 'react-native-reanimated';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  



  return (
    <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            href: null
          }}
          />

        <Tabs.Screen
          name="(tabs)/Character/index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" size={24} color="black"  />,
            
            
          }}
        />
        <Tabs.Screen
          name="(tabs)/CharacterDetail/[id]"
          options={{
            title: 'Home',
            href: null
          }}
        />
        <Tabs.Screen
          name="(tabs)/Ships/[id]"
          options={{
            title: 'Ships',
            href: null

          }}
        />
        <Tabs.Screen
          name="(tabs)/Movies/[id]"
          options={{
            title: 'Movies',
            href: null
          }}
        />
        <Tabs.Screen
          name="(tabs)/More/index"
          options={{
            title: 'More',
            tabBarIcon: ({ color, size }) => <MaterialIcons name="more-horiz" size={24} color="black" />

          }}
        />
    </Tabs>
  );
}
