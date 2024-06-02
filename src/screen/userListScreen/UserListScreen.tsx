import React, { useEffect } from "react";
import styles from "./UserListStyles";
import { View, Text, Button, FlatList, ListRenderItem } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction, getUserUsers, setUserReceiverId, setChosenRoomId } from "../../store/userActions";
import ChatDesign from "../../components/chatDesign/ChatDesign";
import { RootState } from "../../store/store";
import utilisateur from "../../Models/Utilisateur";

const UserListScreen = ({ navigation }: any) => {
    const isSignedIn = useSelector((state: RootState) => state.userData.isSignedIn)
    const { usersList } = useSelector((state: RootState) => state.userData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserUsers())
    }, []);
    const renderItem: ListRenderItem<utilisateur> = ({ item }) => {
        return <ChatDesign Children={item.name} onPress={() => (dispatch(setUserReceiverId(item.id)), dispatch(setChosenRoomId(item.id)), navigation.navigate("Chat"))} />
    }
    return (
        <View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>ChatRoom !!!</Text>
            </View>
            <FlatList
                data={usersList}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
            />
            <Button title="Log Out" onPress={() => (navigation.navigate("Connexion"), dispatch(logoutAction()))} />
            {isSignedIn ? <Text>Connected</Text> : <Text>Logout out Successfully</Text>}
        </View>
    )
}
export default UserListScreen;