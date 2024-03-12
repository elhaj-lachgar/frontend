
import cn from "classnames";
import { Avatar } from "@chakra-ui/react";

function MessageConverstion() {
 const IsUser = false;
  return (
    <div className={cn("chat", IsUser ? "chat-start" : "chat-end")}>
      <div className="chat-image avatar">
      <Avatar/>
      </div>
      <div
        className={cn(
          "chat-bubble text-white",
          IsUser ? "bg-blue-400" : "bg-gray-400",
        )}
      >
        السلام عليكم
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-gray-300">
        { "18:30:20"/* {data.createdAt.split("T")[1].split(".")[0]} */}
      </div>
    </div>
  );
}

export default MessageConverstion;
