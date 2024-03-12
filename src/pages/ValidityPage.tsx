import { Button, Checkbox, Input, Select } from "@chakra-ui/react";
import { Emojis, Validity } from "../lib/utils";

function ValidityPage() {
  return (
    <div className="flex flex-col w-full gap-y-2">
      <h1 className="text-gray-700 text-2xl font-semibold text-center">
        الصلاحيات
      </h1>
      <form className="flex flex-col gap-y-3 border mt-5 rounded-2xl shadow-2xl py-3 px-5">
        <h1 className="text-center text-xl font-gray-500 w-11/12   text-gray-500">
          إنشاء الصلاحيات
        </h1>
        <div className="flex flex-col gap-y-1">
          <label className="text-gray-500 font-semibold">أسم الصلاحية</label>
          <Input />
        </div>
        <div className="flex flex-col gap-y-1">
          <label className="text-gray-500 font-semibold">أيقونات</label>
          <Select placeholder="أختار أيقونة..." dir="ltr">
            {Emojis.map((ele) => {
              return <option>{ele}</option>;
            })}
          </Select>
        </div>
        <div className="flex flex-col">
          <label className="text-gray-500 font-semibold ">الصلاحية</label>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1 w-full">
              اختر الصلاحية
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              {
                Validity.map((val)=>(
                  <li>
                    <a>
                      <Checkbox/>
                      <span className="text-lg font-medium">{val}</span>
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <Button color={"white"} backgroundColor={'rgb(74 222 128)'}>
          حفط
        </Button>
      </form>
    </div>
  );
}

export default ValidityPage;
