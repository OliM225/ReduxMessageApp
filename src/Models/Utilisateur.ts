type utilisateur = {
    id: number,
    name: string
};
export type room = {
    id: number,
    name: string,
    user1: number,
    user2: number
};
export type messageModel = {
    id: number,
    senderId: number,
    receiverId: number,
    text: string,
    roomId: number,
    date: string,
}
export default utilisateur;