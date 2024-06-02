import React from "react";
import {Text, View } from "react-native";
import styles from "./MessageStyle";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
const Message = ({children,id})=>{
    const { userConnectedId } = useSelector((state: RootState) => state.userData)
    return(
        <View style={{ alignSelf: id !== userConnectedId? "flex-start":"flex-end"}}>
            <Text style={[styles.content, {backgroundColor:id !==userConnectedId ? "lightgrey":"orange"}]}>{children}</Text>
            <Text style={styles.text}>
                Hello
            </Text>
        </View>
)}
export default Message;

