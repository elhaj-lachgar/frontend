import { createContext, useContext } from "react";


type TRoomContext  = {
    room : any;
    setRoom : (room : any) => void ;
}

const initialState: TRoomContext = {
    room : null ,
    setRoom : ()=>{},
}


export const RoomContext  = createContext<TRoomContext>(initialState);

export const useRoomContext = ()=>{
    return useContext(RoomContext)
}

