import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import configureStore from "./src/redux/store/configureStore";

import StackIndex from "./src/stack";
export default function App() {
  const store = configureStore();
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <StackIndex />
        </NavigationContainer>
      </Provider>
    </>
  );
}
