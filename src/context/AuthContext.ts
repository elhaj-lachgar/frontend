import { createContext, useContext } from "react";
import { TUser } from "../lib/types";

type TAuthContext = {
    user : TUser | null;
    setUser  : (user: TUser) => void;
};


const initialize:TAuthContext = {
    user : null,
    setUser : () => {},
};


export const AuthContext = createContext<TAuthContext>(initialize);


export function useAuthContext () {
    return useContext(AuthContext);
}
