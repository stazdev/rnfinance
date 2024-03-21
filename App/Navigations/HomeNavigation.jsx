import { createStackNavigator } from "@react-navigation/stack";
import WalletCards from "../Screens/HomeScreen/WalletCards";
import Home from "../Screens/HomeScreen/Home";
import TransactionHistory from "../Screens/HomeScreen/TransactionHistory";

const Stack = createStackNavigator();

function HomeNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="cards" component={WalletCards} />
      <Stack.Screen name="transaction_history" component={TransactionHistory} />
    </Stack.Navigator>
  );
}

export default HomeNavigation;
