import { Emojis } from "../lib/utils";
import UserModule from "./UserModule";

function Conversation() {
  return (
    <div className="flex justify-between px-3   rounded-lg items-center hover:bg-blue-400 cursor-pointer py-2 border ">
      <div className="flex gap-x-1 items-center">
        <UserModule />
        <span className="text-gray-300 text-lg"> المستخدم</span>
      </div>
      {Emojis[Math.floor(Math.random() * Emojis.length)]}
    </div>
  );
}

export default Conversation;
