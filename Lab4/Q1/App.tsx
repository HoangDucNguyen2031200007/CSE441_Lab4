import { createStackNavigator } from "@react-navigation/stack";
import Contacts from './src/Contact';
import store from "./src/Store";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Provider } from "react-redux";
import ProfileContact from "./src/ProfileContact";
import { NavigationContainer } from '@react-navigation/native';
import "react-native-gesture-handler";
import Favorites from "./src/Favorite";

const Stack = createStackNavigator();

function ContactsScreens() {
  return (
    <Stack.Navigator
      initialRouteName="Contacts"
      screenOptions={
        {
          headerShown: true
        }
      }
    >
      <Stack.Screen name="Contacts" component={Contacts} options={{ title: "Contacts" }} />
      <Stack.Screen name="ProfileContact" component={ProfileContact} options={{ title: "Profile contact" }} />
    </Stack.Navigator>
  );
}

function FavoriteScreen() {
  return (
    <Stack.Navigator
        initialRouteName="Favorites"
        screenOptions={
          {
            headerShown: true,
          }
        }
    >
      <Stack.Screen name="Favorites" component={Favorites} options={{title: "Favorites"}}/>
      <Stack.Screen name="ProfileContact" component={ProfileContact} options={{title: "Profile Contact"}}/>
    </Stack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="ContactsScreens"
      barStyle={{backgroundColor:'blue'}}
      labeled={false}
      activeColor={'lightgray'}
      inactiveColor={'darkgray'}
    >
      <Tab.Screen name="Contacts" component={ContactsScreens}
        options={{
          tabBarIcon: 'format-list-bulleted',
        }}
      />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigation/>
      </NavigationContainer>
    </Provider>
  )
}

export default App;
