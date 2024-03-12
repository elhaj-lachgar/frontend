import { Search } from "lucide-react";
import ValidityItem from "../components/ValidityItem";

function EditValidity() {
  return (
    <div className="flex flex-col w-full items-center mx-auto">
      <div className="flex gap-x-1 items-center bg-gray-100 rounded-lg px-3 w-[300px] lg:w-[500px] py-2 mx-auto mt-5">
        <div className="w-[40px] h-[40px] rounded-full bg-gray-50  border flex items-center justify-center hover:bg-gray-100">
          <Search className="cursor-pointer  text-blue-500  "  />
        </div>
        <input  className="h-8 border-blue-500 border-[2px]  rounded-md  outline-blue-700 w-[calc(100%-40px)]"  placeholder="إبحث عن الصلاحية..."/>
      </div>

      <div className="flex flex-col gap-y-4 w-full mt-10">
        <ValidityItem/>
        <ValidityItem/>
        <ValidityItem/> 
      </div>
    </div>
  );
}

export default EditValidity;
