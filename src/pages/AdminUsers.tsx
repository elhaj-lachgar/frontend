import { Search } from "lucide-react";
import Conversation from "../components/Conversation";

function AdminUsers() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex gap-x-1 items-center bg-gray-100 rounded-lg px-3 w-[300px] lg:w-[500px] py-2 mx-auto mt-5">
        <div className="w-[40px] h-[40px] rounded-full bg-gray-50  border flex items-center justify-center hover:bg-gray-100">
          <Search className="cursor-pointer  text-blue-500  " />
        </div>
        <input
          className="h-8 border-blue-500 border-[2px]  rounded-md  outline-blue-700 w-[calc(100%-40px)]"
          placeholder="البحث عن المستخدم.."
        />
      </div>
      {[...Array(10)].map(() => (
        <Conversation />
      ))}
    </div>
  );
}

export default AdminUsers;
