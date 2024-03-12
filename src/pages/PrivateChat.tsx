import { Home, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import MessageConverstion from "../components/MessageConverstion";
import { useNavigate } from "react-router-dom";
import EmojiModule from "../components/EmojiModule";

function PrivateChat() {
  const [message, setmessage] = useState("");
  const lastMessage = useRef<HTMLInputElement>(null);
  const router = useNavigate();

  useEffect(() => {
    lastMessage.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <main className=" flex h-screen w-screen">
      <div className="flex  border bg-white flex-col w-full   text-gray-400 ">
        <>
          <div className="bg-gray-500 w-full p-3 flex justify-between items-center border-gray-400">
            <span className="font-bold flex gap-x-2 ">
              <span className="text-gray-300">To</span> : {"elhaj lachgar"}
            </span>
            <Home
              className="text-white cursor-pointer"
              onClick={() => router("/")}
            />
          </div>
          <div className="w-full px-5 py-5 overflow-auto  no-scrollbar">
            {[...Array(12)].map((_, i) => (
              <div ref={lastMessage} key={i.toString()}>
                {" "}
                <MessageConverstion />
              </div>
            ))}
          </div>
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
        </>
      </div>
    </main>
  );
}

export default PrivateChat;
