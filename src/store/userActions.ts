import axios from "axios"
import { LOGIN, LOGOUT, CHANGE_NAME,
GET_USER_BOOKS, CHANGE_CHAT_ROOM_USER,
GET_USER_USERS, GET_MESSAGES, 
INSERT_NEW_MESSAGE,
SET_USER_CONNECTED_ID,
SET_RECEIVER_ID,
GET_USER_ROOMS,
SET_CHOSEN_ROOM_ID} from "./types"
import { Dispatch } from "redux"
import utilisateur, { messageModel, room } from "../Models/Utilisateur"
import { chatRooms, usersData, usersMessages } from "../data/usersData"

export const loginAction = () => {
    return {
        type: LOGIN,
        payload: true
    }
}

export const logoutAction = () => {
    return {
        type: LOGOUT,
        payload: false
    }
}

export const changeNameAction = (username: string) => {
    return {
        type: CHANGE_NAME,
        payload: username,
    }
}

export const changeChatRoomUser = (name:string) =>{
    return {
        type: CHANGE_CHAT_ROOM_USER,
        payload:name
    }
}

export const getUsersBooks = () => {
    return async (dispatch: Dispatch) => {
        try {
            const {data} = await axios.get("https://649ea51c245f077f3e9cb5bc.mockapi.io/books");

            dispatch({
                type: GET_USER_BOOKS,
                payload: data
            })
        } catch (error) {
            console.log(error)
        }

    }
}

export const getUserUsers = () => {
    return (dispatch:Dispatch) =>{
        try{
            const data:utilisateur[] = usersData
            dispatch({
                type:GET_USER_USERS,
                payload:data

            })
        }catch(err){

        }
    }
}

export const getMessages = () => {
    return (dispatch:Dispatch) =>{
        try{
            const data:messageModel[] = usersMessages
            dispatch({
                type:GET_MESSAGES,
                payload:data

            })
        }catch(err){

        }
    }
}

export const getChatRooms = () => {
    return (dispatch:Dispatch) =>{
        try{
            const data:room[] = chatRooms
            dispatch({
                type:GET_USER_ROOMS,
                payload:data

            })
        }catch(err){

        }
    }
}

export const insertNewMessage = (msg:messageModel[]) =>{
    return {
        type:INSERT_NEW_MESSAGE,
        payload:msg,
    }
}

export const setUserConnectedId = (id:number) => {
    return {
        type: SET_USER_CONNECTED_ID,
        payload: id,
    }
}
export const setUserReceiverId = (id:number) => {
    return {
        type: SET_RECEIVER_ID,
        payload: id,
    }
}
export const setChosenRoomId = (id:number) => {
    return {
        type: SET_CHOSEN_ROOM_ID,
        payload: id,
    }
}