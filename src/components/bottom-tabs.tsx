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
import { AllBreedsScreen } from "../screens/all-breeds/page";

const Tab = createBottomTabNavigator();

const SearchIcon = (props): IconElement => (
  <Icon {...props} name="search-outline" />
);

const HeartIcon = (props): IconElement => (
  <Icon {...props} name="heart-outline" />
);

const EyeIcon = (props): IconElement => <Icon {...props} name="eye-outline" />;

function BottomTabBar() {
  return (
    <Tab.Navigator tabBar={(props) => <BottomTabBarComponent {...props} />}>
      <Tab.Screen
        name="Home"
        component={SearchBreedsScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="All breeds"
        component={AllBreedsScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Favorites"
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
    <BottomNavigationTab icon={EyeIcon} />
    <BottomNavigationTab icon={HeartIcon} />
  </BottomNavigation>
);

const styles = StyleSheet.create({
  bottomNavigation: {
    marginVertical: 3,
  },
});

export { BottomTabBar };
