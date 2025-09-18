import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from 'react';

import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { useAuth } from '@/src/hooks/useAuth';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { isAuthenticated, isLoading } = useAuth();
  const headerShown = useClientOnlyValue(false, true);

  // Debug: Log authentication status
  console.log('TabLayout - isAuthenticated:', isAuthenticated, 'isLoading:', isLoading);

  // Afficher un écran de chargement pendant la vérification de l'auth
  if (isLoading) {
    return null; // ou un écran de chargement
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: headerShown,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Accueil',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      
      <Tabs.Screen
        name="profile"
        options={{
          title: isAuthenticated ? 'Profil' : 'Login',
          tabBarIcon: ({ color }) => <TabBarIcon name={isAuthenticated ? "user" : "sign-in"} color={color} />,
        }}
      />
      
      <Tabs.Screen
        name="signup"
        options={{
          href: isAuthenticated ? null : '/signup',
          title: 'Signup',
          tabBarIcon: ({ color }) => <TabBarIcon name="user-plus" color={color} />,
        }}
      />
    </Tabs>
  );
}
