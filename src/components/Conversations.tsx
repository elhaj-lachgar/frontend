import { LogOut, Search, Users, User, Video } from "lucide-react";
import Conversation from "./Conversation";
import CreateRoomModule from "./CreateRoomModule";
import { useNavigate } from "react-router-dom";
import { useRoomContext } from "../context/RoomContext";
import { useEffect, useState } from "react";
import RoomContainer from "./RoomContainer";
import cn from "classnames";

function Conversations() {
  const router = useNavigate();
  const { room, setRoom } = useRoomContext();
  const [search, setSearch] = useState(false);
  const LogoutHandler = () => {
    router("/auth/sign-in");
  };

  useEffect(() => {
    console.log("change room");
  }, [room]);

  return (
    <div
      className={cn(
        "lg:flex flex-col gap-y-2 lg:w-[30%] p-3 border-l  h-screen hidden"
      )}
    >
      <div className="flex gap-x-1 items-center ">
        <div className="w-[40px] h-[40px] rounded-full bg-gray-50  border flex items-center justify-center hover:bg-gray-100">
          <Search className="cursor-pointer  text-blue-500  " />
        </div>
        <input className="h-8 border-blue-500 border-[2px]  rounded-md  outline-blue-700 w-[calc(100%-40px)]" />
      </div>
      <hr />
      <div className="h-[100px] w-full">
        <CreateRoomModule />
      </div>
      <hr />
      <div className="w-full overflow-auto no-scrollbar h-full ">
        {!search ? (
          <>
            {room !== null ? (
              <>
                <div className="bg-green-500 w-full text-white px-3 py-1 rounded ">
                  متواجدين في الغرفة
                </div>
                <div className="flex flex-col gap-y-1  ">
                  {[...Array(10)].map(() => (
                    <Conversation />
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col gap-y-1  ">
                  {[...Array(10)].map((_, i) => (
                    <RoomContainer id={i} key={i.toString()} />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <div className="flex flex-col gap-y-1  ">
              {[...Array(10)].map(() => (
                <Conversation />
              ))}
            </div>
          </>
        )}
      </div>

      <hr />
      <div className="flex gap-x-1">
        <button
          className="bg-red-500  py-2 w-10 flex justify-center items-center text-white rounded-full "
          onClick={LogoutHandler}
        >
          <LogOut />
        </button>
        <button
          className="bg-blue-500  py-2 w-10 flex justify-center items-center text-white rounded-full "
          onClick={() => {
            router("/profile/me");
          }}
        >
          <User />
        </button>
        <button
          className="bg-yellow-500  py-2 w-10 flex justify-center items-center text-white rounded-full "
          onClick={() => setSearch(true)}
        >
          <Users />
        </button>
        <button
          className="bg-green-500  py-2 w-10 flex justify-center items-center text-white rounded-full "
          onClick={() => {
            setRoom(null);
            setSearch(false);
          }}
        >
          <Video />
        </button>
      </div>
    </div>
  );
}

export default Conversations;
