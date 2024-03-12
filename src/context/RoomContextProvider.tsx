import React, { useState } from "react";
import { RoomContext } from "./RoomContext";

function RoomContextProvider({ children }: { children: React.ReactNode }) {
  const [room, setRoom] = useState<any>(null);
  return (
    <RoomContext.Provider value={{ setRoom, room }}>
      {children}
    </RoomContext.Provider>
  );
}

export default RoomContextProvider;
