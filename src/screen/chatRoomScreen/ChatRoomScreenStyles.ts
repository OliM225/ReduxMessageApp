import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    keyboard: {
        flex: 1,
        paddingBottom: 10,
    },
    flatList: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5,
    },
    input: {
        flex: 1,
        borderWidth: 2,
        borderRadius: 6,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 5,
    },
})
export default styles;