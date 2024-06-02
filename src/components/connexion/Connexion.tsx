import { Button, Text, TextInput, View } from "react-native";
import { styles } from "./ConnexionStyle";
import { useDispatch, useSelector } from "react-redux";
import { changeNameAction, loginAction, setUserConnectedId } from "../../store/userActions";
import { RootState } from "../../store/store";
const Connexion = ({ navigation }: any) => {
    const { isSignedIn, username, usersList } = useSelector((state: RootState) => state.userData)
    const dispatch = useDispatch();
    return (
        <View>
            {isSignedIn ? <Text style={styles.text}>Connecte:Welcome to ChatApp</Text> : <Text style={styles.text}>You're Disconnected</Text>}
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Username..."
                    value={username}
                    onChangeText={(txt) => dispatch(changeNameAction(txt))}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Reset" />
                    </View>
                    <View style={styles.button}>
                        <Button title="Connexion" onPress={
                            () => username === "" ? <Connexion /> : (navigation.navigate("Users"), dispatch(loginAction()), usersList.map((e) => e.name === username ? dispatch(setUserConnectedId(e.id)) : 0))}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}
export default Connexion;