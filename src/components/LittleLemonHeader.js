import * as React from "react";
import { View, Text } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View
      style={{
        backgroundColor: "#F4CE14",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          padding: 40,
          fontSize: 30,
          color: "black",
          textAlign: "center",
        }}
      >
        Welcome to Little Lemon
      </Text>
    </View>
  );
}
