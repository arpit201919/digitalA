import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store/store';
import ListScreen from './src/ListScreen/list.screen';
import DetailsScreen from './src/DetailScreen/details.screen';
import AddDataScreen from './src/AddDataToList/addData.screen';


export type PrimaryParamList = {
  ListScreen: undefined
  Details: undefined
  AddData: undefined
}

const Stack = createNativeStackNavigator<PrimaryParamList>();

const PrimaryNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={"ListScreen"} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ListScreen" component={ListScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="AddData" component={AddDataScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Provider
        store={store}
      >
        <PersistGate loading={null} persistor={persistor}>
          <PrimaryNavigator />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  )
}

export default App;