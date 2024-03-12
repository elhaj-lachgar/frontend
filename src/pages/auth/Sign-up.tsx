import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [loading, setLoading] = useState(false);
  const [opacity, setOpacity] = useState(false);
  const [confirmOpacity, setConfirmOpacity] = useState(false);
  const router = useNavigate();
  const handleClick = async () => {
    setLoading(true);
    await new Promise((resolve) => setInterval(resolve, 3000));
    setLoading(false);
    router("/");
  };
  return (
    <form className="flex flex-col gap-y-2 px-5 border w-[400px] md:w-[450px] bg-white rounded-lg shadow-lg py-4">
      <h1 className="text-gray-500 text-center text-2xl">أنشاء حساب</h1>
      <div className="flex flex-col gap-y-1 ">
        <label className="text text-lg text-gray-400">بريد إلكتروني</label>
        <input
          className="h-10 outline-gray-600 border-[2px] rounded-md  border-gray-300"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-y-1 ">
        <div className="flex flex-col gap-y-1 ">
          <label className="text text-lg text-gray-400">كلمة السر</label>
          <label className="input input-bordered flex items-center gap-2">
            <input type={!opacity ? "password" : "text"} className="grow" />
            {!opacity ? (
              <Eye
                className="cursor-pointer"
                onClick={() => setOpacity(true)}
              />
            ) : (
              <EyeOff
                className="cursor-pointer"
                onClick={() => setOpacity(false)}
              />
            )}
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-y-1 ">
        <label className="text text-lg text-gray-400">تأكد من كلمةالسر</label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type={!confirmOpacity ? "password" : "text"}
            className="grow"
          />
          {!confirmOpacity ? (
            <Eye
              className="cursor-pointer"
              onClick={() => setConfirmOpacity(true)}
            />
          ) : (
            <EyeOff
              className="cursor-pointer"
              onClick={() => setConfirmOpacity(false)}
            />
          )}
        </label>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-y-1 w-[45%] ">
          <label className="text text-lg text-gray-400">صورة</label>
          <input
            className="h-10 outline-gray-600 border-[2px] rounded-md  border-gray-300"
            type="file"
          />
        </div>
        <div className="flex flex-col gap-y-1 w-[45%] ">
          <label className="text text-lg text-gray-400">أسم</label>
          <input
            className="h-10 outline-gray-600 border-[2px] rounded-md  border-gray-300"
            type="text"
          />
        </div>
      </div>

      <button
        className="bg-green-400 h-11 w-full rounded-lg text-white text-lg mt-4"
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        {loading ? (
          <div className="flex justify-center items-center">
            <span className="loading loading-spinner"></span>
          </div>
        ) : (
          "تسجيل حساب"
        )}
      </button>
      <hr />
      <div className="flex gap-x-1 justify-center items-center">
        عندك حساب ؟
        <Link to={"/auth/sign-in"} className="text-green-500">
          تسجيل الدخول
        </Link>
      </div>
    </form>
  );
}

export default SignUp;
