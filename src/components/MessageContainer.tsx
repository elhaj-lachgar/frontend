import { MessagesSquare, Send, AlignRight, Mic, MicOff } from "lucide-react";
import MessageConverstion from "./MessageConverstion";
import { useEffect, useRef, useState } from "react";
import { useConversationState } from "../context/ConverstionStateContext";
import { useRoomContext } from "../context/RoomContext";
import cn from "classnames";
import EmojiModule from "./EmojiModule";

function MessageContainer() {
  const { room } = useRoomContext();
  const { setState, state } = useConversationState();
  const lastMessage = useRef<HTMLInputElement>(null);
  const [message, setmessage] = useState("");
  const [sound, setSound] = useState(false);

  useEffect(() => {
    lastMessage.current?.scrollIntoView({ behavior: "smooth" });
  }, [room]);

  return (
    <div className="flex  flex-col w-full lg:w-[70%] h-screen justify-center text-gray-400 items-center">
      <div
        className={cn(
          "bg-gray-200 w-full  flex justify-between items-center px-5 ",
          room !== null ? "h-[100px]" : "h-[70px]"
        )}
      >
        <AlignRight
          className="cursor-pointer lg:hidden text-gray-700"
          onClick={() => setState(!state)}
        />
        {!room ? (
          "إسم الغرفة"
        ) : (
          <div className="flex gap-x-3 w-full justify-end">{sound ? <Mic  className="text-green-500 cursor-pointer" onClick={()=>setSound(false)}/> : <MicOff className="cursor-pointer" onClick={()=>setSound(true)}/>}</div>
        )}
      </div>
      {room !== null ? (
        <>
          <div className="w-full  px-5 py-5 overflow-auto  no-scrollbar">
            {[...Array(12)].map((_, i) => (
              <div ref={lastMessage} key={i.toString()}>
                {" "}
                <MessageConverstion />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center item-center h-full w-full  text-center">
          <p>👋السلام عليك يا ❄ elhaj </p>
          <p>إختر الغرفة لبدأ محادتات</p>
          <MessagesSquare className="flex w-full justify-center" />
        </div>
      )}
      <div className="p-3 w-full ">
        <label
          className="input input-bordered flex items-center gap-2"
          dir="ltr"
        >
          <Send className="text-gray-500 cursor-pointer" />
          <EmojiModule setmessage={setmessage} message={message} />
          <input
            type="text"
            className="grow"
            value={message}
            onChange={(e) => setmessage(e.currentTarget.value)}
          />
        </label>
      </div>
    </div>
  );
}

export default MessageContainer;
