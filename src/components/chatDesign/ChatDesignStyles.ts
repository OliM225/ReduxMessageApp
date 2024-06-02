import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    pressable: {
        flexDirection: "row",
        borderBottomColor: "black",
        borderBottomWidth: 2,
        backgroundColor: "lightgrey",
    },
    pressableChat: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginVertical: 5,
    },
    chat: {
        margin: 20,
        fontWeight: "bold",
        fontSize: 20,
        color: "black",
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 90
    },

})
export default styles;