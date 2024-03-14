import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { BottomTabBar } from "./src/components/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FavoriteBreedsProvider } from "./src/contexts/FavoriteBreedsContext";

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <FavoriteBreedsProvider>
        <NavigationContainer>
          <BottomTabBar />
        </NavigationContainer>
      </FavoriteBreedsProvider>
    </ApplicationProvider>
  </>
);
