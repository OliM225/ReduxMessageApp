import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import styles from "./ChatDesignStyles";
const ChatDesign = ({ Children,onPress }) => {
    return (
        <View style={styles.pressable}>
            <Pressable style={styles.pressableChat} onPress={onPress} >
                <Image source={require("../../assets/user.jpg")} style={styles.image} resizeMode="cover" />
                <Text style={styles.chat}>{Children}</Text>
            </Pressable>
        </View>
)}
export default ChatDesign;

