import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry, Text } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { DefaultLayout } from "./src/layout";
import { SearchBreedsScreen } from "./src/screens/search-breeds";

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <DefaultLayout>
        <SearchBreedsScreen />
      </DefaultLayout>
    </ApplicationProvider>
  </>
);
