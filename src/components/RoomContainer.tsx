import { Mic } from "lucide-react";
import { useRoomContext } from "../context/RoomContext";
function RoomContainer({ id }: { id: number }) {

  const { setRoom } = useRoomContext();
  return (
    <div
      className="flex justify-between px-3 rounded-md items-center hover:bg-blue-400 cursor-pointer py-2"
      onClick={() => {
        setRoom(id);
      }}
    >
      <div className="flex gap-y-1 ">
        <img src="/avatar.webp" className="w-9 h-9 border" />
        <p>إسم الغرفة</p>
      </div>
      <div className="text-red-500 flex items-center gap-x-1">
        <Mic />
        (1)
      </div>
    </div>
  );
}

export default RoomContainer;
