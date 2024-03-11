import React from "react";
import { StyleSheet } from "react-native";
import {
  BottomNavigation,
  BottomNavigationProps,
  BottomNavigationTab,
  Icon,
  IconElement,
} from "@ui-kitten/components";

const SearchIcon = (props): IconElement => (
  <Icon {...props} name="search-outline" />
);

const HeartIcon = (props): IconElement => (
  <Icon {...props} name="heart-outline" />
);

const SettingsIcon = (props): IconElement => (
  <Icon {...props} name="settings-outline" />
);

const useBottomNavigationState = (initialState = 0): BottomNavigationProps => {
  const [selectedIndex, setSelectedIndex] = React.useState(initialState);
  return { selectedIndex, onSelect: setSelectedIndex };
};

export const BottomNavigationAccessoriesShowcase = (): React.ReactElement => {
  const topState = useBottomNavigationState();
  const bottomState = useBottomNavigationState();

  return (
    <>
      <BottomNavigation style={styles.bottomNavigation} {...bottomState}>
        <BottomNavigationTab icon={SearchIcon} />
        <BottomNavigationTab icon={HeartIcon} />
        {/* <BottomNavigationTab icon={SettingsIcon} /> */}
      </BottomNavigation>
    </>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    marginVertical: 8,
  },
});
