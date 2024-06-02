import { createStackNavigator } from "@react-navigation/stack";
import Connexion from "../components/connexion/Connexion";
import UserListScreen from "../screen/userListScreen/UserListScreen";
import ChatRoomScreen from "../screen/chatRoomScreen/ChatRoomScreen";
const Stack = createStackNavigator();
export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Connexion" component={Connexion} />
      <Stack.Screen name="Users" component={UserListScreen} />
      <Stack.Screen name="Chat" component={ChatRoomScreen} />
    </Stack.Navigator>
  );
}