import * as React from "react";
import { View, Text } from "react-native";
import {
  LittleLemonHeader,
  LittleLemonFooter,
  WelcomeScreen,
} from "../../components";
const HomeScreen = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "#495E57",
        }}
      >
        <LittleLemonHeader />
        <WelcomeScreen />
      </View>
      <View style={{ backgroundColor: "#495E57" }}>
        <LittleLemonFooter />
      </View>
    </>
  );
};
export default HomeScreen;
