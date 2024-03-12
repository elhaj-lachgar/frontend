import { Pen } from "lucide-react";
import Conversation from "./Conversation";

function RoomAdminContainer() {
  return (
    <div className="flex flex-col items-center border py-2 px-3 gap-y-5 rounded-xl shadow-2xl ">
      <h1 className="text-xl font-medium text-red-500 mb-5">الغرفة(1)</h1>
      <div className="w-[200px] h-[200px] relative border rounded-lg">
        <img
          className="w-full h-full bg-gray-50 rounded-lg"
          src="/avatar.webp"
        />
        <div className="absolute top-[85%] right-[5%] ">
          <Pen cursor={"pointer"} />
        </div>
      </div>
      <hr className="w-full" />
      <h1 className="text-xl font-medium text-green-500 "> متواجدين في الغرفة</h1>

      <div className="w-full  overflow-auto no-scrollbar h-[200px] px-2 md:px-10 border  rounded-xl">
        <div className="flex flex-col gap-y-1 w-full ">
          {[...Array(10)].map(() => (
            <Conversation />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoomAdminContainer;
