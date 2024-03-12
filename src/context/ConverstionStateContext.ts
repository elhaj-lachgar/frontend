import { createContext , useContext } from "react";



type TConversationState = {
    state : boolean;
    setState : (state : boolean) => void;
}

const initialState :TConversationState = {
    state : false,
    setState : (state : boolean) => {console.log(state);},
}

export const ConversationStateContext = createContext<TConversationState>(initialState);

export const useConversationState = () => {
    return useContext(ConversationStateContext);
}