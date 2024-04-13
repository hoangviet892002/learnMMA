import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, LoginScreens } from "../screens";
import { useSelector } from "react-redux";
const StackIndex = () => {
  const Stack = createNativeStackNavigator();
  const user = useSelector((state) => state.user);
  return (
    <Stack.Navigator initialRouteName="Login">
      {user.isLoggedIn ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreens} />
        </>
      )}
    </Stack.Navigator>
  );
};
export default StackIndex;
