import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginHorizontal: 40,
        marginVertical: 50,
        width: "80%",
        borderColor: "lightgray",
        borderWidth: 3,
        height: 150
    },
    textInput: {
        borderWidth: 2,
        borderColor: "lightgray",
        margin: 20,
        padding: 10,
        fontWeight: "bold",
        fontSize: 20,
        borderRadius: 20,
        color: "black"
    },
    text: {
        margin: 50,
        fontWeight: "bold",
        fontSize: 30,
        color: "black",
        textAlign: "center"
    },
    buttonContainer: { flexDirection: "row", },
    button: { flex: 1, margin: 10, }
});
