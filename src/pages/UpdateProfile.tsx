import { Button } from "@chakra-ui/react";

function UpdateProfile() {
  return (
    <form className="flex border  w-[80%] md:w-[70%]  mx-auto flex-col px-3 py-2 md:py-4 mt-10 shadow-md h-fit rounded-lg bg-white">
      <h1 className="text-gray-500 text-center text-2xl"> تغير ملف الشخصي</h1>
      <div className="flex flex-col gap-y-1 ">
        <label className="text text-lg text-gray-400">أسم</label>
        <input
          className="h-10 outline-gray-600 border-[2px] rounded-md  border-gray-300"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-y-1 ">
        <label className="text text-lg text-gray-400">بريد إلكتروني</label>
        <input
          className="h-10 outline-gray-600 border-[2px] rounded-md  border-gray-300"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-y-1 ">
        <label className="text text-lg text-gray-400">صورة</label>
        <input
          className="h-10 outline-gray-600 border-[2px] rounded-md  border-gray-300"
          type="file"
        />
      </div>

      <Button marginTop={"10px"} >
        حفظ
      </Button>
    </form>
  );
}

export default UpdateProfile;
