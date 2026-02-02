import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';

import "@styles/global.css";
// import { SessionProvider } from '@src/context/auth-context';

SplashScreen.setOptions({
  duration: 400,
  fade: true,
});

export const unstable_settings = {
  initialRouteName: 'index',
  anchor: 'index', // Anchor to the index route
};

export default function RootLayout() {

  return (
    // <SessionProvider>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <Stack
            screenOptions={{
              headerShown: false,            
            }}>
            <Stack.Screen
              name="index"
              options={{
                title: 'Home',
                headerShown: false,
              }}/>
          </Stack>
          <StatusBar style="light" translucent={true} backgroundColor={'transparent'} />
        </SafeAreaProvider>
    // </SessionProvider>
    );
}