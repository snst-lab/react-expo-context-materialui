import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useCachedResources, useColorScheme } from "@/hooks";
import { GlobalStyle, Navigation } from "@/components";
import { Provider } from "@/store/context";

export default function App(): JSX.Element | null {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>
        <GlobalStyle />
        <SafeAreaProvider>
          <Provider>
            <Navigation colorScheme={colorScheme} />
          </Provider>
          <StatusBar />
        </SafeAreaProvider>
      </>
    );
  }
}
