import { View } from "react-native";
import {
  LittleLemonHeader,
  LittleLemonFooter,
  LoginScreen,
} from "../../components";
const LoginScreens = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "#495E57",
        }}
      >
        <LittleLemonHeader />
        <LoginScreen />
      </View>
      <View style={{ backgroundColor: "#495E57" }}>
        <LittleLemonFooter />
      </View>
    </>
  );
};
export default LoginScreens;
