import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SearchBreedsScreen } from "../screens/search-breeds";
import { FavouritesScreen } from "../screens/favourites";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  IconElement,
} from "@ui-kitten/components";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

const SearchIcon = (props): IconElement => (
  <Icon {...props} name="search-outline" />
);

const HeartIcon = (props): IconElement => (
  <Icon {...props} name="heart-outline" />
);

function BottomTabBar() {
  return (
    <Tab.Navigator tabBar={(props) => <BottomTabBarComponent {...props} />}>
      <Tab.Screen
        name="Home"
        component={SearchBreedsScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Settings"
        component={FavouritesScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const BottomTabBarComponent = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
    style={styles.bottomNavigation}
  >
    <BottomNavigationTab icon={SearchIcon} />
    <BottomNavigationTab icon={HeartIcon} />
  </BottomNavigation>
);

const styles = StyleSheet.create({
  bottomNavigation: {
    marginVertical: 8,
  },
});

export { BottomTabBar };
