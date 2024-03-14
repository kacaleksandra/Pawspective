import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { BottomTabBar } from "./src/components/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FavoriteBreedsProvider } from "./src/contexts/FavoriteBreedsContext";
import { DetailsScreen } from "./src/screens/details";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <FavoriteBreedsProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Main"
              component={BottomTabBar}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoriteBreedsProvider>
    </ApplicationProvider>
  </>
);
